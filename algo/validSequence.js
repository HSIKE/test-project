// https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
/**
 * @param {number[]} inArr
 * @param {number[]} outArr
 * @return {boolean}
 */
var validateBookSequences = function(inArr, outArr) {
  if (inArr.length !== outArr.length) return false;
  const stack = [];
  let i = 0;
  let j = 0;
  while (i < inArr.length && j < outArr.length) {
    const last = outArr[stack.length - 1];
    if (outArr[j] === last) {
      stack.pop();
      j += 1;
    } else {
      stack.push(inArr[i]);
      i += 1;
    }
  }
  return stack.length === 0;
};
