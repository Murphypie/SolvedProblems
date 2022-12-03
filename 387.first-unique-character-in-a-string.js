/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const hashTable = {};

    let left = 0;
    let right = s.length-1;
    //while(left < right){
    for(let i = 0; i<s.length; i++){
        if(!hashTable[s[i]]){
            hashTable[s[i]] = 1
        }else{
            hashTable[s[i]]++
        }
    }
    let index = 0;
    for(let i in hashTable){
        if(hashTable[i] === 1){
            index = i;
            break;
        }
    }

    return s.indexOf(index);
};

firstUniqChar("loveleetcode");
// @lc code=end

/*
 for(let i = 0; i<s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
*/
