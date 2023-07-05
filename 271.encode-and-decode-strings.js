/*
 * @lc app=leetcode id=271 lang=javascript
 *
 * [271] Encode and Decode Strings
 */

// @lc code=start
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let hashMap = {};
    for(let i = 0; i<strs.length; i++){
        if(!hashMap[i]) hashMap[i] = {};
        for(let j = 0; j<strs[i].length; j++){
            if(!hashMap[i][strs[i][j].charCodeAt()]){
                hashMap[i][strs[i][j].charCodeAt()] = [];
            }
            hashMap[i][strs[i][j].charCodeAt()].push(j)
        }
        hashMap[i]["length"] = [strs[i].length]
    }
    let str = "";
    for(idx in hashMap){
        str += ".%."
        let entries = Object.entries(hashMap[idx]).sort((a,b)=>{
            return a[1][0] - b[1][0]
        })
        for(let e of entries){
            str += ":" + e[0] + ";" + e[1].join(',')
        }
    }
    return str;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let output = [];
    let words = s.split(".%.");
    words.shift();
    words.forEach(x=>{
        let charArr = x.split(":").filter(x=>x)
        let length = charArr.pop().replace("length;", "")
        let wordArr = new Array(parseInt(length));
        for(let i = 0; i<charArr.length; i++){
            let splited = charArr[i].split(";")
            let char = splited[0]
            let idx = splited[1].split(",")
            for(let j = 0; j<idx.length; j++){
                wordArr[idx[j]] = String.fromCharCode(char)
            }
        }
        output.push(wordArr.join(""))
    })
    return output;
};

decode(encode( ["Hello","World"]))
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

