// https://leetcode.cn/problems/set-matrix-zeroes/description/
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  let flagRow0 = false;
  let flagCol0 = false;

  for (let i = 0; i < height; i += 1) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
      break;
    }
  }
  for (let i = 0; i < width; i += 1) {
    if (matrix[0][i] === 0) {
      flagRow0 = true;
      break;
    }
  }

  for (let rowIndex = 1; rowIndex < height; rowIndex += 1) {
    for (let colIndex = 1; colIndex < width; colIndex += 1) {
      if (matrix[rowIndex][colIndex] === 0) {
        matrix[0][colIndex] = 0;
        matrix[rowIndex][0] = 0;
      }
    }
  }
  for (let h = 1; h < height; h += 1) {
    for (let w = 1; w < width; w += 1) {
      if (matrix[h][0] === 0 || matrix[0][w] === 0) {
        matrix[h][w] = 0;
      }
    }
  }
  if (flagRow0) {
    for (let i = 0; i < width; i += 1) {
      matrix[0][i] = 0;
    }
  }
  if (flagCol0) {
    for (let i = 0; i < height; i += 1) {
      matrix[i][0] = 0;
    }
  }
};
