class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  /**
   * The parent folder of a index in a binary tree array is always the floor integer
   * of ((index-1)/2)
   * @param {Number} index Index of element to find child
   * @returns {Number} Returns the parent index
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * The left child of a node in a binary tree array can always be found by (2 * index + 1)
   * @param {Number} index Index of node
   * @returns {Number} Returns the left child of a node
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /**
   * The right child of a node in a binary tree array can always be found by (2 * index + 2)
   * @param {Number} index Index of node
   * @returns {Number} Returns the right child of a node
   */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * Check if node has parent
   * @param {Number} index Index of node
   * @returns {Boolean} Returns true if node has parent
   */
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  /**
   * Check if node has left child
   * @param {Number} index Index of node
   * @returns {Boolean} Returns true if node has a left child
   */
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  /**
   * Check if node has right child
   * @param {Number} index Index of node
   * @returns {Boolean} Returns true if node has a right child
   */
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  /**
   * Check if node has any child
   * @param {Number} index Index of node
   * @returns {Boolean} Returns true if node has at least one child
   */
  hasChild(index) {
    return this.hasLeftChild(index) || this.hasRightChild(index);
  }

  /**
   * Get the parent value of a node
   * @param {Number} index Index of node
   * @returns {Number} Returns the parent value of a node
   */
  getParent(index) {
    return this.storage[this.getParentIndex(index)];
  }

  /**
   * Get the left child of a node
   * @param {Number} index Index of node
   * @returns {Number} Returns the left child of a node
   */
  getLeftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  /**
   * Get the right child of a node
   * @param {Number} index Index of node
   * @returns {Number} Returns the right child of a node
   */
  getRightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  /**
   * Swap two nodes
   * @param {Number} index1 Index of node 1
   * @param {Number} index2 Index of node 2
   */
  swap(index1, index2) {
    const temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  /**
   * Insert a value in the heap
   * @param {Object} obj Value to insert
   */
  insert(obj) {
    // 1. Insert value at the bottom of the heap array
    this.storage[this.size] = obj;

    // 2. Update Size
    this.size++;

    // 3. Heapfy tree array
    this.heapfyUp();
  }

  heapfyUp() {
    // 1. Find last insertion
    let index = this.size - 1;

    // 2. While condition = As long as the node has a parent and the parent value is greater than
    // the node value, continue
    while (
      this.hasParent(index) &&
      this.getParent(index).heapValue > this.storage[index].heapValue
    ) {
      // 3. Swap parent with inserted node
      this.swap(this.getParentIndex(index), index);

      // 4. Since we swap the positions, in order to continue the heapfy process,
      // we need to switch the index to the old parent index
      // because right now, the insert item has the parent position
      index = this.getParentIndex(index);
    }
  }

  heapfyDown() {
    // 1. Start at the root node
    let index = 0;

    // 2. Since a heap is a complete binary tree, must be filled from left to right
    while (this.hasLeftChild(index)) {
      // 3. Get smaller child
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild &&
        this.getRightChild(index).heapValue < this.getLeftChild(index).heapValue
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      // 4. Check if the current node is smaller than the smallest child
      // If so, there is not to be done, we can break the loop
      // If dont, we need to swap the positions
      if (
        this.storage[index].heapValue <
        this.storage[smallerChildIndex].heapValue
      ) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      // 5. Continue moving into the heap
      index = smallerChildIndex;
    }
  }

  /**
   * Remove the first node of the tree array
   * @returns {Number} Value of removed number
   */
  removeFirstNode() {
    // 1. Check if heap is empty
    if (this.size == 0) {
      throw new Error("Heap is empty");
    }

    // 2. Get first node value
    let value = this.storage[0];

    // 3. Make the first item of the storage be the last one
    this.storage[0] = this.storage[this.size - 1];

    // 4. Decrement Size
    this.size--;

    // 5. Heapfy
    this.heapfyDown();

    // 6. Return the old node value
    return value;
  }
}
