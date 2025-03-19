/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return null;
  const right = root.right;
  if (root.left) {
    root.right = root.left;
    root.left = null;
    root = flatten(root.right);
  }
  if (right) {
    root.right = right;
    root = flatten(root.right);
  }
  return root;
};
