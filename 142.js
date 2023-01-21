
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//solution with two pointers;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

  let f = head;
  let s = head;

  while(f && f.next && f.next.next) {
      f = f.next.next;
      s = s.next;

      if (s === f) {
          s = head;
          while(s !== f) {
              s = s.next;
              f = f.next;
          }
          return s;
      }
  }

  return null;
  
};


//solution with a set 

var detectCycle = function(head) {

  let log = new Set();


  while(head?.next) {
      if (log.has(head)) return head;
      log.add(head);
      head = head.next;
  }

  return null;

    
    
};