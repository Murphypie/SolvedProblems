/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // const numberMap = new Map();
    // for(let i = 0; i<numbers.length; i++){
    //   const compliment = target - numbers[i];
    //   if(numberMap.has(compliment)) return [numberMap.get(compliment)+1, i+1];
    //   numberMap.set(numbers[i], i);
    // }

    // Two pointers
    let left = 0;
    let right = numbers.length-1;

    while(left < right){
        let sum = numbers[left] + numbers[right];
        if(sum === target){
            return [left+1, right+1]
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }

    
};
// @lc code=end

