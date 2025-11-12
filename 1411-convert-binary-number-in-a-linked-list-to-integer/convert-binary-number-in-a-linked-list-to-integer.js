/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let output = 0;
    let curr = head;

    while(curr) {
        output = (output * 2) + curr.val;
        curr = curr.next;
    }

    return output;
};