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
   let buy = Infinity;
   let profit = 0;
   for(let i = 0; i<prices.length; i++){
       buy = Math.min(buy, prices[i]);
       profit = Math.max(profit, prices[i]-buy)
   }
   return profit;
};


// @lc code=end

/*
 let buy = Infinity;
    let max = 0;
    for(let i = 0; i<prices.length; i++){
        buy = Math.min(buy, prices[i]);
        max = Math.max(max, prices[i]-buy);
    }
    return max;
*/
