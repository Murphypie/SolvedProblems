/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;
    
    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;   
};

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log"]

ladderLength(beginWord, endWord, wordList);
// @lc code=end

// manipulate beginWord string -> change each letter to all alphabet and see if it's included in the wordList
// If included, save them in an array.
// Loop through the saved item array and see if they exist in wordList and so on.
// Do this until you can find the endWord.
// hit -> hot -> dot -> [dog, lot] -> cog

/*
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;
    
    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;   
  */



    /* What I solved without looking up
    
       let wordSet = new Set(wordList);
    let wordArr = [[beginWord]];
    let visited = [beginWord];
    let loopbool = true;

    while(loopbool){
        let tempArr = [];
        for (word of wordArr[wordArr.length - 1]) {
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 27; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
                    if (wordSet.has(newWord) && !visited.includes(newWord)) {
                        visited.push(newWord)
                        tempArr.push(newWord);
                        if (newWord === endWord) {
                            loopbool = false;
                        }
                    }
                }
            }
            
        }
     
        if(tempArr.length === 0){
            loopbool = false;
        }
        wordArr.push(tempArr);
    }
    return wordArr[wordArr.length-1].includes(endWord) ? wordArr.length : 0
    */