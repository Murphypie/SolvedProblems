/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number | void {

  // 'abcbbcbb'
  // a -> ab -> abc -> cb
  // remove chars until b and add another char

  // 1. 2 variables: current(track non repeating character) and longest (track longest repeating chars)
  // 2. Iterate through the given string. 
  // 3. If current does not include the current char, add that char to current.
  // 4. If the current.length > longest.length, longest = current
  // 5. If current variable does include the current char, remove characters up until where that character is and add that character at the end

  let current = '', longest = '';
  s.split('').forEach(i=>{
    if(!current.includes(i)){
      current += i;
    }else{
      if(longest.length < current.length){
        longest = current;
      }
      current = current.slice(current.indexOf(i)+1)+i
    }
  })
  return Math.max(current.length, longest.length);


};

lengthOfLongestSubstring('abcabcbb');

// @lc code=end

