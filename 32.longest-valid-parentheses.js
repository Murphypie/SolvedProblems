/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */


// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

};




let s = "()(())"
longestValidParentheses(s)
// @lc code=end




































/*
    let stack = [-1];
    let max = 0;

    for(let i = 0; i<s.length; i++){
        stack;
        if(s[i]==="("){
            stack.push(i)
        }else{
            stack.pop();
            if(!stack.length){
                stack.push(i)
            }else{
                max = Math.max(max, i-stack[stack.length-1])
            }
        }
    }

    return max;
*/

/*
DP
 let output = 0;
    let dp = new Array(s.length).fill(0);
    for(let i = 1; i<s.length; i++){
        if(s[i] === ")"){
            if(s[i-1] === "("){
                dp[i] = (i>2 ? dp[i-2] : 0) + 2
            }else if(i-dp[i-1] > 0 && s[i-dp[i-1]-1] == "("){
                dp[i] = dp[i-1] + ((i-dp[i-1]>2) ? dp[i-dp[i-1]-2]: 0) + 2
            }
            output = Math.max(output, dp[i])
        }
    }
    return output;

*/

/* DP -1 
    let output = 0;
    let dp = new Array(s.length).fill(0);
    for(let i = 0; i<s.length; i++){
        if(s[i] === ")" && s[i-1] === "("){
            dp[i] = 2;
        }else if(s[i] === ")" && s[i-dp[i-1]-1] === "("){
            dp[i] = dp[i-1]+2
        }
        let temp = dp[i-dp[i]] 
        if(temp)  dp[i] += temp;
        output = Math.max(output, dp[i])
    }
    return output;


*/