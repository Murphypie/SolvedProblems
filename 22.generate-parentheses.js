/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let left = n;
    let right = n;
    const output = [];

    const dfs = (left, right, str) => {
        if(right<left || right < 0 || left < 0) return;
        if(left === 0 && right === 0) output.push(str)
        dfs(left-1,right,str+"(")
        dfs(left,right-1,str+")")
    }
    dfs(left, right, "")
    return output;
}

let output = generateParenthesis(3);

// @lc code=end

































/*
  const output = [];
    function go(l,r,str){
        if(l>r) return; // r>l means that paren is not closed
        if(l===0 && r===0) output.push(str)
        if(l>0) go(l-1,r,str+"(");
        if(r>0) go(l,r-1,str+")");
    }
    go(n,n,"");
    return output;
*/

/*
   // recursive - take or leave method (open or close)
    let output = new Set();
    const recursive = (remaining, str, open, close) =>{
        if(remaining === 0){
            if(open === n && close === n && str[0] !== ")" && str[n*2-1] !== "(") output.add(str);;
            return;
        }
        if(open === n){
            recursive(remaining-1, str+")", open, close+1)
        }
        recursive(remaining-1, str+"(", open+1, close);
        if(open !== close) recursive(remaining-1, str+")", open, close+1);
    }

    recursive(n*2, "", 0, 0)
    return Array.from(output)
*/

/*
  let output = [];
    let left = 0;
    let right = 0;
    let recur = (left, right, n, str) =>{
        if(right>left || left > n || right > n) return;
        if(left === n && right === n) output.push(str);
        recur(left+1, right, n, str+"(")
        recur(left, right+1, n, str+")")

    }
    recur(left, right, n, "")


    return output;
*/

