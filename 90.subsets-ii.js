/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort();
    let output = [];
    const dfs = (i, arr) =>{
        if(i === nums.length){
            output.push([...arr])
            return
        };
        arr.push(nums[i])
        dfs(i+1, arr)
        arr.pop()
        while(nums[i] === nums[i+1]){
            i += 1
        }
        dfs(i+1, arr)
    }
    dfs(0, [])

    return output;
};
// @lc code=end

subsetsWithDup([1,2,2])












































/*
    nums = nums.sort();
    let output = [];
    const dfs = (i, arr) =>{
        if(i === nums.length){
            output.push([...arr])
            return
        };
        arr.push(nums[i])
        dfs(i+1, arr)
        arr.pop()
        while(nums[i] === nums[i+1]){
            i += 1
        }
        dfs(i+1, arr)
    }
    dfs(0, [])

    return output;
*/





















/*
    nums = nums.sort()
    let set = new Set();
    let output = [];
    const dfs = (nums, curr, k) =>{
        if(curr.length > k) return
        output.push(curr);
        for(let i = 0; i<nums.length; i++){
            let arr = curr.concat(nums[i])
            let str = arr.join(',')
            if(!set.has(str)){
                set.add(str)
                dfs(nums.slice(i+1), arr, k)
            }
        }
    }
    dfs([...nums], [], nums.length)
    return output;
*/