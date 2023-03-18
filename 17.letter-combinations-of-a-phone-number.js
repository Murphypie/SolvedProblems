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
    if(digits === "") return [];
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

    let output = [];
  
    const recur = (digits, idx, str) =>{
        if(str.length === digits.length){ //idx === digits.length){
            output.push(str)
        }
        if(idx < digits.length){
            for(let char of letterObj[digits[idx]]){
                recur(digits, idx+1, str.concat(char));
            }
        }
    }
    recur(digits, 0, "")

    return output;
};

letterCombinations("43346")
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


/*
  if(digits === "") return [];
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

    let output = [];
    let length = digits.length;

    function recur(count, strs){
        if(count === length){
            output.push(strs);
            return;
        }

        for(let char of letterObj[digits[count]]){
            recur(count+1, strs+char);
        }

    }

    recur(0, "")

    return output;

*/