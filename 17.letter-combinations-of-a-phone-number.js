/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    let letterObj = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    };
    const length = digits.length;
    let count = 0;
    let output = [];
    const recur = (str, count) =>{
        if(count === length) output.push(str);
        else{
            for(let char of letterObj[digits[count]]){
                recur(str+char, count+1);
            }
        }
    }
    recur("",count)
    return output;
};

letterCombinations("23")
// @lc code=end



/*
    let letterObj = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    };
    if(digits.length === 0) return []
    let combArr = [];
    const recur = (str, count) =>{
        if(count === digits.length){
            combArr.push(str)
        }else{
            for(let char of letterObj[digits[count]]){
                recur(str+char, count+1)
            }
            // for(let i = 0; i<letterObj[digits[count]].length; i++){
            //     recur(str.concat(letterObj[digits[count]][i]), count+1)
            // }
        }
    }
    recur('', 0)
    return combArr;
*/