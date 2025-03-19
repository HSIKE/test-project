// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const result = new ListNode();
  let prev = result;
  const swap = (node) => {
    if (!node || !node.next) {
      prev.next = node;
      return;
    }
    const { next } = node;
    const nextNext = next.next;
    prev.next  = next;
    next.next = node;
    node.next = nextNext;
    prev = node;
    swap(nextNext)
  }
  swap(head);
  return result.next;
};
