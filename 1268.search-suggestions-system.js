/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let trie = {};
    products = products.sort();
    for (word of products) {
        let trieHead = trie;
        for (let i = 0; i < word.length; i++) {
            if (!trieHead[word[i]]) {
                trieHead[word[i]] = {'arr': [] };
            }
            if(trieHead[word[i]]['arr'].length <3) trieHead[word[i]]['arr'].push(word);
            trieHead = trieHead[word[i]];
        }
    }
    let output = [];
    let root = trie;
    for(let i = 0; i<searchWord.length; i++){
        if(root) root = root[searchWord[i]];
        output.push(!root?[]:root['arr']);
    }

    return output;
};

let products =["mobile","mouse","moneypot","monitor","mousepad"]
let searchWord = "mouse"
suggestedProducts(products, searchWord);

// @lc code=end

/*
   products.sort();
    let trie = {};
    for(let p of products){
        let root = trie;
        
        for(let c of p){
            if(!root[c]) root[c] = {'sug':[]};
            if(root[c]['sug'].length <3) root[c]['sug'].push(p);
            root = root[c]
        }
    }
    let root = trie, res = [];
    for(let i = 0; i<searchWord.length; i++){
        if(root) root = root[searchWord[i]];
        res.push(!root?[]:root['sug']);
    }

    return res
*/

/*
  products.sort((a,b)=>a.localeCompare(b));
    let trie = {};
    for(let word of products){
        let triePointer = trie;
        for(let str of word){
            if(!triePointer[str.toLowerCase()]) triePointer[str.toLowerCase()] = {"sug":[]};
            if(triePointer[str.toLowerCase()]["sug"].length < 3) triePointer[str.toLowerCase()]["sug"].push(word);
            triePointer = triePointer[str.toLowerCase()]; 
        }
    }
    let output = [];
    let pointer = trie;
    for(let i = 0; i<searchWord.length; i++){
        if(pointer) pointer = pointer[searchWord[i]]
        output.push(!pointer ? [] : pointer["sug"])
    }
    return output;
*/
