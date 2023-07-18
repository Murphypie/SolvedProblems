/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length).fill(0);
    for(let i = 0; i<cost.length; i++){
        if(i === 0 || i === 1) dp[i] = cost[i];
        else{
            dp[i] = Math.min(dp[i-1], dp[i-2])+cost[i]
        }
    }
    return Math.min(dp[dp.length-1], dp[dp.length-2])
};
// @lc code=end

let cost = [0,1,1,1]
minCostClimbingStairs(cost)