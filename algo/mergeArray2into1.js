/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let end1 = m - 1;
  let end2 = n - 1;
  let k = m + n - 1;
  while (end2 >= 0 && end1 >= 0) {
    if (nums2[end2] > nums1[end1]) {
      nums1[k] = nums2[end2];
      end2 -= 1;
    } else {
      nums1[k] = nums1[end1];
      end1 -= 1;
    }
    k -= 1;
  }
  while (end2 >= 0) {
    nums1[k] = nums2[end2];
    k -= 1;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0], 3, [2, 5, 6], 3));
