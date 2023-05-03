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
    // 1. Use while loop to traverse l1 and l2
    // 2. Add two numbers as I traverse and if it exceeds 10, then add 1 to next step
    // 3. As I traverse, create add a node to a new list for output.

    let anchor = 0;
    let output = new ListNode(0);
    let node = output;
    while(l1 || l2){
        sum = anchor;
        anchor = 0;
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum >= 10){
            sum -= 10;
            anchor = 1;
        }
        node.next = new ListNode(sum);
        node = node.next;
    }
    if(anchor === 1){
        node.next = new ListNode(1)
    }

    return output.next;
};




function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const listMaker = (arr) =>{
    let list = new ListNode(0)
    let head = list;
    for(let i of arr){
        head.next = new ListNode(i);
        head = head.next;
    }
    return list.next;
}

let l1 = listMaker([9,9,9,9,9,9,9])
let l2 = listMaker([9,9,9,9])

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


