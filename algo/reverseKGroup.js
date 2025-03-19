
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
     }
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const root = new ListNode();
  let prev = root;
  const recur = (node) => {
    if (!node) return;
    const queue = [];
    let last = node;
    while (last) {
      queue.unshift(last);
      if (queue.length >= k) break;
      last = last.next;
    }
    if (queue.length < k) {
      prev.next = node;
      return;
    }
    const next = last.next;
    queue.reduce((p, cur) => {
      cur.next = null;
      p.next = cur;
      last = cur;
      return p.next;
    }, prev);
    prev = last;
    recur(next);
  };
  recur(head);
  return root.next;
};

const node = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(5)
      )
    )
  )
);
reverseKGroup(node, 3);
