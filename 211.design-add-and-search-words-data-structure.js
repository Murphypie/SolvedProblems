/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let head = this.trie;
    for(let c of word){
        if(!head[c]) head[c] = {}
        head = head[c]
    }
    head['end'] = word;
    return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    // do with dfs
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

let trie = new WordDictionary();
trie.addWord("at")
trie.addWord("and")
trie.addWord("an")
trie.addWord("add")
trie.addWord("bat")
trie.search("bat")

trie;