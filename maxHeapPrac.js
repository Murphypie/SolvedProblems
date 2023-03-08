class MaxHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }
    hasParent(index){
        return Math.floor((index-1)/2) < this.size ? true:false
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getParent(index){
        if(this.hasParent(index)) return this.storage[this.getParentIndex(index)]
        else return false
    }

    getLeftChildIndex(index){
        return index*2+1
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size ? true:false
    }
    getLeftChild(index){
        if(this.hasLeftChild(index)) return this.storage[this.getLeftChildIndex(index)]
    }

    getRightChildIndex(index){
        return index*2+2
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size ? true:false
    }
    getRightChild(index){
        if(this.hasLeftChild(index)) return this.storage[this.getRightChildIndex(index)]
    }
    hasChild(index){
        if(this.hasLeftChild(index) || this.hasRightChild(index)) return true;
        else return false
    }

    swap(index1, index2){
        let temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }

    heapfyUp(){ // used when adding an element
        // swap a new element with the parent if a value is bigger(max) or smaller (min)
        let nodeIndex = this.size-1;
        let node = this.storage[this.size-1]
        while(node>this.getParent(nodeIndex)){
            this.swap(nodeIndex, this.getParentIndex(nodeIndex))
            nodeIndex = this.getParentIndex(nodeIndex);
            node = this.storage[nodeIndex];
        }

    }

    heapfyDown(){ // used when removing an element
        // swap a root element down the tree if a value is smaller(max) or bigger (min)
        let currIndex = 0;
        while(this.hasLeftChild(currIndex)){
            let biggerChildIndex = this.getLeftChildIndex(currIndex);
            if(this.hasRightChild(currIndex) && this.getRightChild(currIndex)>this.getLeftChild(currIndex)){
                biggerChildIndex = this.getRightChildIndex(currIndex);
            }
            if(this.storage[currIndex] > this.storage[biggerChildIndex]){
                break;
            }else{
                this.swap(currIndex, biggerChildIndex);
            }
            currIndex = biggerChildIndex;
        }


    }
    insert(val){
        this.storage.push(val);
        this.size++;
        this.heapfyUp();
    }
    removeFirstNode(){
        this.swap(0, this.size-1);
        this.storage.pop();
        this.size--;
        this.heapfyDown();
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

const maxHeap = new MaxHeap();
maxHeap.insert(323)
maxHeap.insert(252)
maxHeap.insert(282)
maxHeap.insert(121)
maxHeap.insert(131);
maxHeap.insert(222);
maxHeap.insert(141);
maxHeap.insert(66);
maxHeap.insert(111);



maxHeap.removeFirstNode();

maxHeap;
