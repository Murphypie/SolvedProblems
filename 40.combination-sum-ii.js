/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const output = [];
    candidates = candidates.sort((a,b)=>a-b);

    const backtrack = (start, arr, target) =>{
        if(target === 0){
            output.push([...arr]);
            return
        }
        if(start > candidates.length || target < 0) return;
        let prev = -1
        for(let i = start; i<candidates.length; i++){
            while(candidates[i] === prev) i++
            arr.push(candidates[i]);
            backtrack(i+1, arr, target-candidates[i]);
            arr.pop();
            prev = candidates[i]
        }

    }
    backtrack(0, [], target);
    return output;
};
// @lc code=end

let candidates = [2,2,2], target = 2
combinationSum2(candidates, target)



































/*
    candidates = candidates.sort((a,b)=>a-b);
    let output = [];
    // const dfs = (i, arr, sum) =>{
    //     if(sum === target){
    //         output.push([...arr])
    //         return
    //     } 
    //     if(i>=candidates.length || sum > target) return;
    //     arr.push(candidates[i]);
    //     dfs(i+1, arr, sum+candidates[i])
    //     arr.pop();
    //     while(candidates[i] === candidates[i+1]) i += 1
    //     dfs(i+1, arr, sum)
    // }
    // dfs(0, [], 0)


    const backtrack = (curr, pos, target) =>{
        if(target === 0){
            output.push([...curr]);
        }
        if(target<=0) return;
        let prev = -1;
        for(let i = pos; i<candidates.length; i++){
            if(candidates[i] === prev) continue;
            curr.push(candidates[i]);
            backtrack(curr, i+1, target-candidates[i]);
            curr.pop();
            prev = candidates[i]
        }
    }
    backtrack([],0,target)

    return output
*/