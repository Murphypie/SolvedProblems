/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number | void {

  let current = '', longest = '';
  s.split('').forEach(i=>{
    if(!current.includes(i)){
      current += i;
    }else{
      if(!longest || longest.length<current.length){
        longest = current
      }
      current = current.slice(current.indexOf(i)+1) + i;
    }
  })
    return Math.max(current.length, longest.length);



  // let max = 0;
  // let tempCache = '';

  // if(s.length === 0) return 0;

  // for(let i = 0; i<s.length; i++){
  //   for(let j = i; j<s.length; j++){
  //     if(!tempCache.includes(s[j])){
  //       tempCache += s[j]
  //     }else{ // Includes. So if s[i] = b and tempCache = 'acfbffe', tempCache should be updated to 'ffe'  
  //       tempCache = tempCache.slice(tempCache.indexOf(s[j])+1) 
  //       tempCache += s[j];
  //       i = j;
  //     }
  //     max = Math.max(max, tempCache.length)
  //   }
  // }

  // return max;
};

lengthOfLongestSubstring('abcabcbb');

// @lc code=end

