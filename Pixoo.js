import fetch from "cross-fetch";
import { BLACK } from "./colors";
import { getChar } from "./font";
import jimp from "jimp";
import sharp from "sharp";
import { chunk } from "lodash";

export default class Pixoo {
  address;
  size;
  counter;
  pixelCount;
  buffer;

  constructor(address, size = 64) {
    this.address = `http://${address}/post`;
    this.size = size;
    this.pixelCount = size * size;
    this.buffer = new Uint8Array(this.pixelCount * 3);
  }

  toBase64() {
    return Buffer.from(this.buffer).toString("base64");
  }

  toUint8Array(base64) {
    return new Uint8Array(Buffer.from(base64, "base64"));
  }

  drawCharacter(char, x, y, rgb = BLACK) {
    const matrix = getChar(char);
    if (matrix) {
      for (const index in matrix) {
        const bit = matrix[index];
        if (bit === 1) {
          const local_x = index % 3;
          const local_y = Math.floor(index / 3);
          this.drawPixel(x + local_x, y + local_y, rgb);
        }
      }
    }
  }

  async drawImageFromURL(url) {
    const img = await jimp.read(url);
    await img.resize(64, 64);
    for (let x = 0; x < 64; x++) {
      for (let y = 0; y < 64; y++) {
        const color = img.getPixelColor(x, y);
        const { r, g, b } = jimp.intToRGBA(color);
        this.drawPixel(x, y, [r, g, b]);
      }
    }
  }

  async drawImageFromBase64(base64url) {
    let buffer = Buffer.from(base64url.replace(/^data:.+;base64,/, ''), "base64");
    const png = await sharp(buffer)
      .resize(64, 64)
      .raw()
      .toBuffer({ resolveWithObject: true });
    const pixelArray = chunk(this.toUint8Array(png.data), 4);
    let count = 0;
    for (let x = 0; x < 64; x++) {
      for (let y = 0; y < 64; y++) {
        const [r, g, b] = pixelArray[count];
        this.drawPixel(y, x, [r, g, b]);
        count++;
      }
    }
  }

  drawText(text, x, y, rgb) {
    for (const index in text) {
      const char = text[index];
      this.drawCharacter(char, index * 4 + x, y, rgb);
    }
  }

  drawPixel(x, y, rgb) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      throw new Error("out of bounds");
    }

    const index = x + y * this.size;
    this.colorPixel(index * 3, rgb);
  }

  colorPixel(index, rgb = [0, 0, 0]) {
    this.buffer[index] = rgb[0];
    this.buffer[index + 1] = rgb[1];
    this.buffer[index + 2] = rgb[2];
  }

  fill(rgb) {
    for (let i = 0; i < this.buffer.length; i = i + 3) {
      this.colorPixel(i, rgb);
    }
  }

  fillRow(rowIndex, rgb) {
    for (let i = 0; i < 64; i++) {
      this.drawPixel(i, rowIndex, rgb);
    }
  }

  async post(data) {
    const resp = await fetch(this.address, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await resp.json();
    return json;
  }

  async loadCounter() {
    const json = await this.post({
      Command: "Draw/GetHttpGifId",
    });
    console.log("current counter", json.PicId);
    this.counter = json.PicId;
  }

  async push() {
    await this.loadCounter();
    this.counter += 1;
    console.log("pushing state!");
    const result = await this.post({
      Command: "Draw/SendHttpGif",
      PicNum: 1,
      PicWidth: this.size,
      PicOffset: 0,
      PicID: this.counter,
      PicSpeed: 1000,
      PicData: this.toBase64(),
    });
    console.log(result);
  }
}
