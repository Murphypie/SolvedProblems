/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [curHold, curNotHold] = [-Infinity, 0];
    for(let price of prices){
        let prevHold = curHold;
        let prevNotHold = curNotHold;

        // Buy - don't have any stock - need to buy or hold
        curHold = Math.max(prevHold, prevNotHold - price)
        // Sell - already has stock - need to sell or hold
        curNotHold = Math.max(prevNotHold, prevHold+price)
    }
    return curNotHold
};
maxProfit([7,1,5,3,6,4]);

// @lc code=end



























    /*
        // It is impossible to sell stock on first day, set -infinity as initial value for curHold
    let [curHold, curNotHold] = [-Infinity, 0];
    
    for(const stockPrice of prices){
        
        let [prevHold, prevNotHold] = [curHold, curNotHold];
        
        // either keep hold, or buy in stock today at stock price
        curHold = Math.max(prevHold, prevNotHold - stockPrice );
        
        // either keep not-hold, or sell out stock today at stock price
        curNotHold = Math.max(prevNotHold, prevHold + stockPrice );
    }
    
    // Max profit must come from notHold state finally.
    return curNotHold; 
    */