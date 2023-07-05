/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = [];

    const dfs = (i, arr) =>{
        if(i === nums.length){
            output.push([...arr]);
            return;
        }
        arr.push(nums[i])
        dfs(i+1, arr);
        arr.pop();
        dfs(i+1, arr)
    }
    dfs(0, [])

    return output;
};
// @lc code=end
subsets([1,2,3])
