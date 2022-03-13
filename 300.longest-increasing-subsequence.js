/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    let longest = 1;
    for(let i = 1; i<nums.length; i++){
        for(let k = 0; k<i; k++){
            if(nums[k] < nums[i]){
                dp[i] = Math.max(dp[i], dp[k]+1);
                longest = Math.max(longest, dp[i])
            }
        }
    }
    return longest;
};

let nums = [1,3,6,7,9,4,10,5,6]
lengthOfLIS(nums);
// @lc code=end

