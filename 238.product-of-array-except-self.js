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
    let max = 1;
    let isThereZero = false;
    let isThereMorethanOneZero = false;
    let outputArr = new Array(nums.length).fill(0);
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== 0) max *= nums[i]
        else if(!isThereZero){
            isThereZero = true;
        }else if(isThereZero){
            isThereMorethanOneZero = true;
        }
    }

    for(let i = 0; i<nums.length; i++){
        if(isThereZero && !isThereMorethanOneZero){
            if(nums[i] === 0){
                outputArr[i] = max 
            }
        }else if(isThereMorethanOneZero){
            outputArr[i] = 0;
        }else{
            outputArr[i] = max / nums[i]
        }
    }
    return outputArr;
};

productExceptSelf([-1,1,0,-3,3])



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