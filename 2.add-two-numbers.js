/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let node = new ListNode(0);
    let head = node;
    let sum = 0;
    let carry = 0;
    let count = 0;

    while (l1 !== null || l2 !== null) {
        let localSum = 0;
        if (l1 !== null) {
            localSum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            localSum += l2.val;
            l2 = l2.next;
        }
        localSum += carry;
        carry = 0;
        if(localSum >= 10){
            carry = 1;
            localSum = localSum - 10;    
        }
        head.next = new ListNode(localSum)
        head = head.next;
        sum += localSum*Math.pow(10, count);
        count = count + 1;
    }
    if(carry === 1){
        head.next = new ListNode(carry);
    }
    return node.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

addTwoNumbers(l1, l2);

// @lc code=end

/*
    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0;
    while(l1 !== null || l2 !== null || sum>0){
       if(l1 !== null){
           sum = sum + l1.val;
           l1 = l1.next;
       }
       if(l2 !== null){
           sum = sum + l2.val;
           l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return list.next;
*/
