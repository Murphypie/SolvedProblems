/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

const { versionMajorMinor } = require("typescript");

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const memo = new Map();

    function recurse(sIdx, pIdx){
        if(memo.has(`${sIdx}-${pIdx}`)) return memo.get(`${sIdx}-${pIdx}`)
        if(sIdx === s.length && pIdx === p.length) return true;
        if(sIdx > s.length) return false;

        let result = null;
        if(p[pIdx] === s[sIdx] || p[pIdx] === '.'){
            if(p[pIdx+1] === '*') result = recurse(sIdx, pIdx+2) || recurse(sIdx+1, pIdx);
            else result = recurse(sIdx+1, pIdx+1)
        }else {
            if(p[pIdx + 1] === '*') result = recurse(sIdx, pIdx+2);
            else result = false;
       }
       
       memo.set(`${sIdx}-${pIdx}`, result);
       return result;
    }

    return recurse(0,0);
};

isMatch("abcasdbsd", "abca.....*");
// @lc code=end
 
