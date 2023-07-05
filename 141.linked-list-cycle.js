/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let listMap = new Map();
    let node = head;
    while(node){
        if(listMap.has(node.next)){
            output = listMap.get(node.next);
            return true;
        }
        listMap.set(node, true)
        node = node.next;
    }

    return false
};
// @lc code=end
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(0)
// head.next.next.next = new ListNode(-4)
// let node = head;
// node = node.next;
// head.next.next.next.next = node
hasCycle(head);

