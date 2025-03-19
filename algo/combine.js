// 77. 组合
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
//
// 你可以按 任何顺序 返回答案。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];

  const func = (start, path) => {
    // console.log(start, path);
    for (let i = start; i <= n; i += 1) {
      const newPath = [...path, i];
      if (newPath.length === k) {
        result.push(newPath);
      } else {
        func(i + 1, newPath);
      }
    }
  }
  func(1, []);
  return result;
};

combine(4, 2)
