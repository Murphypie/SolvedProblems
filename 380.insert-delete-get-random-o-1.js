
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
        this.set.add(val)
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val)
        return true;
    }
    return false;
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randNum = Math.floor(Math.random()*this.set.size);
    return Array.from(this.set)[randNum]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

let inputStr = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"];
let inputArr = [[], [1], [2], [2], [], [1], [2], []]
let obj;
let output = [];
for(let i = 0; i<inputStr.length; i++){
    let str = inputStr[i];
    switch(str){
        case "RandomizedSet":
            obj = new RandomizedSet();
            output.push(null)
            break;
        case "insert":
            output.push(obj.insert(inputArr[i][0]))
            break;
        case "remove":
            output.push(obj.remove(inputArr[i][0]))
            break;
        case "getRandom":
            output.push(obj.getRandom())
            break;
    }
}
output;

// var obj = new RandomizedSet()
// obj.insert(1);
// obj.remove(2);
// obj.insert(3);
// obj.insert(4);
// obj.insert(5);
// obj.insert(6);
// obj.insert(7);
// obj.insert(8);
// obj.insert(9);
// obj.insert(2);

// obj.getRandom();

















/*
RandomizedSet.prototype.insert = function(val) {
    if(!this.set.has(val)){
        this.set.add(val);
        return true
    }
    return false;
};


RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val);
        return true;
    }
    return false;
};


RandomizedSet.prototype.getRandom = function() {
    let randIndex = Math.floor(Math.random() * this.set.size);
    return Array.from(this.set)[randIndex];
};

*/