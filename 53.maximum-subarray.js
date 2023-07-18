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

const arr = [31,-41,59,26,-53,58,97,-93,-23,84]
maxSubArray(arr)
// @lc code=end










































/*
  let prev = 0;
    let max = -Infinity;

    for(let i = 0; i<nums.length; i++){
        prev = Math.max(prev+nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
*/


/*
  let sum = -Infinity;
  let max = -Infinity;
  for(let i = 0; i<nums.length; i++){
      sum += nums[i]
      if(nums[i] > sum) sum = nums[i];
      max = Math.max(max, sum);
  }
  return max;
*/