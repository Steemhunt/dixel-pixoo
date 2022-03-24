import { ethers } from "ethers";
import any from "promise.any";

const TESTNET_NODES = [
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  "https://data-seed-prebsc-2-s1.binance.org:8545/",
  "https://data-seed-prebsc-1-s2.binance.org:8545/",
  "https://data-seed-prebsc-2-s2.binance.org:8545/",
  "https://data-seed-prebsc-1-s3.binance.org:8545/",
  "https://data-seed-prebsc-2-s3.binance.org:8545/",
];

const MAINNET_NODES = [
  "https://binance.nodereal.io/",
  "https://binance.ankr.com/",
  "https://bsc-dataseed.binance.org/",
  "https://bsc-dataseed1.defibit.io/",
  //   "https://bsc-dataseed1.ninicoin.io/",
  "https://bsc-dataseed1.binance.org/",
  "https://bsc-dataseed2.defibit.io/",
  "https://bsc-dataseed2.ninicoin.io/",
  "https://bsc-dataseed2.binance.org/",
  "https://bsc-dataseed3.defibit.io/",
  "https://bsc-dataseed3.ninicoin.io/",
  "https://bsc-dataseed3.binance.org/",
  "https://bsc-dataseed4.defibit.io/",
  "https://bsc-dataseed4.ninicoin.io/",
  "https://bsc-dataseed4.binance.org/",
];

export default async function calculateBestRpc(isTestnet = false) {
  console.log("calculating best rpc", isTestnet ? "TESTNET" : "MAINNET");

  let nodes = MAINNET_NODES;

  if (isTestnet) {
    nodes = TESTNET_NODES;
  }

  async function calculateBlock(url) {
    const provider = new ethers.providers.JsonRpcProvider(url);
    const start = new Date().getTime();
    const blockNumber = await provider.getBlockNumber();
    return { url, blockNumber, latency: new Date().getTime() - start };
  }

  const promises = [];
  for (const url of nodes) {
    promises.push(calculateBlock(url));
  }

  // let result = await Promise.all(promises);
  let result = await any(promises);

  return result;
}
