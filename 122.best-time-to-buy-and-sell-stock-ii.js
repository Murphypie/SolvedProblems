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
  
    
};
maxProfit([1,2,3,4,5]);

// @lc code=end



































/* greedy
  let min = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price > min) {
            profit += price - min;
            min = price;
        } else {
            min = Math.min(min, price);
        }
    } 
    
    return profit;




    let output = 0;
    if(prices.length>0){
        prices.reduce((acc,next)=>{
            if(next>acc){
                output += next-acc
            }
            return next;
        })
    }
    return output;
*/





    /* bottom-up DP + iteration
    
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