var lengthOfLongestSubsequence = function(nums, target) {
  const len = nums.length;
  const memo = Array.from({ length: len }, () => new Array(target + 1).fill(-Infinity));
  const recur = (index, rest) => {
    if (rest === 0) return 0;
    if (index < 0 || rest < 0) return -Infinity;
    if (memo[index][rest] > 0) {
      return memo[index][rest];
    }
    return memo[index][rest] = Math.max(
      recur(index - 1, rest - nums[index]) + 1,
      recur(index - 1, rest),
    );
  }

  return Math.max(recur(len - 1, target), -1);
};

// recur(i) = Math.max(recur(i - 1, c), recur(i - 1, c - nums[i]) + 1);
//  ⬇️
// recur(i + 1) = Math.max(recur(i, c), recur(i, c - nums[i] + 1);
//

var lengthOfLongestSubsequence = function(nums, target) {
  const len = nums.length;
  const memo = Array.from({ length: len + 1 }, () => new Array(target + 1).fill(-Infinity));
  memo[0][0] = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j <= target; j += 1) {
      if (j < nums[i]) {
        memo[i + 1][j] = memo[i][j];
      } else {
        memo[i + 1][j] = Math.max(memo[i][j], memo[i][j - nums[i]] + 1);
      }
    }
  }

  return Math.max(memo[len][target], -1);
};


var lengthOfLongestSubsequence = function(nums, target) {
  const len = nums.length;
  const memo = Array.from({ length: 2 }, () => new Array(target + 1).fill(-Infinity));
  memo[0][0] = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j <= target; j += 1) {
      if (j < nums[i]) {
        memo[(i + 1) % 2][j] = memo[i % 2][j];
      } else {
        memo[(i + 1) % 2][j] = Math.max(memo[i % 2][j], memo[i % 2][j - nums[i]] + 1);
      }
    }
  }

  return Math.max(memo[len % 2][target], -1);
}

var lengthOfLongestSubsequence = function(nums, target) {
  const len = nums.length;
  const memo = new Array(target + 1).fill(-Infinity);
  memo[0] = 0;

  for (const num of nums) {
    for (let j = target; j >= num; j -= 1) {
      memo[j] = Math.max(memo[j], memo[j - num] + 1);
    }
  }

  return Math.max(memo[target], -1);
};
