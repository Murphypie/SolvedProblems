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
    let queue = [beginWord]
    let counter = 1;
   while(queue.length){
        let word = queue.shift();
        for(let word of queue){
        if(word === endWord) return counter;
        }
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let tempword =
                    word.slice(0, i) +
                    String.fromCharCode(97 + j) +
                    word.slice(i + 1);
                    if (wordList.indexOf(tempword) !== -1) {
                        queue.push(tempword)
                        wordList[wordList.indexOf(tempword)] = 0;
                    }
            }
        }
        counter += 1;
    }
    counter;
    return 0;
};

let beginWord =  "hit";
let endWord = "cog";
let wordList =  ["hot","dot","dog","lot","log","cog"]
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
