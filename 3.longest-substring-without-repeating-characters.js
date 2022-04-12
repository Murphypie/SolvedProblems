/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start


var lengthOfLongestSubstring = function(s) {
    let longest = ''
    let current = '';
 
};

let s = 'aab';
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