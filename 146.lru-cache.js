/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.stack = new Map();
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let value = this.stack.get(key);
    if(value === undefined) return -1
    this.stack.delete(key);
    this.stack.set(key, value);

    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     if(this.stack.has(key)){
        this.stack.delete(key);
    }
    if(this.stack.size === this.capacity){
        this.stack.delete(this.stack.keys().next().value);
    }
    this.stack.set(key, value);
};


let lRUCache

let strArr = ["LRUCache","put","put","get","put","get","put","get","get","get"]//["LRUCache","get","put","get","put","put","get","get"]
let valueArr = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
let output = [];

for(let i = 0; i<strArr.length; i++){
    if(strArr[i] === "LRUCache"){
        lRUCache = new LRUCache(...valueArr[i])
        output.push(null)
    }
    if(strArr[i] === "put"){
        lRUCache.put(valueArr[i][0], valueArr[i][1])
        output.push(null)
    }
    if(strArr[i] === 'get'){
        output.push(lRUCache.get(...valueArr[i]))
    }
    lRUCache
}





// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); 
// lRUCache.stack;

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end











/*
LRUCache.prototype.get = function(key) {
    let value = this.stack.get(key);
    if(this.stack.has(key)){
        this.stack.delete(key)
        this.stack.set(key, value)
        return value;
    }else{
        return -1;
    }
};


 LRUCache.prototype.put = function(key, value) {
    if(this.stack.has(key)){
        this.stack.delete(key);
    }
    if(this.stack.size === this.capacity){
        this.stack.delete(this.stack.keys().next().value);
    }
    this.stack.set(key, value);
};


 */