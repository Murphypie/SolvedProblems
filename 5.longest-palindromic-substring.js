/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
// racecar
// abba
function longestPalindrome(s) {
    let leftIndex = 0;
    let rightIndex = 0;    
    for(let i = 0; i<s.length; i++){
        for(let j of [i, i+1]){
            for(let l = i, r = j;s[l] && s[l]===s[r]; l--, r++){
                [leftIndex, rightIndex] = (r-l+1) > (rightIndex - leftIndex + 1) ? [l, r] : [leftIndex, rightIndex];
            }
        }
    }
    return s.slice(leftIndex, rightIndex+1);
};

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