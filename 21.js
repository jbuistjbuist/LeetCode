/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//not recursive solution 

var mergeTwoLists = function(list1, list2) {

    if (!list1 || !list2) {
        return list1 || list2
    }
    
    const dummy = new ListNode(undefined, undefined);
    let prev = dummy;

    while(true) {

        if (!list1 && !list2) {
            break;
        }

        if (!list1) {
            prev.next = list2;
            break;
        }
        if (!list2) {
            prev.next = list1;
            break;
        }

        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else  {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    return dummy.next;
    
};


//solution with recursion 

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }
};