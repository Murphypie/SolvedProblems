/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   
};

moveZeroes([0,0,1])
// @lc code=end

/*
   let left = 0;
    let right = 1;
    while(right < nums.length){
        if(nums[left] === 0 && nums[right] === 0){
            left--
        }else if(nums[left] === 0){
            nums[left] = nums[right];
            nums[right] = 0; 
        }
        left++
        right++
    }
    return nums
*/


/*
 for(let i = nums.length-1; i>=0; i--){
        if(nums[i] === 0){
            let movingIndex = i;
            while(movingIndex < nums.length-1){
                if(nums[movingIndex+1] !== 0){
                    nums[movingIndex] = nums[movingIndex+1];
                    nums[movingIndex+1] = 0;
                }
                movingIndex++
            }
        }
    }
    return nums;
*/