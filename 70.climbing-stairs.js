/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const numberMap = {0:0, 1:1, 2:2}
    const dfs = (n)=>{
        if(n < 3) return numberMap[n]
        for(let i = 3; i<=n; i++){
            numberMap[i] = numberMap[i-1] + numberMap[i-2]
        }
        return numberMap[n]
    }
    return dfs(n)
};
// @lc code=end


climbStairs(44)