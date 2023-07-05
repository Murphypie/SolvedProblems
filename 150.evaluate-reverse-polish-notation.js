/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numStack = [];
    for(let i = 0; i<tokens.length; i++){
        if(Number.isInteger(parseInt(tokens[i]))){
            numStack.push(parseInt(tokens[i]))
        }else{
            let last = numStack.pop();
            if(tokens[i] === "+"){
                numStack[numStack.length-1] += last;
            }else if(tokens[i] === "-"){
                numStack[numStack.length-1] -= last;
            }else if(tokens[i] === "*"){
                numStack[numStack.length-1] *= last;
            }else if(tokens[i] === "/"){
                let divided = numStack[numStack.length-1]/last
                if(divided < 0){
                    numStack[numStack.length-1] = Math.ceil(numStack[numStack.length-1]/last);
                }else{
                    numStack[numStack.length-1] = Math.floor(numStack[numStack.length-1]/last);
                }
            }
        }
    }
    return numStack[numStack.length-1]
};
let tokens = ["0","3","/"]
evalRPN(tokens)
// @lc code=end

