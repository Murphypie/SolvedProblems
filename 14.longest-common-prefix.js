/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
    return strs.reduce((prev, next)=>{
        let temp = "";
        for(let i = 0; i<next.length; i++){
            if(prev[i] !== next[i]) break;
            else temp += next[i];
        }
        return temp;
    })
};

const strs =  ["flower","flow","flight"]
longestCommonPrefix(strs);
// @lc code=end





/*
  if (strs === undefined || strs.length === 0) { return ''; }
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
*/


/*
    let output = strs[0];
    for(let i = 1; i<strs.length; i++){
        let temp = ""
        for(let j = 0; j<strs[i].length; j++){
            if(output[j] !== strs[i][j]){
                break;
            }else{
                temp += strs[i][j]
            }
        }
        output = temp;
    }

    return output;
*/