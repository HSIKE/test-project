// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (!n) return [];
  const recur = (result, num) => {
    if (num === 0) return result;
    // const newResult = [];
    const map = {};
    result.forEach((str) => {
      for (let i = 0; i <= str.length / 2; i += 1) {
        const strArr = str.split('');
        strArr.splice(i, 0, '(', ')');
        map[strArr.join('')] = true;
      }
    });
    return recur(Object.keys(map), num - 1);
  };
  return recur(['()'], n - 1);
};

console.log(generateParenthesis(3));;
