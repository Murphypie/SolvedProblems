/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var maxSlidingWindow = function(nums, k) {
    let n = nums.length
    let leftdp = new Array(n).fill(0);
    leftdp[0] = nums[0];
    let rightdp = new Array(n).fill(0);
    rightdp[n-1] = nums[n-1];
    
    let output = [];

    for(let i = 0; i<nums.length; i++){
         // from left to right
      if (i % k == 0) leftdp[i] = nums[i];  // block_start
      else leftdp[i] = Math.max(leftdp[i - 1], nums[i]);

      // from right to left
      let j = n - i - 1;
      j
      if ((j + 1) % k == 0) rightdp[j] = nums[j];  // block_end
      else if(j !== n-1) rightdp[j] = Math.max(rightdp[j + 1], nums[j]);
    }
    leftdp;
    rightdp

    for(let i = 0; i<leftdp.length-k+1; i++){
        output.push(Math.max(rightdp[i],leftdp[i+k-1]))
    }
    return output;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

// @lc code=end

    // const dequeue = []; 
    // const output = [];
    //     /*
    //  * The goal is to maintain a decreasing monotonic queue and register 
    //  * max value as the window shifts.
    //  * 
    //  * nums = [1,3,-1,-3,5,3,6,7], k = 3
    //  * 
    //  * i        dequeue         output
    //  * 0        [1]             []
    //  * 1        [3]             []
    //  * 2        [3, -1]         [3]
    //  * 3        [3, -1, -3]     [3, 3]
    //  * 4        [5]             [3, 3, 5]
    //  * 5        [5, 3]          [3, 3, 5, 5]
    //  * 6        [6]             [3, 3, 5, 5, 6]
    //  * 7        [7]             [3, 3, 5, 5, 6, 7]
    //  */

    // for (let i = 0; i < nums.length; i++) {
    //     // add the number at the right position queue
    //     while (nums[i] > dequeue[dequeue.length - 1]) {
    //         dequeue.pop();
    //     }
    //     dequeue.push(nums[i]);

    //     /**
    //      * once the window fully overlaps the array, we can start register
    //      * the maximum values in each iteration. 
    //      */
    //     if (i >= k - 1) {
    //         output.push(dequeue[0]);
    //         // remove maximum value when it's moving outside of the window
    //         if (nums[i - k + 1] === dequeue[0]) {
    //             dequeue.shift();
    //         }
    //     }
    // }
    
    // return output;