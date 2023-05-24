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
    let output = -Infinity;
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        if(sum + nums[i] < nums[i]){
            sum = 0;
        }
        sum += nums[i]
        output = Math.max(sum, output)
    }

    return output;
};

const arr = [-2,1,-3,4,-1,2,1,-5,4]
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