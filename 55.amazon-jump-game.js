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

// Can go over the last index - true

// Edge cases 
// [0] - true

var canJump = function(nums) {
    let idx = 0;
    let max = 0;
    let target = nums.length - 1;
  
    while(idx < nums.length) {
      max = Math.max(max, idx + nums[idx]);
      
      if (max >= target) {
        return true;
      }
      
      if (max <= idx && nums[idx] === 0) {
        return false;
      }
      
      idx++;
    }
    
    return false;
};

let arr = [3,2,1,0,4]
canJump(arr);
// @lc code=end

