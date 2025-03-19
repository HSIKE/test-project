/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function(target) {
  const result = [];
  const pivot = Math.ceil(target / 2);
  for (let i = pivot; i > 1; i -= 1) {
    let curTarget = target - i;
    const temp = [i];
    for (let j = i - 1; j > 0; j -= 1) {
      curTarget -= j;
      if (curTarget < 0) break;
      temp.unshift(j);
      // console.log(temp);
      if (curTarget === 0) {
        result.unshift(temp);
        break;
      }
    }
  }
  return result;
};

console.log(fileCombination(6))
