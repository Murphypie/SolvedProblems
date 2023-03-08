/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */



// @lc code=start
function threeSum(nums){
    nums = nums.sort((a,b)=>a-b);
    let output = [];
    for(let i = 0; i<nums.length-2; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            if(nums[left]+nums[right]+nums[i] > 0){
                right--
            }else if(nums[left]+nums[right]+nums[i] === 0){
                output.push([nums[left], nums[i], nums[right]])
                while(nums[left] === nums[left+1]) left++;
                while(nums[right]=== nums[right-1]) right--;
                left++
                right--;
            }else{
                left++
            }
        }
    }
    return output;
};


var nums = [-1,0,1,2,-1,-4]
threeSum(nums);

// @lc code=end

/*
  nums.sort((a,b)=> a-b);

    if(nums.length < 3) return [];
    let result = [];
    let target = 0;
    for(let i = 0; i<nums.length - 2; i++){
        if(nums[i]>target) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length - 1;
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === target){
                result.push([nums[i], nums[j], nums[k]])
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++;
                k--;
            }else if(sum<target){
                j++
            }else{
                k--
            }
            
        }
    }
    return result;
*/