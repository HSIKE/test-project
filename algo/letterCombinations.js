/* 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const matrix = [];
  for (const s of digits) {
    matrix.push(map[s]);
  }
  let result = matrix.shift();
  while (matrix.length) {
    const newList = [];
    const list = matrix.shift();
    for (let i = 0; i < result.length; i += 1) {
      for (let j = 0; j < list.length; j += 1) {
        newList.push(result[i] + list[j]);
      }
    }
    result = newList;
  }
  return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = [];
  const dfs = (prev, index) => {
    if (index === digits.length) {
      result.push(prev);
      return;
    }
    const temp = map[digits[index]];
    for (let i = 0; i < temp.length; i += 1) {
      dfs(prev + temp[i], index + 1);
    }
  };
  dfs('', 0);
  return result;
}
