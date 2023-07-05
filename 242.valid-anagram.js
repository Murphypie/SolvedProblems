/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sObj = {};
    let tObj = {};
    for(let i = 0; i<s.length; i++){
        if(!sObj[s[i]]){
            sObj[s[i]] = 0;
        }
        if(!tObj[t[i]]){
            tObj[t[i]] = 0;
        }
        sObj[s[i]]++
        tObj[t[i]]++ 
    }
    for(let s in sObj){
        if(sObj[s] !== tObj[s]) return false;
    }
    return true;
};

isAnagram("anagram","nagaram" )
// @lc code=end

