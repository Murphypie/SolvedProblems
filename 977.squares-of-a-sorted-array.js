/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {


};

sortedSquares([-4,-1,0,3,10])
// @lc code=end

/*
    // 1. use two pointers (start and end)
    // 2. Whichever greater will be pushed to output arr with its value squred
    // 3. Depending on which was greater, we will either increase or decrease left or right poninter

    let n = nums.length-1;
    let left = 0;
    let right = n;
    let output = [];

    for(let i = n; i>=0; i--){
        let square;
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            square = nums[right];
            right--;
        }else{
            square = nums[left];
            left++;
        }
        output[i] = square*square;
    }
    return output;
*/