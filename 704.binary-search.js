/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // for(let i = 0; i<nums.length; i++){
    //     if(nums[i] === target) return i;
    // }
    // return -1

    let low = 0;
    let high = nums.length-1;
    while(low <= high){
        let mid = Math.floor((high+low)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) low = mid + 1;
        else high = mid -1;
    }
    return -1;
};

search([2,5], 5)
// @lc code=end

