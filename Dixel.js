import { ethers } from "ethers";
import { IP } from ".";
import CONFIG from "./config";
import pixoo from "./Pixoo";
import calculateBestRpc from "./utils/bestRPC";

export default class Dixel {
  nftContract;
  dixelContract;
  currentId;
  Pixoo;
  pauseSlideshow = true;

  async init() {
    const bestRPC = await calculateBestRpc();
    console.log("provider", bestRPC);
    this.provider = new ethers.providers.JsonRpcProvider(bestRPC.url);
    this.dixelContract = new ethers.Contract(
      CONFIG.dixel.contract,
      CONFIG.dixel.abi,
      this.provider
    );
    this.nftContract = new ethers.Contract(
      CONFIG.nft.contract,
      CONFIG.nft.abi,
      this.provider
    );
    this.Pixoo = new pixoo(IP);
    const currentId = await this.currentTokenId();
    this.drawId(currentId);
  }

  async currentTokenId() {
    this.currentId = (await this.nftContract.nextTokenId()).toNumber() - 1;
    return this.currentId;
  }

  async monitor() {
    console.log("monitoring");
    this.nftContract.on(
      "Mint",
      async (player, tokenId, pixelCount, totalPrice) => {
        // pause slideshow
        this.pauseSlideshow = true;

        console.log(player, tokenId, pixelCount, totalPrice);
        const id = tokenId.toNumber();
        const base64 = await this.nftContract.generateBase64SVG(id);
        const data = base64.split(",")[1];
        this.drawImageFromBase64(data);

        //start slideshow after a minute
        setTimeout(() => {
          this.pauseSlideshow = false;
          this.slideshow();
        }, 60 * 1000);
      }
    );
  }

  async drawImageFromBase64(base64) {
    await this.Pixoo.drawImageFromBase64(base64);
    await this.Pixoo.push();
  }

  async drawId(id) {
    await this.Pixoo.drawImageFromURL(`https://dixel.club/nft/${id}.png`);
    await this.Pixoo.push();
  }

  async slideshow() {
    const totalCount = await this.currentTokenId();
    let currentId = totalCount;
    const nextImage = async () => {
      if (this.pauseSlideshow) {
        console.log("currently paused");
        return;
      }
      setTimeout(async () => {
        console.log("drawing image", currentId);
        await this.drawId(currentId);
        currentId = currentId - 1;
        if (currentId < 0) {
          this.slideshow();
        } else {
          nextImage();
        }
      }, 1000);
    };

    nextImage();
  }
}
