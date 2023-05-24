/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Can go over the last index - true

// Edge cases 
// [0] - true

var canJump = function(nums) {
    // Greedy
    // Do it again
    let lgi = nums.length-1;
    for(let i = nums.length-1; i>=0; i--){
        if(i+nums[i] >= lgi) lgi = i;
    }
    return lgi === 0 ? true:false;
};


let arr = [3,2,1,0,4]
canJump(arr);
// @lc code=end























/* Also greedy
 if(nums.length === 1) return true;

    let stepLeft = nums[0]

    for(let i = 1; i<nums.length-1; i++){
        if(stepLeft === 0) return false
        stepLeft = stepLeft -1;
        if(stepLeft < nums[i]){
            stepLeft = nums[i]
        }
    }

    return stepLeft > 0 ? true : false
*/








/* Greedy Approach
 let lgi = nums.length - 1; //Last Good Index;

    for(let i = nums.length -1; i>=0; i--){
        if(i+nums[i]>=lgi){
            lgi = i;
        }
    }

    return lgi === 0
*/







/*
   let idx = 0;
    let max = 0;
    let target = nums.length - 1;
  
    while(idx < nums.length) {
      max = Math.max(max, idx + nums[idx]);
      
      if (max >= target) {
        return true;
      }
      
      if (max <= idx && nums[idx] === 0) {
        return false;
      }
      
      idx++;
    }
    
    return false;
*/