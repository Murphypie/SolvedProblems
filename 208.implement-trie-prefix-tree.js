/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this.trie;
    for(char of word){
        if(!root[char]){
            root[char] = {}
        }
        root = root[char]
    }
    root["end"] = word;
    return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let root = this.trie
    for(let char of word){
        if(!root[char]) return false;
        root = root[char]
    };
    if(root['end']) return true;
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this.trie
    for(let char of prefix){
        if(!root[char]) return false
        root = root[char]
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

let trie = new Trie();
trie.search("a")

trie
