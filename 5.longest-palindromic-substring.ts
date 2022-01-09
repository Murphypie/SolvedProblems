/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  // racecar - odd, start from the middle + 1
  // lracecar = even, start from middle

  let ll = 0, rr = 0;
  for(let i = 0; i<s.length;i++){
    for(let j of [i,i+1]){
      for(let l = i, r = j; s[l]&&s[l]===s[r]; l--,r++){
        [ll,rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
      }
    }
  }

  return s.slice(ll,rr+1);
};

longestPalindrome('cbbd')

// @lc code=end

 //  // ll: Left index of the longest palindrome.
  // // rr: Right index of the longest palindrome.
  // let ll = 0, rr = 0;

  // for(let i = 0; i<s.length; i++){
  //   // For even or odd palindrome
  //   for(let j of [i, i+1]){ 
  //     // Loop as long as left side is in bound (s[l]) and both ends are the same (s[l]===s[r])
  //     for(let l = i, r = j; s[l] && s[l]===s[r]; l--, r++){
  //       [ll, rr] = (r-l+1) > (rr-ll+1) ? [l,r] : [ll, rr];
  //     }
  //   }
  // }
  // return s.substring(ll, rr+1);