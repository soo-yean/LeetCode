/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let temp = head;
    let prev = null;

    while (temp) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    return prev;
};