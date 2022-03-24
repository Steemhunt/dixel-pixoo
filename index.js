require("dotenv").config();
import pixoo from "./Pixoo";
import dixel from "./Dixel";

export const IP = process.env.PIXOO_IP_ADDRESS;

const SIZE = 64;
const Pixoo = new pixoo(IP);
const Dixel = new dixel();

async function slideshow() {
  await Dixel.init();
  //   await Dixel.slideshow();
  await Dixel.monitor();
}
// slideshow();

async function init() {
  await Dixel.init();
  await Dixel.monitor();
}

init();

function showPrices() {
  Pixoo.fill([255, 0, 0]);
  for (let i = 0; i < SIZE / 2; i++) {
    Pixoo.fillRow(i, [252, 111, 111]);
  }

  Pixoo.drawText("HUNT", SIZE / 2 - 8, 6, [255, 255, 255]);
  const huntPrice = "$0.795906 USD";
  Pixoo.drawText(
    huntPrice,
    SIZE / 2 - huntPrice.length * 2,
    18,
    [255, 255, 255]
  );

  for (let i = SIZE / 2; i < SIZE; i++) {
    Pixoo.fillRow(i, [100, 255, 161]);
  }

  Pixoo.drawText("MINT", SIZE / 2 - 8, SIZE / 2 + 6, [0, 0, 0]);
  const mintPrice = "$0.000010 USD";
  Pixoo.drawText(
    mintPrice,
    SIZE / 2 - mintPrice.length * 2,
    SIZE / 2 + 18,
    [0, 0, 0]
  );

  Pixoo.push();
}
