/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

class PriorityQueue{
    constructor(n){
        this.storage = [];
        this.size = 0;
        this.length = n
    }

    insert(arr){
        if(this.size < this.length){
            this.storage.push(arr);
            this.size++;
        }else{
            this.storage = this.storage.sort((a,b)=>{
                return a[1]-b[1]
            })

            if(this.storage[this.size-1][1] > arr[1]){
                this.storage.pop();
                this.storage.push(arr)
            }
        }
    }
}


var kClosest = function(points, k) {
    let pq = new PriorityQueue(k);

    for(let i =0; i<points.length; i++){
        let distance = points[i][1] * points[i][1] + points[i][0] * points[i][0]
        pq.insert([points[i], distance])
    }

    const result = []
    for(let i = 0; i<pq.storage.length; i++){
        result.push(pq.storage[i][0])
    }
    return result
}

kClosest([[1,3],[-2,2]],1);
// @lc code=end


/*
    let p = Math.floor((points.length-2)/2) // Parents of last element
    for(let i = p; i >= 0; i--){
        heapifyDown(points, i, distance)
    }
    let solution = []
    for(let i=0; i<k; i++) {
        solution.push(remove(points, distance))
    }
    
    return solution

    function remove(heap, weightFunction) {
        let val = heap[0]
        heap[0] = heap.pop()
        heapifyDown(heap, 0, weightFunction)
        return val
    }

    function heapifyDown(heap, idx, weightFunction){
        let left = 2*idx + 1;
        let right = 2*idx + 2;
        let smallest = left;

        if(left >= heap.length) return;
        if(right < heap.length && weightFunction(heap[left])>weightFunction(heap[right])){
            smallest = right
        }
        if(weightFunction(heap[idx]) > weightFunction(heap[smallest])){
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
            heapifyDown(heap, smallest, weightFunction)
        }
    }

    function distance(point) {
        return point[0] * point[0] + point[1] * point[1]
    }
*/

/*
 // 1. Regard points array as an unordered heap
    // 2. From the last parent, and to root parent, heapifyDown
    // 3. Heapify Down will compare left and right distance, and whichever is smaller one will be compared to the distance of parennt
    // 4. If parent is greater, swap parent with smallest element and run heapifyDown again at that smallest element
    // to make sure there's no smaller value on its child 
    // 4-1. If parent is less than smallest element, then do nothing
    // 5. Heapify Down will yield the smallest distance value on the zeroth element, use custom remove function to return the 0th element 
    // 5-1. In that custom remove function, save the 0th element to a variable and set the 0th element to heap.pop() (last element)
    // 6. Heapify at 0 to move down the 0th element
    // 7. Repeat remove function for k amount. 

    let p = Math.floor((points.length-2)/2); // parent
    
    for(let i = p; i>=0; i--){
        heapify(points, i, distance);
    }
    let output = [];

    for(let j = 0; j<k; j++){
        output.push(remove(points, distance))
    }

    function remove(heap, distance){
        let val = heap[0]
        heap[0] = heap.pop();
        heapify(heap, 0, distance);
        return val
    }

    function heapify(heap, parent, distance){
        let left = parent*2+1;
        let right = parent*2+2;
        let smallest = left;

        if(left >= heap.length) return
        if(right<heap.length && 
            distance(heap[left]) > distance(heap[right])){
                smallest = right;
        }
        if(distance(heap[parent]) > distance(heap[smallest])){
            [heap[parent], heap[smallest]] = [heap[smallest], heap[parent]];
            heapify(heap, smallest, distance); 
        }
    }

    function distance(arr){
        return arr[0]*arr[0] + arr[1]*arr[1]
    }

    return output;
};

kClosest([[10,5], [3,5], [7,4], [3,3],[5,-1],[-2,4]], 3);
*/