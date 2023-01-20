
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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
var middleNode = function(head) {
  if (!head) return head;

  let length = 0;
  let middle;
  let curr = head;
  
  while (curr) {
      length++;
      curr = curr.next
  }

  middle = Math.ceil(length / 2 + 0.5)

  while (middle > 1) {
      head = head.next
      middle--
  }

  return head;
};