/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start


var lengthOfLongestSubstring = function(s) {
    let str = '';
    let max = 0;
    for(let i = 0; i<s.length; i++){
        if(str.indexOf(s[i]) !== -1){
            str = str.slice(str.indexOf(s[i])+1);
        }
        str += s[i];
        max = Math.max(max, str.length);
    }
    return max
};






let s = 'pwwkew';
lengthOfLongestSubstring(s);

// @lc code=end


   // let longest = '';
    // let current = '';
    // for(let i = 0; i<s.length; i++){
    //     if(!current.includes(s[i])){
    //         current += s[i];
    //     }else{
    //         let dupIndex = current.indexOf(s[i])+1;
    //         current = current.slice(dupIndex) + s[i]
    //     }
    //     if(longest.length < current.length){
    //         longest = current;
    //     }
    // }
    // return longest.length;