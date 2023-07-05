/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    
};
let nums = [3,1,3,4,2]
findDuplicate(nums)
// @lc code=end



























/* Floyds cycle detection
    let slow = 0;
    let fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break;
    }
    
    let slow2 = 0;
    while(true){
        slow = nums[slow]
        slow2 = nums[slow2];
        if(slow === slow2) return slow;
    }
*/

/* Binary
    const small_or_equal = (curr) =>{
        let count = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i]<=curr){
                count++
            }
        }
        return count;
    }
    let left = 0, right = nums.length;
    let duplicate = -1;
    while(left<=right){
        let curr = Math.floor((left+right)/2);
        if(small_or_equal(curr)>curr){
            duplicate = curr;
            right = curr-1
        }else{
            left = curr+1
        }
    }
    return duplicate

*/