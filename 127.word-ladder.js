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

};

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
ladderLength(beginWord, endWord, wordList);
// @lc code=end



  // manipulate beginWord string -> change each letter to all alphabet and see if it's included in the wordList
  // If included, save them in an array.
  // Loop through the saved item array and see if they exist in wordList and so on.
  // Do this until you can find the endWord.
  // hit -> hot -> dot -> [dog, lot] -> cog
