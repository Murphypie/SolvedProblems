/*
 * @lc app=leetcode id=678 lang=javascript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    for(let c of s){
        if(c==="("){
            leftMin +=1
            leftMax +=1;
        }else if(c===")"){
            leftMin -=1
            leftMax -=1;
        }else{
            leftMin -=1
            leftMax +=1;
        }
        if(leftMax<0){
            return false;
        }
        if(leftMin<0){
            leftMin = 0;
        }
    }
    return leftMin === 0;
};
// @lc code=end

let str = "(*))" // "**(()" // "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
checkValidString(str)




/* greedy
   let leftMin = 0;
    let leftMax = 0;
    for(let c of s){
        if(c==="("){
            leftMin +=1
            leftMax +=1;
        }else if(c===")"){
            leftMin -=1
            leftMax -=1;
        }else{
            leftMin -=1
            leftMax +=1;
        }
        if(leftMax<0){
            return false;
        }
        if(leftMin<0){
            leftMin = 0;
        }
    }
    return leftMin === 0;

 */