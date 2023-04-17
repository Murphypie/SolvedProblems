/*
 * @lc app=leetcode id=2104 lang=javascript
 *
 * [2104] Sum of Subarray Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    let sum = 0;

    for(let i = 0; i<nums.length; i++){
        let smallest = Math.min(nums[i]);
        let largest = Math.max(nums[i]);
        for(let j = i; j<nums.length; j++){
            smallest = Math.min(smallest, nums[j])
            largest = Math.max(largest, nums[j])
            sum += largest-smallest
        }
    }

    return sum;
};

let nums = [4, -2, -3, 4, 1]; // [4,3,5,4,3];
subArrayRanges(nums);
// @lc code=end



































/*
 let sum = 0;
    for(let i = 0; i<nums.length; i++){
        let smallest = Math.min(nums[i]);
        let largest = Math.max(nums[i]);
        for(let j = i; j<nums.length; j++){
            smallest = Math.min(nums[j], smallest);
            largest = Math.max(nums[j], largest);

            sum+= (largest-smallest);
        }
    }
    return sum;
*/
