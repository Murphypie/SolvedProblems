/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;
    for(let i = 0; i<nums.length; i++){
        let temp = Math.max(nums[i]+rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};
// @lc code=end

let nums = [2,7,9,3,1]
rob(nums)