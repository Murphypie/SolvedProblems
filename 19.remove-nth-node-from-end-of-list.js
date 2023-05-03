/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start

//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function removeNthFromEnd(head, n){
    let fastNode = head;
    let slowNode = head;

    for(let i = 0; i<n; i++){
        fastNode = fastNode.next;
    }
    if(fastNode === null){
        return slowNode.next;
    }
    while(fastNode.next){
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    slowNode.next = slowNode.next.next === null ? null : slowNode.next.next
    return head;
};





let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
removeNthFromEnd(node, 2)


// @lc code=end


























    // let fast = head;
    // let slow = head;
 
    // for (let i = 0; i < n; i++) fast = fast.next
    // if (!fast) return head.next

    // while (fast.next){
    //     fast = fast.next
    //     slow = slow.next
    // }

    // slow.next = slow.next.next

    // return head;