/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

export const stringAdd = function (num1, num2) {
  let p = 0;
  let result = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    const cur = (Number(num1[i]) || 0) + (Number(num2[j]) || 0) + p;
    p = Math.floor(cur / 10);
    result = String(cur % 10) + result;
    i -= 1;
    j -= 1;
  }
  if (p > 0) {
    result = String(p) + result;
  }
  return result;
}
