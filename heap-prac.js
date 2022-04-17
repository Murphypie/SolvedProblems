
class minHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    getParentIndex(n){
        return Math.floor((n-1)/2)
    }

    hasParent(n){
        return this.getParentIndex(n) >= 0;
    }
    
    getParent(n){
        if(this.hasParent(n)) return this.storage[this.getParentIndex(n)]
    }

    getLeftChildIndex(n){
        return 2*n+1;
    }

    hasLeftChild(n){
        return this.getLeftChildIndex(n) < this.size;
    }

    getLeftChild(n){
        if(this.hasLeftChild(n)) return this.storage[this.getLeftChildIndex(n)]
    }

    getRightChildIndex(n){
        return 2*n+2;
    }

    hasRightChild(n){
        return this.getRightChildIndex(n) < this.size;
    }

    getRightChild(n){
        if(this.hasRightChild(n)) return this.storage[this.getRightChildIndex(n)]
    }

    swap(i, j){
        let temp = this.storage[j];
        this.storage[j] = this.storage[i];
        this.storage[i] = temp;
    }

    heapfyUp(){
        let n = this.size - 1;
        while(this.hasParent(n) && this.getParent(n) > this.storage[n]){
            this.swap(this.getParentIndex(n), n)
            n = this.getParentIndex(n)
        }
    }

    heapfyDown(){
        let n = 0;
        while(this.hasLeftChild(n)){
            let smallerChildIndex = this.getLeftChildIndex(n);
            if(this.hasRightChild(n) && this.getLeftChild(n) > this.getRightChild(n)){
                smallerChildIndex = this.getRightChildIndex(n)
            }
            if(this.storage[n] < this.storage[smallerChildIndex]){
                break;
            }else{
                this.swap(n, smallerChildIndex)
            }
            n = smallerChildIndex;
        }
    }

    insert(val){
        this.storage[this.size] = val;
        this.size++;
        this.heapfyUp();
    }

    removeFirstNode(){
        let value = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.size--;
        this.heapfyDown();
        return value;
    }
}

const minHeapTest = new minHeap();
minHeapTest.insert(1);
minHeapTest.insert(2);
minHeapTest.insert(5);
minHeapTest.insert(3);
minHeapTest.insert(8);
minHeapTest;
minHeapTest.removeFirstNode();
minHeapTest


class maxHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    getParentIndex(n){
        return Math.floor((n-1)/2)
    }

    hasParent(n){
        return this.getParentIndex(n) >= 0;
    }
    
    getParent(n){
        if(this.hasParent(n)) return this.storage[this.getParentIndex(n)]
    }

    getLeftChildIndex(n){
        return 2*n+1;
    }

    hasLeftChild(n){
        return this.getLeftChildIndex(n) < this.size;
    }

    getLeftChild(n){
        if(this.hasLeftChild(n)) return this.storage[this.getLeftChildIndex(n)]
    }

    getRightChildIndex(n){
        return 2*n+2;
    }

    hasRightChild(n){
        return this.getRightChildIndex(n) < this.size;
    }

    getRightChild(n){
        if(this.hasRightChild(n)) return this.storage[this.getRightChildIndex(n)]
    }

    swap(i, j){
        const temp = this.storage[j];
        this.storage[j] = this.storage[i];
        this.storage[i] = temp;
    }

    heapfyUp(){
        let n = this.size - 1;
        while(this.hasParent(n) && this.storage[n] > this.getParent(n)){
            this.swap(n, this.getParentIndex(n))
            n = this.getParentIndex(n);
        }
    }

    heapfyDown(){
        let n = 0;
        while(this.hasLeftChild(n)){
            let biggerChildIndex = this.getLeftChildIndex(n);
            if(this.hasRightChild(n) && this.getRightChild(n) > this.getLeftChild(n)){
                biggerChildIndex = this.getRightChildIndex(n);
            }
            if(this.storage[n] > this.storage[biggerChildIndex]){
                break;
            }else{
                this.swap(n, biggerChildIndex);
            }
            n = biggerChildIndex
        }
    }

    insert(val){
        this.storage[this.size] = val;
        this.size++;
        this.heapfyUp();
    }

    removeFirstNode(){
        let value = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.size--;
        this.heapfyDown();
        return value;
    }
}

const maxHeapTest = new maxHeap();
maxHeapTest.insert(1)
maxHeapTest.insert(2)
maxHeapTest.insert(5)
maxHeapTest.insert(3)
maxHeapTest.insert(8);
maxHeapTest;
maxHeapTest.removeFirstNode();
maxHeapTest