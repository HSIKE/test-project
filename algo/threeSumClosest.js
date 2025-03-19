/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => (a - b));
  let result;
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] === nums[i - 1]) continue;
    if ((result > target) && (nums[i] >= (result / 3))) break;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const curSum = nums[i] + nums[start] + nums[end];
      if (curSum === target) {
        return curSum;
      }
      if (result === undefined) {
        result = curSum;
        if (result < target) {
          start += 1;
        } else {
          end -= 1;
        }
        continue;
      }
      if (Math.abs(curSum - target) < Math.abs(result - target)) {
        result = curSum;
      }
      if (curSum < target) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return result;
};

