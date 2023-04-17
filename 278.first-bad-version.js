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
    return function(n){
        let left = 0;
        let right = n;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            let versionCheck = isBadVersion(mid);
            if(versionCheck){
                right = mid-1
            }else{
                left = mid+1
            }
        }
        return left;
    }
};
// @lc code=end





























/*
    return function(n) {
        let left = 0;
        let right = n-1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            let badBool = isBadVersion(mid);
            if(badBool){
                right = mid-1;
            }else{
                left = mid+1;
            }
        }
        return left;
    };
*/