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
    const wordSet = new Set(words);
    const output = []

    function concat(word){
        if(wordSet.has(word)) return true;
        for(let i = 0; i<word.length; i++){
            let prefix = word.slice(0, i+1);
            if(wordSet.has(prefix)){
                let suffix = word.slice(i+1);
                let result = concat(suffix);
                if(result){
                    return true;
                }
            }
        }
        return false;
    }

    for(let word of words){
        wordSet.delete(word)
        if(concat(word)) output.push(word)
        wordSet.add(word)
    }
    return output;
};


let words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
findAllConcatenatedWordsInADict(words)
// @lc code=end








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