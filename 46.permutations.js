/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

};
// @lc code=end

let nums = [1,2,3]          

permute(nums)




























// let output = []

// if(nums.length === 1){
//     return [...nums]
// };
// for(let i = 0; i<nums.length; i++){
//     let n = nums.shift();
//     let perms = permute(nums);
//     if(typeof perms[0] === 'object'){
//         perms.forEach(x=>x.push(n))
//         output.push(...perms);
//     }else{
//         perms.push(n);
//         output.push(perms);
//     }
//     nums.push(n);
// }


// return output;






/*
   let output = []
      const dfs = (arr, curr) =>{
        if(curr.length === nums.length){
            output.push([...curr]);
            return;
        }
 
        for(let i = 0; i<arr.length; i++){
            let modNums = arr.slice(0,i).concat(arr.slice(i+1))
            dfs(modNums, curr.concat(arr[i]))
        }
    }

    dfs(nums, [])
    return output;
*/

