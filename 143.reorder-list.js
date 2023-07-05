/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
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
 
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
//head.next.next.next.next = new ListNode(5);
reorderList(head)
// @lc code=end

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }













     /*
         let output = new ListNode(0);
    let node = output;
    let fHalf = [];
    let sHalf = [];
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        fHalf.push(slow)
        slow = slow.next;
    }
    while(slow){
        sHalf.unshift(slow);
        slow = slow.next;
    }
    while(sHalf.length || fHalf.length){
        let first = fHalf.shift();
        let second = sHalf.shift();
        if(first){
            node.next = first
            node = node.next;
        }
        if(second){
            node.next = second
            node = node.next;
        }
    }
    node.next = null
    return output.next
     */