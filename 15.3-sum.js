/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */



// @lc code=start
function threeSum(nums){
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

/*
const output = {};

    for(let i = 0; i<nums.length-1; i++){
        const target = nums[i];
        let hashMap = {};
        for(let j = i+1; j<nums.length; j++){
            let compliment = 0-(target + nums[j])
            if(hashMap[nums[j]]){
                let arr = [target, nums[j], compliment].sort((a,b)=>a-b);
                let arrStr = arr.join().toString()
                if(!output[arrStr]) output[arrStr] = true
            }else{
                hashMap[compliment] = true;
            }
        }
    }
    let objArr = Object.keys(output).map((a)=>{
        return a.split(",").map(Number)
    })
    return objArr
*/