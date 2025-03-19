/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => (a - b));
  for (let i = 0; i < nums.length - 2; i += 1) {
    const pivot = nums[i];
    if (pivot > 0) break;
    if (pivot === nums[i - 1]) continue;
    const target = 0 - pivot;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[start] + nums[end];
      if (sum === target) {
        result.push([pivot, nums[start], nums[end]]);
        start += 1;
        end -= 1;
        while (start < end) {
          if (nums[start] === nums[start - 1]) {
            start += 1;
          } else {
            break;
          }
        }
        while (start < end) {
          if (nums[end] === nums[end + 1]) {
            end -= 1;
          } else {
            break;
          }
        }
        continue;
      }
      if (sum < target) {
        start += 1;
        continue;
      }
      end -= 1;
    }
  }
  return result;
};
