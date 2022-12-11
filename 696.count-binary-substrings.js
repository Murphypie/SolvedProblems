/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  
};


countBinarySubstrings("00110011")
// @lc code=end















/*
    // Since there are only 2 groups, we only need to be concerned with the most recent two groups (curr, prev)
    // curr = current count of the same string, prev = previous count of the same string
    // If s[i] === s[i-1], increase curr+
    // If s[i] !== s[i-1] that means we need to add lesser between prev, curr (like 00011, prev = 3, curr = 2)  to ans 
    // and set prev = curr to store previous count, and reset curr to 1

    let curr = 1, prev = 0, ans = 0;
    for(let i = 1; i<s.length; i++){
        if(s[i] === s[i-1]) curr++;
        else{
            ans += Math.min(prev,curr);
            prev = curr;
            curr = 1;
        }
    }
    return ans + Math.min(prev, curr);
*/