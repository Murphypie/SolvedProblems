/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [0];
    let tempDifference = new Array(temperatures.length).fill(0)
    for(let i = 1; i<temperatures.length; i++){
        while(temperatures[stack[stack.length-1]]<temperatures[i]){
            let idx = stack.pop();
            tempDifference[idx] = i - idx
        }
        stack.push(i);

    }
   return tempDifference;
};
dailyTemperatures([30,40,50,60])
// @lc code=end

