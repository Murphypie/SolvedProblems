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
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
    const dp = Array(s.length+1).fill(false);
    
    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
          const w = s.slice(start, end);
          if (dp[start] === true && set.has(w)) {
            dp[end] = true;
            break;
          }
        }
      }
      return dp[s.length];
};

const s = "leetcode"
const wordDict = ["leet","code"]
wordBreak(s, wordDict);
// @lc code=end
