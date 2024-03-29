/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    let output = 0;
    for(let i = s.length-1; i>=0; i--){
        if(romanNum[s[i]]<romanNum[s[i+1]]){
            output -= romanNum[s[i]]
        }else{
            output += romanNum[s[i]]
        }
    }
    return output;
};

romanToInt("MCMXCIV")
// @lc code=end







































/*
 const romanNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let sum = 0;
    for(let i = 0; i<s.length; i++){
        romanNum[s[i]] < romanNum[s[i+1]] ? sum -= romanNum[s[i]] : sum += romanNum[s[i]];
    }
    return sum;
*/