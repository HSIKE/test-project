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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = [];
  const traverse = (node, path, target) => {
    if (!node) return;
    target -= node.val;
    path = [...path, node.val];
    if (target === 0 && !node.left && !node.right) {
      result.push(path);
      return;
    }
    traverse(node.left, path, target);
    traverse(node.right, path, target);
  }
  return result;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 2 },
    right: { val: 3 },
  },
  right: {
    val: 3,
    left: { val: 1 },
  }
}
pathSum(root, 5);
