/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */


// @lc code=start

var RandomizedSet = function() {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.set.has(val)){
        this.set.add(val);
        return true
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randIndex = Math.floor(Math.random() * this.set.size);
    return Array.from(this.set)[randIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end


var obj = new RandomizedSet()
obj.insert(1);
obj.remove(2);
obj.insert(3);
obj.insert(4);
obj.insert(5);
obj.insert(6);
obj.insert(7);
obj.insert(8);
obj.insert(9);
obj.insert(2);

obj.getRandom();
