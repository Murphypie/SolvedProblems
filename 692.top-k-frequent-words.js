/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */




 var topKFrequent = function(words, k) {
    //again

    const wordMap = {};

    for(word of words){
        if(!wordMap[word]) wordMap[word] = 0;
        wordMap[word]++;
    }

    const objArr = Object.entries(wordMap).sort((a,b)=>{
        if(a[1] === b[1]){
            return a[0].localeCompare(b[0])
        }else{
            return b[1]-a[1]
        }
    })

    const output = [];

    for(let i = 0; i<k; i++){
        output.push(objArr[i][0])
    }

    return output;
};


topKFrequent( ["i","love","leetcode","i","love","coding"], 2)
// @lc code=end





















/*
      let hash = {};
    for (let word of words) {
        hash[word] = hash[word]+1||1;
    }
   
    let result = Object.keys(hash).sort((a,b)=>{
        let countCompare = hash[b]-hash[a];
        if(countCompare === 0){
            // if a is before b, return negative
           return a.localeCompare(b);
        }
        return countCompare;
    })
    return result.slice(0,k)
*/

/* Min-Heap, Priority Queue
 const MinHeap = function() {
    this.heap = [];
    
    // [word, freq]
    this.push = function(obj) {
        this.heap.push(obj);
        this.heap.sort((objA, objB) => {
            if (objA[1] === objB[1]) {
                return objA[0].localeCompare(objB[0]);
            }
            return objB[1] - objA[1];
        })
    }
    
    this.pop = function() {
        return this.heap.pop();
    }
    
    this.size = function() {
        return this.heap.length;
    }
    
    this.top = function() {
        return this.heap[this.heap.length - 1];
    }
    
    this.getResult = function() {
        const result = [];
        while(this.size() !== 0) {
           result.unshift(this.pop()[0])
        }
        return result;
    }
}

 var topKFrequent = function(words, k) {
    const map = {};
    const minHeap = new MinHeap();
    
    for (let word of words) {
        if (!map[word]) map[word] = 0;
        map[word]++;
    }
    
    for (let [key, value] of Object.entries(map)) {
    
                
        if (minHeap.size() < k || (minHeap.top()[1] <= value)) {
            minHeap.push([key, value])
        } 
        
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    return minHeap.getResult();
};



*/