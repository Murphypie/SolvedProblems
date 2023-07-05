/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const output = []

    const backtracking = (start, arr) =>{
        if(start === s.length){
            output.push([...arr])
            return
        }
        let str = ""
        for(let i = start; i<s.length; i++){
            str += s[i];
            arr.push(str)
            if(palinVali(str)) backtracking(i+1, arr)
            arr.pop()
        }
    }
    backtracking(0, [])


    function palinVali(str){
        let output = true;
        let left = 0;
        let right = str.length-1;
        while(left<right){
            if(str[left] !== str[right]) return false
            left++
            right--
        }
        return output;
    }
 
    return output;
};  
// @lc code=end

partition("abba")























/*
    const output = []

    const backtracking = (start, arr) =>{
        if(start === s.length){
            output.push([...arr])
            return
        }
        let str = ""
        for(let i = start; i<s.length; i++){
            str += s[i];
            arr.push(str)
            if(palinVali(str)) backtracking(i+1, arr)
            arr.pop()
        }
    }
    backtracking(0, [])


    function palinVali(str){
        let output = true;
        let left = 0;
        let right = str.length-1;
        while(left<right){
            if(str[left] !== str[right]) return false
            left++
            right--
        }
        return output;
    }
 
    return output;
*/