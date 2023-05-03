/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // do it again
    // 1. Binary search tree
    // 2. Find if target is on the left side or right side
    // 3. Set correct left and right and do binary search

    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(target === nums[mid]) return left
        if(nums[left] > target){ // right side  
            if(nums[left]>nums[right]){ // need to adjust right
                right -= 1
            }else{
                left = mid+1
            }
        }else{ // left side
            if(nums[right]>nums[left]){
                left += 1
            }else{
                right = mid -1;
            }
        }
    }
    return false;
};

let nums = [4,5,6,7,8,1,2,3]//[4,5,6,7,0,1,2]// [3,4,5,6,1,2] // [1,3]
let target = 8 // 5 //2 // 2
search(nums, target);
// @lc code=end




































/*
    let left = 0;
    let right = nums.length - 1;
      
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      }
      
      // When dividing the roated array into two halves, one must be sorted.
      
      // Check if the left side is sorted
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
          // target is in the left
          right = mid - 1;
          
        } else {
          // target is in the right
          left = mid + 1;
        }
      } 
      
      // Otherwise, the right side is sorted
      else {
        if (nums[mid] <= target && target <= nums[right]) {
          // target is in the right
          left = mid + 1;
  
        } else {
          // target is in the left
          right = mid - 1;
        }
      }
    }
      
    return -1;
*/