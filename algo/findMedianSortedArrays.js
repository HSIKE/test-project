// 4. 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
//
// 算法的时间复杂度应该为 O(log (m+n)) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const resultArr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i === nums1.length) {
      resultArr[i + j] = nums2[j];
      j += 1;
    } else if (j === nums2.length) {
      resultArr[i + j] = nums1[i];
      i += 1;
    } else if (nums1[i] < nums2[j]) {
      resultArr[i + j] = nums1[i];
      i += 1;
    } else {
      resultArr[i + j] = nums2[j];
      j += 1;
    }
  }
  const middle = resultArr.length / 2;
  if (middle % 1) {
    return resultArr[Math.floor(middle)];
  }
  // to avoid overflow
  return (resultArr[middle] - resultArr[middle - 1]) / 2 + resultArr[middle - 1];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length;
  const endIndex = Math.floor(total / 2) + 1;
  let i = 0;
  let j = 0;
  const stack = [];
  // the result is calculated by 2 (total % 2 === 0) numbers or just 1 from middle of the target array;
  // so the right part of the target number(s) is no need to be traversed;
  while (stack.length < endIndex) {
    if (i === nums1.length) {
      stack.push(nums2[j]);
      j += 1;
    } else if (j === nums2.length) {
      stack.push(nums1[i]);
      i += 1;
    } else if (nums1[i] < nums2[j]) {
      stack.push(nums1[i]);
      i += 1;
    } else {
      stack.push(nums2[j]);
      j += 1;
    }
  }
  if (total % 2) {
    return stack.pop();
  }
  return (stack.pop() + stack.pop()) / 2;
};

