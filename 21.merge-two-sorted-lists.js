/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 1 3 5
// 2 4 6
// list1.next = list2  // 1->2
// list2 and list1.next(3) // 1->2->3

var mergeTwoLists = function(list1, list2) {
if(!list1 || !list2) return list1 ? list1:list2

    if(list1.val<list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(100);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

mergeTwoLists(l1, l2)

// @lc code=end

