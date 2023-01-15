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
var reverseList = function(head) {

  if (!head) return head;

  let node = null;

  while (head) {
      let curr = head;
      head = head.next;
      curr.next = node;
      node = curr;
  }

  return node;
};