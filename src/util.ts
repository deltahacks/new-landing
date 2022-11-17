export const mod = (k: number, n: number): number => {
  let res = k % n;
  if (res < 0) {
    return res + n;
  } else {
    return res;
  }
};
