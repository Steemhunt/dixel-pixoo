const FONT_MATRIX = {
  0: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  1: [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  2: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  3: [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
  4: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  5: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  6: [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  8: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  a: [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  b: [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
  c: [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
  d: [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  e: [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
  f: [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  g: [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
  h: [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  i: [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  j: [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  k: [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  l: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
  m: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  n: [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  o: [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  p: [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  q: [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1],
  r: [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  s: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  t: [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
  u: [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  v: [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  w: [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  x: [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  y: [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  z: [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  A: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  B: [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
  C: [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
  D: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  E: [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  F: [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
  G: [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1],
  H: [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
  I: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  J: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  K: [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  L: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  M: [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  N: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  O: [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  P: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  Q: [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
  R: [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  S: [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
  T: [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  U: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  V: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  W: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  X: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  Y: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  Z: [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  "!": [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  "'": [0, 1, 0, 1],
  "(": [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
  ")": [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
  "+": [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  ",": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  "-": [0, 0, 0, 0, 0, 0, 1, 1, 1],
  "<": [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  "=": [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  ">": [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  "?": [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  "[": [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  "]": [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  "^": [0, 1, 0, 1, 0, 1],
  _: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  ":": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  ".": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  "/": [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
  "{": [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  "|": [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  "}": [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1],
  "~": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  $: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
  "@": [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
  "%": [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
};

export function getChar(char) {
  if (FONT_MATRIX[char]) return FONT_MATRIX[char];
}
