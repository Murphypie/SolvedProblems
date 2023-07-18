/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */

class MinHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getParent(index){
        return this.storage[this.getParentIndex(index)];
    }
  
    getLeftChildIndex(index){
        return 2*index+1;
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }
    getLeftChild(index){
        if(this.hasLeftChild(index)) return this.storage[this.getLeftChildIndex(index)]
    }
  
    getRightChildIndex(index){
        return 2*index+2;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }
    getRightChild(index){
        if(this.hasRightChild(index)) return this.storage[this.getRightChildIndex(index)];
    }
  
    hasChild(index){
        return this.hasLeftChild(index) || this.hasRightChild(index);
    }
  
    swap(index1, index2){
        const temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }
  
    heapfyUp(){ // used when adding an element
        // swap a new element with the parent if a value is bigger(max) or smaller (min)
        let index = this.size-1;
        while(this.hasParent(index) && this.getParent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
  
    heapfyDown(){ // used when removing an element
        // swap a root element down the tree if a value is smaller(max) or bigger (min)
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index)<this.getLeftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if(this.storage[index] < this.storage[smallerChildIndex]){
                break;
            }else{
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
    insert(val){
        this.storage[this.size] = val;
        this.size++;
        this.heapfyUp();
    }
    removeFirstNode(){
        if(this.size === 0) throw new Error("Heap is empty");
        let value = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.size--;
        this.heapfyDown();
        return value;
    }
    findMax(){
        return Math.max(this.stoarge[0], this.storage[this.size-1]);
    }
    findMin(){
        return Math.min(this.stoarge[0], this.storage[this.size-1]);
    }
    findSize(){
        return this.size;
    }
}

var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap()
    this.size = k
    for(let i = 0; i<nums.length; i++){
        this.add(nums[i])
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val);
    if(this.minHeap.size > this.size){
        this.minHeap.removeFirstNode()
    }
    return this.minHeap.storage[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end


let klarge = new KthLargest(3,[4,5,8,2])
