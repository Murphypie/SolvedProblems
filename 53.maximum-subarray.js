/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0;
    let max = -Infinity;

    for(let i = 0; i<nums.length; i++){
        prev = Math.max(prev+nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;

};

maxSubArray( [5,4,-1,7,8])
// @lc code=end
