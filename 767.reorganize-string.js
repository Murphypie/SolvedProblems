/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */



var reorganizeString = function (s) {
    // again

    
};

let s =  "vvvlo"

reorganizeString(s);
// @lc code=end





























/*
 let output = [], index = 0;
    let hash = {};
    
    for (let char of s) hash[char] = hash[char] + 1 || 1;
    let lettersByDecCount = Object.keys(hash).sort((a,b) => hash[b] - hash[a]);
    
    hash

    for (let i = 0; i < lettersByDecCount.length; i++) {
        let LetterCount = hash[lettersByDecCount[i]];
        if (LetterCount > parseInt((s.length + 1) / 2)) return "";
        for (let j = 0; j < LetterCount; j++) {
            if (index >= s.length) index = 1;
            output[index] = lettersByDecCount[i];
            index += 2;
        }
    } 
    return output.join('');
*/


/*
  let charMap = new Map();
    for(let i = 0; i<s.length; i++){
        if(!charMap.has(s[i])){
            charMap.set(s[i], 1)
        }else{
            let number = charMap.get(s[i]);
            charMap.set(s[i], number+1)
        }
    }
    let charMapSorted = [...charMap.entries()].sort((a,b)=>{
        return b[1] - a[1]
    })

    if(charMapSorted[0][1] > s.length - charMapSorted[0][1]+1){
        return "";
    }

    let output = new Array(s.length);
    let i = 0;
 
    while(charMapSorted.length){
        let charset = charMapSorted.shift();
        while(charset[1] !== 0){
            output[i] = charset[0];
            charset[1]--;
            i = (i+2)%s.length;
            if(i === 0) i = i+1;
        }
   }

   return output.join('')
*/