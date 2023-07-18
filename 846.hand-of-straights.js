/*
 * @lc app=leetcode id=846 lang=javascript
 *
 * [846] Hand of Straights
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
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
        return Math.max(this.storage[0], this.storage[this.size-1]);
    }
    findMin(){
        return Math.min(this.storage[0], this.storage[this.size-1]);
    }
    findSize(){
        return this.size;
    }
  }


var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false;
    let handObj = {};
    let minHeap = new MinHeap()
    for(card of hand){
        if(!handObj[card]){
            handObj[card] = 0
            minHeap.insert(card)
        }
        handObj[card]++
    }

    while(minHeap.size){
        let first = minHeap.storage[0]
        for(let i = first; i<first+groupSize; i++){
            if(!handObj[i]) return false;
            handObj[i] -= 1;
            if(handObj[i] === 0){
                if(i !== minHeap.storage[0]) return false;
                minHeap.removeFirstNode();
            }
        }
    }
    return true;
};
// @lc code=end

let hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
isNStraightHand(hand, groupSize)