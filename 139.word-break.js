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
    // Do it again
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1;

    for(let end = 1; end<=s.length; end++){
        for(let start = 0; start<=end; start++){
            if(dp[start]){
                const newWord = s.slice(start, end)
                if(wordDict.includes(newWord)){
                    dp[end] = 1;
                }
            }
        }
    }
  ;
    return dp[dp.length-1] === 1 ? true: false

    
};

const s = "catsandog"
const wordDict = ["cats","dog","sand","and","cat"]
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