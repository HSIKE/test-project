/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const len = nums.lengt;
  let index = 0;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[index]
      nums[index] = temp;
      index += 1;
      console.log(nums, index);
    }
  }

  for (let i = index; i < len; i += 1) {
    if (nums[i] === 1) {
      const temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      index += 1;
    }
  }
};

