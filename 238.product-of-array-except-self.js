/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCounter = 0;
    let maxMulti = 1;
    let output = new Array(nums.length).fill(0)
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0){
            zeroCounter++;
        }else{
            maxMulti *= nums[i]
        }
    }
    
    if(zeroCounter > 1) return output;
    for(let i = 0; i<nums.length; i++){
        if(zeroCounter === 1 && nums[i] === 0){
            output[i] = maxMulti
        }else if(zeroCounter === 0){
            output[i] = maxMulti/nums[i]
        }
    }
    return output;
};

productExceptSelf([0,0])



// @lc code=end


















/*
    let sum = 1;
    let zeroLocation = [];
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0 && zeroLocation.length === 0){
            zeroLocation.push(i)
        }else if(nums[i] === 0 && zeroLocation.length > 1){
            sum = 0;
            break;
        }else{
            sum *= nums[i]
        }
    }
    let resultArr = [];
    for(let i = 0; i<nums.length; i++){
        if(zeroLocation.length !== 0){
            if(i === zeroLocation[0]){
                resultArr.push(sum)
            }else{
                resultArr.push(0);
            }
        }else{
            resultArr.push(sum/nums[i]);
        }
    }
    return resultArr;
*/