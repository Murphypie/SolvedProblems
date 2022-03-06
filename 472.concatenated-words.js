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
    const dict = new Set(words);
    const isConcat = (word) => {
        if(dict.has(word)) return true;
        for(let i = 0; i < word.length; i++){
            let prefix = word.slice(0,i+1);
            if(dict.has(prefix)){
                let suffix = word.slice(i+1);
                let result = isConcat(suffix);
                if(result){
                    dict.add(word);
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
};

findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"])
// @lc code=end

