/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const len = nums.length;
  const sum = nums.reduce((prev, cur) => prev + cur, 0);
  if (sum % 2) return false;
  const target = sum / 2;

  const dp = Array.from({ length: len + 1 }, () => new Array(target + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < len; i += 1) {
    for (let c = 0; c <= target; c += 1) {
      if (nums[i] <= c) {
        dp[i + 1][c] = dp[i][c] || dp[i][c - nums[i]];
      } else {
        dp[i + 1][c] = dp[i][c];
      }
    }
  }

  return dp[len][target];
};

var canPartition = function(nums) {
  let max = 0;
  const sum = nums.reduce((prev, cur) => {
    max = Math.max(max, cur);
    return prev + cur;
  }, 0);

  if (sum % 2) return false;
  const target = sum / 2;
  if (target === max) return true;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let c = target; c >= num; c -= 1) {
      dp[c] ||= dp[c - num];
    }
  }

  return dp[target];
};


var canPartition = function(nums) {
  let max = 0;
  const sum = nums.reduce((prev, cur) => {
    max = Math.max(max, cur);
    return prev + cur;
  }, 0);

  if (sum % 2) return false;
  const target = sum / 2;
  if (target === max) return true;

  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  let maxReachable = 0;
  for (const num of nums) {
    maxReachable = Math.min(maxReachable + num, target);
    for (let c = maxReachable; c >= num; c -= 1) {
      dp[c] ||= dp[c - num];
    }
  }

  return dp[target];
};
