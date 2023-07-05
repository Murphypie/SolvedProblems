/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]){
        this.map[key] = []
    }
    this.map[key].push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map[key]) return ""
    let arr = this.map[key];
    let left = 0;
    let right = arr.length-1;
    let output =""
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid][1]<=timestamp){
            output = arr[mid][0];
            left = mid+1
        }else{
            right = mid-1;
        }
    }
    return output;
};
let timeMap = new TimeMap();
timeMap.set("love", "high", 10);
timeMap.set("love", "low", 20);
timeMap;
timeMap.get("love", 5);
timeMap.get("love", 10);
timeMap.get("love", 15);
timeMap.get("love", 20);
timeMap.get("love", 25);


/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

