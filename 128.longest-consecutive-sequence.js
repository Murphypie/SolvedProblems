/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    let output = 0;
    for(let i = 0; i<nums.length; i++){
        if(!numSet.has(nums[i]-1)){
            let temp = 1;
            while(numSet.has(nums[i]+temp)){
                temp +=1 
            }
            output = Math.max(temp, output)
        }
    }
    return output;
};


longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]);
// @lc code=end





/* Time limit exceeded
    // let hashMap = {};
    // let max = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (!hashMap[nums[i]]) {
    //         hashMap[nums[i]] = 1;
    //         if (hashMap[nums[i] - 1]) hashMap[nums[i]] += hashMap[nums[i] - 1];
    //         if (hashMap[nums[i] + 1]) hashMap[nums[i]] += hashMap[nums[i] + 1];
    //         let upIdx = nums[i] + 1;
    //         let downIdx = nums[i] - 1;
    //         while (hashMap[upIdx] || hashMap[downIdx]) {
    //             if(hashMap[upIdx]){
    //                 hashMap[upIdx] = Math.max(hashMap[upIdx], hashMap[nums[i]]);
    //                 upIdx++
    //             }
    //             if(hashMap[downIdx]){
    //                 hashMap[downIdx] = Math.max(hashMap[downIdx], hashMap[nums[i]]);
    //                 downIdx--;
    //             }
    //         }
    //     }
    //     max = Math.max(max, hashMap[nums[i]]);
    // }
    // return max;
*/