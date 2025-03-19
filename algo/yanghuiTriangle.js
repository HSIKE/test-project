/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i += 1) {
    if (i === 0) {
      result.push([1]);
      continue;
    }
    const lastLv = result[i - 1];
    const curLv = [];
    for (let j = 0; j <= i; j += 1) {
      curLv[j] = (lastLv[j - 1] || 0) + (lastLv[j] || 0);
    }
    result.push(curLv);
  }
  return result;
};
