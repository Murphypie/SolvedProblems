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
    let charObj = {};
    let output = 0;

    for(let i = 0; i<s.length; i++){
        if(!charObj[s[i]]){
            charObj[s[i]] = 0;
        }
        charObj[s[i]]++
    }
    charObj

    let dupTable = {};

    for(let key in charObj){
        if(!dupTable[charObj[key]]) dupTable[charObj[key]] = key
        else{
            while(dupTable[charObj[key]]){
                charObj[key]--
                output++
            }
            dupTable[charObj[key]] = key
        }
    }

    dupTable

    
    
   return output;

};

minDeletions("abcabc")
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