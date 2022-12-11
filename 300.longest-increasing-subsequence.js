/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
   
};

let nums = [10, 9, 2, 5, 3, 7, 105, 6, 4];
lengthOfLIS(nums);
// @lc code=end

/* dynamic programming
  let dp = new Array(nums.length).fill(1);
    let longest = 1;
    for(let i = 1; i<nums.length; i++){
        for(let k = 0; k<i; k++){
            if(nums[k] < nums[i]){
                dp[i] = Math.max(dp[i], dp[k]+1);
                longest = Math.max(longest, dp[i])
            }
        }
    }
    return longest;
*/

/* Intelligently build a subsequence
let output = [];
    output[0] = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num > output[output.length-1]){
            output.push(num)
        }else{
            let j = 0;
            while(num > output[j]){
                j += 1;
            }
            output[j] = num;
        }
    }
    return output.length;
*/

/* Improved with Binary - Intelligently build a subsequence
 let output = [];
    output[0] = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num > output[output.length-1]){
            output.push(num)
        }else{
           let index = binarySearch(output, num);
           output[index] = num;
        }
    }
    function binarySearch(output, num){
        let left = 0;
        let right = output.length-1

        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(output[mid] === num){
                return mid;
            }
            if(num > output[mid]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return left
    }
    return output.length;

*/