/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const buildBst = (start = 0, end = nums.length - 1) => {
    if (start > end) return null;
    const pivot = start + Math.floor((end - start) / 2);
    const root = new TreeNode(nums[pivot]);
    root.left = buildBst(start, pivot - 1);
    root.right = buildBst(pivot + 1, end);
  }
  return buildBst();
};
