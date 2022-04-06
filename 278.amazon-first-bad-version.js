/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
       let left = 1;
       let right = n;
       while(left < right){
           let mid = Math.floor((left+right)/2);
           if(isBadVersion(mid)){
               right = mid;
           }else{
               left = mid + 1;
           }
       }
       return left
    };
};

// [1,2,3,4,5], bad = 2;
// low = 1, high = 5;
// mid = 3;


// @lc code=end

