/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // DP
    // 1. Create array length of s+1 and fill it with 0
    // 2. Nest Loop through s, so that we can cut strings (c, ca, cat, cats... a, at, ats ..., t,ts...)
    // 3. If the match is found and the beginning of string index in dp is 1, set the end of string index in dp to 1  
    // 4. If the end of dp array is 1, return true or false

    let wordSet = new Set(wordDict);
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1;
    for(let end = 1; end<=s.length; end++){
        for(let start = 0; start<end; start++){
            if(wordSet.has(s.slice(start, end)) && dp[start] === 1){
                dp[end] = 1;
            }
        }
    }
    return dp[dp.length-1] === 1 ? true:false;

};

const s = "applepenapple"
const wordDict = ["apple","pen"]
wordBreak(s, wordDict);
// @lc code=end



































/*
     if(wordDict === null || wordDict.length === 0) return false;
    const set = new Set(wordDict)
    const dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for(let end = 1; end<=s.length; end++){
        for(let start = 0; start<end; start++){
            let word = s.slice(start, end);
            if(dp[start]&&set.has(word)){
                dp[end] = true;
            }
        }
    }
    return dp[s.length]
*/