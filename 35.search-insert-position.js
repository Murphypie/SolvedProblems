/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Binary search
    // regular binary search - find target
    // But what if we have to insert in order?
    
    let l = 0, m = 0, r = nums.length-1;

    while(l<=r){
        m = Math.floor((l+r)/2);
        if(nums[m] === target) return m;
        else if(nums[m]<target) l = m + 1;
        else r = m-1;
    }
    return l;
};

let nums = [3,5,7,9,10]
let target = 8;
searchInsert(nums, target)
// @lc code=end

