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
    let dp = new Array(nums.length).fill(-Infinity);
    dp[0] = nums[0];
    let max = nums[0];
    for(let i = 1; i<nums.length; i++){
        dp[i] = (dp[i-1]+nums[i] > nums[i]) ? dp[i-1]+nums[i] : nums[i];
        max = Math.max(max, dp[i])
    }
    
    return max;

};

maxSubArray( [1])
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