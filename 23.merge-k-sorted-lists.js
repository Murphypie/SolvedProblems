/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    const recursive = (lists1, lists2) => {
        if(!lists1 || !lists2) return lists1 ? lists1:lists2
        if(lists1.val < lists2.val){
            lists1.next = recursive(lists1.next, lists2)
            return lists1
        }
        lists2.next = recursive(lists1, lists2.next);
        return lists2
    }

    for(let i = 1; i<lists.length; i++){
        lists[0] = recursive(lists[0], lists[i])
    }
    
    return lists[0];
};
// @lc code=end

