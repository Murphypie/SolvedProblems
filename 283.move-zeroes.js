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
    let left = 0;
    let right = 1;
    while(right < nums.length){
        if(nums[left] === 0 && nums[right] === 0){
            left--
        }else if(nums[left] === 0){
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
        }
        left++
        right++
    }
    return nums;
};


moveZeroes([0,1,0,3,12])//[0,0,1]
// @lc code=end


































/*
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0){
            for(let j = i; j<nums.length; j++){
                if(nums[j] !== 0){
                    let temp = nums[i];
                    nums[i]= nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }

    return nums;
 */


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