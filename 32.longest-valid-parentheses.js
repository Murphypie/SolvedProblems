/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

const { setConstantValue } = require("typescript");

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
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
};

let s = ")()"//"((())()" 
longestValidParentheses(s)
// @lc code=end

/*
  
*/