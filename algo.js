// 143. Reorder List



// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let slow = head; // starts at the head
    let fast = head.next; // starts at the second node (head.next)
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // moves the slow pointer one step forward
        fast = fast.next.next; // moves the fast pointer two steps forward.
    }

    let second = slow.next; // After finding the middle, we split the list into two parts. second points to the first node of the second half of the list, while slow.next = null breaks the connection between the first and second halves
    let prev = (slow.next = null);
    while (second !== null) {
        const tmp = second.next; // tmp temporarily stores the next node of second.
        second.next = prev; // reverses the link by pointing the current node (second) to the previous node (prev).
        prev = second; // Then, we move prev and second one step forward.
        second = tmp;
    }

    let first = head; // initialized to point to the head (the first node of the first half of the list)
    second = prev; // pointing to the first node of the reversed second half (stored in prev)
    while (second !== null) {
        const tmp1 = first.next; //  stores the next node of the first half (first.next)
        const tmp2 = second.next; // stores the next node of the second half (second.next)
        first.next = second; // connects the current first node to the current second node
        second.next = tmp1; // connects the current second node to what was the next node of first
        first = tmp1; // first = tmp1; and second = tmp2; advance the first and second pointers to the next nodes in their respective halves.
        second = tmp2;
    }
};