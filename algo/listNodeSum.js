// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0);
  let prev = result;
  let node1 = l1;
  let node2 = l2;
  let progress = 0;
  while (node1 && node2) {
    const sum = node1.val + node2.val + progress;
    if (sum < 10) {
      prev.next = new ListNode(sum);
      progress = 0;
    } else {
      prev.next = new ListNode(sum - 10);
      progress = 1;
    }
    prev = prev.next;
    node1 = node1.next;
    node2 = node2.next;
  }
  while (node1) {
    const sum = node1.val + progress;
    if (sum < 10) {
      progress = 0;
      node1.val = sum;
      prev.next = node1;
      break;
    }
    prev.next = new ListNode(sum - 10);
    progress = 1;
    prev = prev.next;
    node1 = node1.next;
  }
  while (node2) {
    const sum = node2.val + progress;
    if (sum < 10) {
      progress = 0;
      node2.val = sum;
      prev.next = node2;
      break;
    }
    prev.next = new ListNode(sum - 10);
    progress = 1;
    prev = prev.next;
    node2 = node2.next;
  }
  if (progress) {
    prev.next = new ListNode(1);
  }
  return result.next;
};

console.log(addTwoNumbers(
  new ListNode(
    9,
    new ListNode(9),
  ),
  new ListNode(9),
));
