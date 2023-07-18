/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */


class MaxHeap{
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

    heapfyUp(){
        let index = this.size-1;
        while(this.hasParent(index) && this.getParent(index) < this.storage[index]){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapfyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let biggerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index)>this.getLeftChild(index)){
                biggerChildIndex = this.getRightChildIndex(index);
            }
            if(this.storage[index] > this.storage[biggerChildIndex]){
                break;
            }else{
                this.swap(index, biggerChildIndex);
            }
            index = biggerChildIndex;
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


var lastStoneWeight = function(stones) {
    let maxHeap = new MaxHeap();
    for(stone of stones){
        maxHeap.insert(stone)
    }

    while(maxHeap.size > 1){
        let first = maxHeap.removeFirstNode()
        let second = maxHeap.removeFirstNode()
        maxHeap.insert(first-second)

    }
    return maxHeap.storage[0]
};
// @lc code=end

lastStoneWeight([1])

