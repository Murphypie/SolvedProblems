/*
Question
Given a list of integers nums and an integer k, determine if there are three distinct elements in the list that add up to k.

Input 1
nums = [4, 1, 1, 3]
k = 5

Output
true

input 2
nums = [4, 1, 2, 3]
k = 5

Output 2
false

Input 3
[1, 5, 19, 20]
k = 25

Output
true
*/

function elementsAdduptoK(nums, k){
    nums.sort((a,b)=>a-b);
    for(let i = 2; i<nums.length; i++){
        let sum = nums[i-2]+nums[i-1]+nums[i];
        if(sum === k) return true
        else return false;
    }
    
}

let nums = [1, 5, 19, 20];
let k = 25;
elementsAdduptoK(nums, k);

























/*
   nums.sort((a,b)=>a-b);
    for(let i = 2; i<nums.length; i++){
        let sum = nums[i-2]+nums[i-1]+nums[i];
        if(sum === k) return true
        else return false;
    }
*/