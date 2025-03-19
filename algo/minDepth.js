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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let result = Infinity;
  const getDepth = (node, currentDepth = 1) => {
    if (!node.left && !node.right) {
      result = Math.min(result, currentDepth);
      return;
    }
    if (currentDepth >= result) return;
    currentDepth += 1;
    if (node.left) {
      getDepth(node.left, currentDepth);
    }
    if (node.right) {
      getDepth(node.right, currentDepth)
    }

  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
