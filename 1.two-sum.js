/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums, target){
  const numberMap = new Map();
  for(let i = 0; i<nums.length; i++){
    const compliment = target - nums[i];
    if(numberMap.has(compliment)) return [numberMap.get(compliment), i];
    numberMap.set(nums[i], i);
  }
};

twoSum([0,4,3,0], 0)
// @lc code=end