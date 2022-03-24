import BigNumber from "bignumber.js";

export function getDecimalValue(bn) {
  return new BigNumber(bn.toString()).dividedBy(1e18).toNumber();
}
