/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1;
        }
    }
    return 1
};

let nums = [1,3,5,6]
let target = 2;
searchInsert(nums, target)
// @lc code=end

/*
   let l = 0, m = 0, r = nums.length-1;

    while(l<=r){
        m = Math.floor((l+r)/2);
        if(nums[m] === target) return m;
        else if(nums[m]<target) l = m + 1;
        else r = m-1;
    }
    return l; */


    /*
        let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]< target){
            left = mid + 1;
        }else if(nums[mid] === target){
            return mid;
        }else{
            right = mid - 1;
        }
    }
    return left
    */