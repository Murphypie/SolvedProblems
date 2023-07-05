/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return ""
    let tObj = {};
    let sObj = {};
    let tObjLen = 0;
    for(let i = 0; i<t.length; i++){
        if(!tObj[t[i]]){
            tObjLen++;
            tObj[t[i]] = 0;
        }
        tObj[t[i]]++
    }

   
    

    
};
let s = "ADOBECODEBANC", t = "ABC"
minWindow(s,t)
// @lc code=end

