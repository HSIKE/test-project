/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
  const traverse = (queue) => {
    let prev = null;
    const newQue = [];
    while (queue.length) {
      const cur = queue.shift();
      if (prev) {
        prev.next = cur;
      }
      if (cur) {
        newQue.push(...(cur.left ? [cur.left, cur.right] : [cur.left]));
      }
      prev = cur;
    }
    if (prev) {
      prev.next = null;
    }
    if (newQue.length) traverse(newQue);
  }
  traverse([root])
  return root;
};

console.log(JSON.stringify(connect({
  val: 1,
  left: {
    val: 2,
    left: { val: 3 },
    right: { val: 4 },
  },
  right: {
    val: 5,
    left: { val: 6 },
    right: { val: 7 },
  }
}), null, 4))
