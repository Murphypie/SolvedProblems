/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketObj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }


    let queue = [];

    for(let i = 0; i<s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            queue.push(s[i]);
        }else if(bracketObj[queue[queue.length-1]] === s[i]){
            queue.pop();
        }else{
            queue.push(s[i])
        }
    }

    return queue.length === 0 ? true : false;
};

isValid("]")
// @lc code=end































/*
let bracketObj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
   
    let stack = [];
    for(let i = 0; i<s.length; i++){
        if(Object.keys(bracketObj).includes(s[i])){
            stack.push(s[i])
        }
        if(Object.values(bracketObj).includes(s[i])){
            if(bracketObj[stack.pop()] !== s[i]){
                return false
            }
        }
    }
    return stack.length === 0 ? true : false;
*/