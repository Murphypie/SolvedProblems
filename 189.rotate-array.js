/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
};

let nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k)

// @lc code=end

/*
    // 1 2 3 4 5 6, k = 2
    // 1->3, 3->5, 5->1, 6->2, 2->4, 4->6

    k = k%nums.length
    let count = 0;
    for(let start = 0; count<nums.length; start++){
        let current = start;
        let prev= nums[start];
        do{
            let next = (current+k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        }while(start !== current)
    }
    return nums
 */