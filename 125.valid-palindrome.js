/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    let left = 0;
    let right = s.length-1;
    while(left<right){
        if(s[left] !== s[right]){
            return false;
        }
        left++
        right--
    }
    return true;
};
let s ="0P"
isPalindrome(s)
// @lc code=end

