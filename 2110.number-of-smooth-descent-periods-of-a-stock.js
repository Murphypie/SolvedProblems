/*
 * @lc app=leetcode id=2110 lang=javascript
 *
 * [2110] Number of Smooth Descent Periods of a Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let output = 0;

    let localHighInd = 0;
    for(let i = 0; i<prices.length; i++){
        if(prices[i]>prices[localHighInd]){
            localHighInd = i;
        }
        output++
        if(i>=1 && prices[i]<prices[i-1]){
            output += i-localHighInd
        }
    }
    return output;
};
// @lc code=end






