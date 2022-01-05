/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | boolean  {
  // 1. Loop through a given array
  // 2. As we loop an array, save complement (target-nums[i]) and index to complement Cache.
  // 3. When a number at a specific index is present in the complement cache, return indexes
  const numberMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    const difference = target - number
    if (numberMap.has(difference)) return [numberMap.get(difference), i]
    numberMap.set(number, i)
  }
  return false
};

twoSum([2,7,11,15], 9)
// @lc code=end

