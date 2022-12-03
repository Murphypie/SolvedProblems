/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start

var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.arr.length === 0){
       this.arr.push(num)
    }else if(this.arr.length === 1){
        if(num > this.arr[0]){
            this.arr.push(num)
        }else{
            this.arr.unshift(num);
        }
    }else{
        let left = 0;
        let right = this.arr.length - 1
        let mid
        while(left <= right){
            mid = Math.floor((left+right)/2);
            if(this.arr[mid] < num){
                left = mid + 1;
            }else{
                right = mid - 1
            }
        }

        if(left === 0){
            this.arr.unshift(num)
        }else if(left === this.arr.length-1 && this.arr[left] > this.arr[this.arr.length-1]) {
            this.arr.push(num);
        }else{
            this.arr.splice(left,0,num)
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let arrSize = this.arr.length;
    if(arrSize%2 === 0){
        return (this.arr[arrSize/2] + this.arr[arrSize/2-1])/2 
    }else{
        return this.arr[Math.floor(arrSize/2)]
    }
};

const mf = new MedianFinder();
mf.addNum(10);
mf.addNum(3);
mf.addNum(2);
mf.addNum(6);
mf.findMedian();


/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end





/*
MedianFinder.prototype.addNum = function(num) {
    if(this.arr.length === 0){
        this.arr.push(num);
    }else if(this.arr.length === 1){
        if(num > this.arr[0]){
            this.arr.push(num)
        }else{
            this.arr.unshift(num);
        }
    }else{
        for(let i = 0; i<this.arr.length; i++){
            if(i === 0 && num <= this.arr[i]){
                this.arr.unshift(num);
                break;
            }
            if(i>0 && this.arr[i] >= num && this.arr[i-1] < num){
                this.arr.splice(i,0,num);
                break;
            }
            if(i === this.arr.length-1 && this.arr[i] < num){
                this.arr.push(num);
                break;
            }
        }
    }
};

 MedianFinder.prototype.findMedian = function() {
    let mid = Math.floor((0 + this.arr.length)/2)
    if(this.arr.length % 2 === 0){
        return (this.arr[mid-1]+this.arr[mid])/2
    }else{
        return this.arr[mid]
    }
};
*/

/**
 * @return {number}
 */
