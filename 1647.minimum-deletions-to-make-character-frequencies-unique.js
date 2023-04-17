/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let wordHash = {};
    for(let i = 0; i<s.length; i++){
        if(!wordHash[s[i]]) wordHash[s[i]] = 0;
        wordHash[s[i]]++
    }
    
    let wordArr = Object.entries(wordHash).sort((a,b)=>{
        return b[1]-a[1]
    })

    let dupHash = {};
    let unusedArr = [];
    let max = 0;
    for(let i = 0; i<wordArr.length; i++){
        if(!dupHash[wordArr[i][1]]){
            dupHash[wordArr[i][1]] = wordArr[i][0];
            max = Math.max(max, wordArr[i][1])
        }else{
            unusedArr.push(wordArr[i])
        }
    }

    let output = 0;
    for(let i = 0; i<unusedArr.length; i++){
        let tempCount = unusedArr[i][1];
        while(dupHash[tempCount] && tempCount > 0){
            tempCount--
            output++
        }
        dupHash[tempCount] = unusedArr[i][0]
    }

    return output;
};

minDeletions("bbcebab")
// @lc code=end






































/*
 let alphabetHash ={};
    let output = 0;

    for(let i = 0; i<s.length; i++){
        if(!alphabetHash[s[i]]) alphabetHash[s[i]] = 1;
        else{
            alphabetHash[s[i]]++
        }
    }
    let dupTable = {};

    for(let dup of Object.keys(alphabetHash)){
        if(!dupTable[alphabetHash[dup]]) dupTable[alphabetHash[dup]] = alphabetHash[dup];
        else{
            while(dupTable[alphabetHash[dup]]){
                alphabetHash[dup]--
                output++
            }
            dupTable[alphabetHash[dup]] = alphabetHash[dup]
        }
    }
   
   return output
*/


/*

let charObj = {};
    let charmax = 0;
    for(let i = 0; i<s.length; i++){
        if(!charObj[s[i]]){
            charObj[s[i]] = 0;
        }
        charObj[s[i]]++
        charmax = Math.max(charmax,charObj[s[i]])
    }
    
    let dyanmicArr = new Array(charmax).fill("")
    let repeatedObj = {};

    for(let key in charObj){
        if(!dyanmicArr[charObj[key]]){
            dyanmicArr[charObj[key]] = key
        }else{
            if(!repeatedObj[charObj[key]]) repeatedObj[charObj[key]] = [];
            repeatedObj[charObj[key]].push(key)
        }
    }


    let output = 0;


    for(let key in repeatedObj){
        let valueLength = repeatedObj[key].length
        for(let i = 0; i<valueLength; i++){
            let index = parseInt(key);
            while(dyanmicArr[index] !== "" && index > 0){
                index--
                output++
            }
            index
            if(index !== -1){
                dyanmicArr[index] = repeatedObj[key].shift()
            }
        }
    }

    
   return output;
*/