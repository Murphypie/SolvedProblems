/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let char = "";
    let charCount = {};
    let maxF = 0;
    for(let i = 0; i<s.length; i++){
        if(!charCount[s[i]]) charCount[s[i]] = 0;
        charCount[s[i]] += 1;
        char += s[i];
        maxF = Math.max(maxF, charCount[s[i]]);
        if(char.length - maxF > k){
            charCount[char[0]]--;
            char = char.slice(1);
        }
    }
    return char.length;
};
let s = "AABABBA", k = 1
characterReplacement(s,k)
// @lc code=end

