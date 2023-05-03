/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = new Map();
    for(let i = 0; i<nums.length; i++){
        if(!hashMap.has(nums[i])){
            let compliment = target - nums[i];
            hashMap.set(compliment, i);
        }else{
            return [hashMap.get(nums[i]), i]
        }
    }  
    return false;
};

twoSum([2,7,11,15], 9);
// @lc code=end












































// const numberMap = new Map();
// for(let i = 0; i<nums.length; i++){
//   const compliment = target - nums[i];
//   if(numberMap.has(compliment)) return [numberMap.get(compliment), i];
//   numberMap.set(nums[i], i);
// }

// let hashTable = {};
// for(let i = 0; i<nums.length; i++){
//     let compliment = target - nums[i];
//     if(hashTable[nums[i]] !== undefined) return [hashTable[nums[i]], i]
//     hashTable[compliment] = i;
// }
// return false;
