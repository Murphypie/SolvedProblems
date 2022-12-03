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
    let head = node
    let sum = 0
    while(l1 !== null || l2 !== null || sum !== 0){
        let carry = 0;
        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum -= 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
    }
    return node.next;
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

let l1 = listMaker([2,4,3])//listMaker([9,9,9,9,9,9,9])
let l2 = listMaker([5,6,4])//listMaker([9,9,9,9])

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


