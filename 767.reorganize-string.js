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
    let map = {};
    let maxOccur = 0;
    for(let c of s){
        if(!map[c]) map[c] = 1;
        else map[c]++
        maxOccur = Math.max(maxOccur, map[c])
    }
    if(maxOccur - (s.length - maxOccur) > 1 ) return ""
    let sortedMap = Object.keys(map).sort((a,b)=>{
        return map[b]-map[a]
    })
    let output = new Array(s.length);
    let index = 0;
    for(let i = 0; i<sortedMap.length; i++){
        let LetterCount = map[sortedMap[i]];
        for (let j = 0; j < LetterCount; j++) {
            if (index >= s.length) index = 1;
            output[index] = sortedMap[i];
            index += 2;
        }
    }

    return output.join('')
};

let s = "aab";
//"vvvlo"
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