/*
 * @lc app=leetcode id=472 lang=javascript
 *
 * [472] Concatenated Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let wordSet = new Set(words);
    let output = [];

    for(let i = 0; i<words.length; i++){
        let dp = new Array(words[i].length+1).fill(0);
        dp[0] = 1;
        for(let end = 1; end<=words[i].length; end++){
            for(let start = 0; start<end; start++){
                if(dp[start] === 1){
                    let str = words[i].slice(start, end)
                    if(wordSet.has(str) && str !== words[i]){
                        dp[end] = 1;
                    }
                }
            }
        }
        if(dp[dp.length-1] === 1){
            output.push(words[i])
        }
    }

    return output;
};


let words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
findAllConcatenatedWordsInADict(words)
// @lc code=end




































/* Dynamic programming
    let wordSet = new Set(words);
    let output = [];

    for(let i = 0; i<words.length; i++){
        let dp = new Array(words[i].length+1).fill(0);
        dp[0] = 1;
        for(let end = 1; end<=words[i].length; end++){
            for(let start = 0; start<end; start++){
                if(dp[start] === 1){
                    let str = words[i].slice(start, end)
                    if(wordSet.has(str) && str !== words[i]){
                        dp[end] = 1;
                    }
                }
            }
        }
        if(dp[dp.length-1] === 1){
            output.push(words[i])
        }
    }

    return output;

*/








/*
    const dict = new Set(words);
    const isConcat = (word) => {
        if(dict.has(word)) return true;
        for(let i = 0; i < word.length; i++){
            let prefix = word.slice(0,i+1);
            if(dict.has(prefix)){
                let suffix = word.slice(i+1);
                let result = isConcat(suffix);
                if(result){
                    return true;
                }
            }
        }
        return false;
    }
    const results = [];
    for(const word of words){
        dict.delete(word);
        if(isConcat(word)) results.push(word);
        dict.add(word);
    }
    return results;
*/

/*
    const wordTable = {}
    const output = []
    for(let word of words){
        wordTable[word] = true;
    }

    for(let word of words){
        if(word === '') continue;
        let tempDP = new Array(word.length+1).fill(false);
        tempDP[0] = true;
        for(let end = 1; end<=word.length; end++){
            for(let start = 0; start<end; start++){
                let slicedWord = word.slice(start, end)
                if(tempDP[start] && wordTable[slicedWord] && slicedWord !== word){
                    tempDP[end] = true;
                }
            }
        }
        if(tempDP[tempDP.length-1]){
            output.push(word)
        }
    }
    return output;
*/