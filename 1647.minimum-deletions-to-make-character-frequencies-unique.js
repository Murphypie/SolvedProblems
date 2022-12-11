/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let alphabetHash ={};
    let output = 0;

    for(let i = 0; i<s.length; i++){
        if(!alphabetHash[s[i]]) alphabetHash[s[i]] = 1;
        else{
            alphabetHash[s[i]]++
        }
    }
    let dupTable = {};

    for(let dup of Object.keys(alphabetHash)){
        if(!dupTable[alphabetHash[dup]]) dupTable[alphabetHash[dup]] = alphabetHash[dup];
        else{
            while(dupTable[alphabetHash[dup]]){
                alphabetHash[dup]--
                output++
            }
            dupTable[alphabetHash[dup]] = alphabetHash[dup]
        }
    }
   
   return output
};

minDeletions("aaabbbcc")
// @lc code=end

