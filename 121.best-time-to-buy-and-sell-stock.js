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
    let minPrice = Infinity;
    let maxPrice = 0;

    for(let i =0; i<prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxPrice = Math.max(maxPrice, prices[i]-minPrice)
    }
    return maxPrice

};

let prices = [7,6,4,3,1]

maxProfit(prices)

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
