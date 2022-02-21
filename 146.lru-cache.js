/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

const { isConstructorDeclaration } = require("typescript");

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
    if(this.stack.has(key)){
        this.stack.delete(key)
        this.stack.set(key, value)
        return value;
    }else{
        return -1;
    }
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

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
