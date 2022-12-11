
class minHeap{
  /*
    getParentIndex
    hasParent
    getParent
    getLeftChildIndex
    hasLeftChild
    getLeftChild
    getRightChildIndex
    hasRightChild
    getRightChild
    swap
    heapfyUp
    heapfyDown
    insert
    removeFirstNode
  */

    constructor(){
        this.storage = [];
        this.size = 0;
    }

    hasParent(i){
        return this.getParentIndex(i) >= 0
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getParent(i){
        return this.storage[this.getParentIndex(i)];
    }

    getLeftChildIndex(i){
        return 2*i+1
    }

    hasLeftChild(i){
       return this.size > this.getLeftChildIndex(i) 
    }

    getLeftChild(i){
        if(this.hasLeftChild(i)) return this.storage[this.getLeftChildIndex(i)]
    }

    getRightChildIndex(i){
        return 2*i+2
    }

    hasRightChild(i){
        return this.size > this.getRightChildIndex(i)
    }

    getRightChild(i){
        if(this.hasRightChild(i)) return this.storage[this.getRightChildIndex(i)]
    }

    swap(i,j){
        let temp = this.storage[i]
        this.storage[i] = this.storage[j]
        this.storage[j] = temp
    }

    heapfyUp(){
        // used when adding an element
      // swap a new element with the parent if a value is bigger(max) or smaller (min)
      let index = this.size-1;
      while(this.hasParent(index) && this.getParent(index) > this.storage[index]){
        this.swap(index, this.getParentIndex(index))
        index = this.getParentIndex(index);
      }

    }

    heapfyDown(){
        // used when removing an element
      // swap a root element down the tree if a value is smaller(max) or bigger (min)
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index)
            }
            if(this.storage[index] < this.storage[smallerChildIndex]){
                break;
            }else{
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex;
        }
    }

    insert(val){
        this.storage[this.size] = val;
        this.size++;
        this.heapfyUp()
    };

    removeFirstNode(){
        if(this.size === 0) throw new Error("Heap is empty");
        let value = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.size--;
        this.heapfyDown();
        return value;
    }

}

const minHeapTest = new minHeap();
minHeapTest.insert(10);
minHeapTest.insert(15);
minHeapTest.insert(30);
minHeapTest.insert(40);
minHeapTest.insert(50);
minHeapTest.insert(100);
minHeapTest;
minHeapTest.removeFirstNode();
minHeapTest;


class maxHeap{
  
}

const maxHeapTest = new maxHeap();
// maxHeapTest.insert(1)
// maxHeapTest.insert(2)
// maxHeapTest.insert(5)
// maxHeapTest.insert(3)
// maxHeapTest.insert(8);
// maxHeapTest;
// maxHeapTest.removeFirstNode();
// maxHeapTest