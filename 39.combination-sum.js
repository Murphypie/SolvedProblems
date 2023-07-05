/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];

    const backTrack = (i, arr, sum) =>{
        if(sum === target){
            output.push([...arr]);
            return
        }
        if(i >= candidates.length || sum > target) return

        arr.push(candidates[i])
        backTrack(i, arr, sum+candidates[i])
        arr.pop();
        backTrack(i+1, arr, sum)

    }
    backTrack(0, [], 0)

    return output;
};
// @lc code=end

let candidates = [2,3,5], target = 8

combinationSum(candidates, target)



































/*
    let output = [];

    const dfs = (i, curr, sum) =>{
        if(sum===target){
            output.push([...curr])
            return
        }
        if(sum>target || i >= candidates.length) return;

        curr.push(candidates[i])
        dfs(i, curr, sum+candidates[i]);
        curr.pop();
        dfs(i+1, curr, sum)
    }
    dfs(0, [], 0)


    return output;
*/