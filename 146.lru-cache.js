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


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
