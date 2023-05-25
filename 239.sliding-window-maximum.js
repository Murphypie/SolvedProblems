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
    // Do dp, dequeue, priority queue
    

 
};


maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

// @lc code=end





























// PriorityQueue 
/*
var maxSlidingWindow = function(nums, k) {
    
    let heap = new maxHeap();
    let output = [];
    for(let i = 0; i<nums.length; i++){
        heap.insert(i, nums[i])

        if(i>=k-1){
            while(heap.max().index < i-k+1){
                heap.remove();
            }
            
            output.push(heap.max().value)
        }
        

    }
   
    return output;
    
   
};

class maxHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    insert(index, value){
        this.storage.push({index,value});
        this.size++;
        this.heapifyUp(this.size-1)
    }

    heapifyUp(heapIndex){
      let temp = this.storage[heapIndex];
      while(heapIndex>=0){
        let parentIndex = Math.floor((heapIndex-1)/2);
        if(heapIndex >= 1 && this.storage[parentIndex].value<temp.value){
            this.storage[heapIndex] = this.storage[parentIndex]
        }else{
            break;
        }
        heapIndex = parentIndex;
      }
      this.storage[heapIndex] = temp;
    }

    remove(){
        let removed = this.storage[0];
        let popped = this.storage.pop();
        if(this.storage.length > 0){
            this.storage[0] = popped;
            this.heapifyDown(0)
        }
        this.size--;
        return removed;
    }

    heapifyDown(heapIndex){
        let temp = this.storage[heapIndex];
        while(heapIndex*2+1 < this.size-1){
            let childIndex = heapIndex*2+1 // Left
            if(this.storage[childIndex+1] && this.storage[childIndex+1].value > this.storage[childIndex].value){
                childIndex = childIndex+1;
            }
            if(this.storage[childIndex].value > temp.value){
                this.storage[heapIndex] = this.storage[childIndex];
                heapIndex = childIndex;
            }else{
                break;
            }
        }
        this.storage[heapIndex] = temp;
    }

    max(){
        return this.storage[0]
    }
}

*/














    //     /* dequeue
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

    // const dequeue = []; 
    // const output = [];
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



    /* dp
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
    */

 