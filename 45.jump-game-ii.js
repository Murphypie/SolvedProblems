/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let output = 0;
    let l = 0, r = 0;
    while(r<nums.length-1){
        let farthest = 0;
        for(let i = l; i<r+1; i++){
            farthest = Math.max(farthest, i+nums[i]);
        }
        l = r+1;
        r = farthest;
        output += 1;
    }
    return output;

};
// @lc code=end
let nums =  [2,3,1,1,4] // [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]
jump(nums)













/* Greedy
    let output = 0;
    let l = 0, r = 0
    while(r<nums.length-1){
        let farthest = 0;
        for(let i = l; i<r+1; i++){
            farthest = Math.max(farthest, i+nums[i]);
        }
        l = r+1
        r = farthest
        output += 1
    }
    return output;
*/




/* DP
    if(nums.length === 1) return 0
    let dp = new Array(nums.length).fill(1);
    dp[nums.length-1] = 0;
    for(let i = nums.length-2; i>=0; i--){
        let lowest = Infinity
        for(let j = i; j<i+nums[i]; j++){
            if(dp[j+1] < lowest){
                lowest = dp[j+1] + 1
            }
        }
        dp[i] = lowest
    }
    return dp[0]
 */