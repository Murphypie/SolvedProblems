/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(gas.reduce((prev, curr)=>prev+curr) < cost.reduce((prev, curr)=>prev+curr)) return -1
    let total = 0;
    let output = 0;
    for(let i = 0; i<gas.length; i++){
        total += gas[i]-cost[i];
        if(total<0){
            total = 0;
            output = i+1
        }
    }
    return output;
};
// @lc code=end

let gas = [5,1,2,3,4], cost = [4,4,1,5,1]
canCompleteCircuit(gas, cost)
