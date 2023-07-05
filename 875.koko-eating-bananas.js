/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    if(piles.length === 1) return Math.ceil(piles/h)
    let max = Math.max(...piles);
    let low = 0;
    let high = max;
    let output = Infinity;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let banana = piles.reduce((prev, curr)=>{
            prev += Math.ceil(curr/mid)
            return prev;
        }, 0)
        if(banana <= h){
            output = Math.min(output, mid)
            high = mid-1
        }else{
            low = mid+1
        }
    }
    
    return output;
};
let piles = [30,11,23,4,20], h = 5

minEatingSpeed(piles, h) 
// @lc code=end

