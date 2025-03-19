// 80. 删除有序数组中的重复项 II
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
//
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
  // var removeDuplicates = function(nums) {
  //   let index = 1;
  //   let count = 1;
  //   let deletedCount = 0;
  //   for (let i = 1; i < nums.length; i += 1) {
  //     if (nums[i] !== nums[i - 1]) {
  //       count = 1;
  //       nums[index] = nums[i];
  //       index += 1;
  //       continue;
  //     }
  //     count += 1;
  //     if (count <= 2) {
  //       nums[index] = nums[i];
  //       index += 1;
  //     } else {
  //       deletedCount += 1;
  //     }
  //   }
  //   nums.splice(nums.length - deletedCount, deletedCount);
  //   return nums.length;
  // };
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    let index = 2;
    for (let i = 2; i < nums.length; i += 1) {
      if (nums[i] !== nums[index - 2]) {
        nums[index] = nums[i];
        index += 1;
      }
    }
    nums.splice(index, nums.length - index);
    return index;
  }
