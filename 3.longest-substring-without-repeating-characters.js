/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start


var lengthOfLongestSubstring = function(s) {
   // 1. Traverse through for loop and add each character to a temp string if it doesn't contain that char
   // 2. If temp string contains the char from for loop, cut the string where we have the same char. 
   // 3. As string gets manipulated, store the max string length.

   let temp = "";
   let output = 0;

   for(let i = 0; i<s.length; i++){
      const charLoc = temp.indexOf(s[i])
      if(charLoc !== -1){
         temp = temp.slice(charLoc+1);
      }
      temp += s[i]
      output = Math.max(output, temp.length)
   }
   
   return output;
};




let s = "pwwkew";
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