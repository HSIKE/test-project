// https://leetcode.cn/problems/target-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  /* 数组总和为 sum
   * 一部分添加 '-' 后，剩余部分和为 sum_positive， 则 负数部分和为 sum_negative = sum_positive - sum
   * sum_positive + sum_negative = target  ====>  sum_positive = (sum + target) / 2
   * 变成背包问题
   * */
  const sumPositive = nums.reduce((prev, cur) => prev + cur, 0) + target;

  if (sumPositive < 0 || sumPositive % 2) return 0;
  const newTarget = sumPositive / 2;

  const dp = new Array(newTarget + 1).fill(0);
  dp[0] = 1;

  let max = 0;
  for (const num of nums) {
    max = Math.min(max + num, newTarget);
    for (let i = max; i >= num; i -= 1) {
      dp[i] += + dp[i - num];
    }
  }
  return dp[newTarget];
};

