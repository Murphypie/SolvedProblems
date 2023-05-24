/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = Infinity;
    let output = 0;
    for(let i = 0; i<prices.length; i++){
        low = Math.min(low, prices[i]);
        output = Math.max(output, prices[i]-low)
    }
    return output;
}


let prices =  [7,1,5,3,6,4]

maxProfit(prices)

// @lc code=end



































/*

    // DP
    let dp = new Array(prices.length);
    let minNumber = prices[0];
    dp[0] = 0;
    for(let i = 1; i<prices.length; i++){
        dp[i] = Math.max(dp[i-1], prices[i]-minNumber)
        minNumber = Math.min(minNumber, prices[i])
    }
    return dp[dp.length-1];

*/





/*
 let buy = Infinity;
    let max = 0;
    for(let i = 0; i<prices.length; i++){
        buy = Math.min(buy, prices[i]);
        max = Math.max(max, prices[i]-buy);
    }
    return max;
*/
