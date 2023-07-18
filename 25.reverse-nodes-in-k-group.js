/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;


    while(true){
        let kth = getKth(groupPrev, k);
        if(!kth) break;
        let groupNext = kth.next;

        let prev = kth.next
        let curr = groupPrev.next;
        while(curr !== groupNext){
            var tmp = curr.next;
            curr.next = prev
            prev=curr;
            curr = tmp
        }
        tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }
  


    function getKth(curr, k){
        while(curr && k > 0){
            curr = curr.next;
            k -=1
        }
        return curr
    }

    return dummy.next;
    
};
// @lc code=end


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);
let k = 2
reverseKGroup(l1, k)
