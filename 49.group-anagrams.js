/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

const { setEmitFlags } = require("typescript");

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashTable = {};
    for(let i = 0; i<strs.length; i++){
        let sorted = strs[i].split('').sort().join();
        if(!hashTable[sorted]){
            hashTable[sorted] = [strs[i]]
        }else{
            hashTable[sorted].push(strs[i])
        }
    }
    return Object.values(hashTable)
};


groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// @lc code=end


/*
    const stringSorter = (str) =>{
        return str.replace(/[^\w]/g).toLowerCase().split('').sort().join();
    }
    
    const hashTable = {};
    for(let word of strs){
        if(!hashTable[stringSorter(word)]){
            hashTable[stringSorter(word)] = [word];
        }else{
            hashTable[stringSorter(word)].push(word);
        }
    }
    return Object.values(hashTable);

*/