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
  let sum = -Infinity;
  let max = -Infinity;
  for(let i = 0; i<nums.length; i++){
      sum += nums[i]
      if(nums[i] > sum) sum = nums[i];
      max = Math.max(max, sum);
  }
  return max;
};

maxSubArray( [-2,1,-3,4,-1,2,1,-5,4])
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