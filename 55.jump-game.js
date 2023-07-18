/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let startIndex = 0;
    let max = nums[startIndex]
    for(let i = 1; i<nums.length; i++){
        if(max === 0) break;
        max -= 1
        if(nums[i] > max) max = nums[i];
        startIndex = i
    }
    return nums.length-1===startIndex ? true:false;
};
// @lc code=end

let nums = [2,3,1,1,4]
canJump(nums)