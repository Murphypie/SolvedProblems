/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let output = [], index = 0;
    let hash = {};
    
    for (let char of s) hash[char] = hash[char] + 1 || 1;
    let lettersByDecCount = Object.keys(hash).sort((a,b) => hash[b] - hash[a]);
    
    hash

    for (let i = 0; i < lettersByDecCount.length; i++) {
        let LetterCount = hash[lettersByDecCount[i]];
        if (LetterCount > parseInt((s.length + 1) / 2)) return "";
        for (let j = 0; j < LetterCount; j++) {
            if (index >= s.length) index = 1;
            output[index] = lettersByDecCount[i];
            index += 2;
        }
    } 
    return output.join('');
};

let s = "vvvlo";
//"vvvlo"
reorganizeString(s);
// @lc code=end
