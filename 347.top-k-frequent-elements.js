/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashmap = {};
    let output = []
    for(let n of nums){
        if(!hashmap[n]){
            hashmap[n] = 0;
        }
        hashmap[n]++;
    }
    let entries = Object.entries(hashmap).sort((a,b)=>{
        return b[1]-a[1]
    })
    for(let i = 0; i<k; i++){
        output.push(entries[i][0])
    }
    return output;
};
let nums = [1,1,1,2,2,3], k = 2
topKFrequent(nums, k)
// @lc code=end

