/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const set = new Map();
  const traverse = (node) => {
    if (!node) return null
    if (set.has(node)) return set.get(node);
    const newNode = new Node(node.val);
    set.set(node, newNode);
    newNode.next = traverse(node.next);
    newNode.random = traverse(node.random);
    return newNode;
  };
  return traverse(head);
};
