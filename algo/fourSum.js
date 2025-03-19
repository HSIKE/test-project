/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => (a - b));
    if (nums.slice(0, 4).reduce((prev, cur) => (prev + cur)) > target) return [];
    if (nums.slice(-4).reduce((prev, cur) => (prev + cur)) < target) return [];
  const result = [];
  for (let i = 0; i < nums.length - 3; i += 1) {
    if (nums[i] > 0 && nums[i] > target) break;
    if (nums[i] === nums[i - 1]) continue;
    const newTarget = target - nums[i];
    for (let j = i + 1; j < nums.length - 2; j += 1) {
      if (nums[j] > 0 && nums[j] > newTarget) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const newNewTarget = newTarget - nums[j]
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        const sum = nums[k] + nums[l];
        if (sum === newNewTarget) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          k += 1;
          l -= 1;
          while (k < l && nums[k] === nums[k - 1]) {
            k += 1
          }
          while (k < l && nums[l] === nums[l + 1]) {
            l -= 1
          }
          continue;
        }
        if (sum < newNewTarget) {
          k += 1;
        } else {
          l -= 1;
        }
      }
    }
  }
  return result;
};
