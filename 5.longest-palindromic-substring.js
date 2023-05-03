/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s) {
    // For loop through stirng.
    // Case for even or odd. If even, start with two characters, if odd, one
    // For each character, go left and right and check if the chars are the same.
    // If same, add to output, If different, save the result and move on to next char.
    
    let output = ""
    for(let i = 0; i<s.length; i++){
        for(let j of [i, i+1]){
            let tempStr = "";
            for(let ll = i, rr = j; ll>0, rr<s.length; ll--, rr++){
                if(s[ll] !== s[rr]) break;
                tempStr = s.slice(ll, rr+1)
            }
            output = output.length < tempStr.length ? tempStr : output
        }
    }

    return output;
}
 
let s = "aacabdkacaa";

longestPalindrome(s);



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



  /*
      let ll = 0, rr = 0
    let maxStr = ''
    for(let i = 0; i<s.length; i++){
        let current = ''
        
        // even
        for(let l = i, r = i+1; s[l] && s[l] === s[r]; l--, r++){
            ll = l;
            rr = r;  
            current = s.slice(ll, rr+1)
            if(current.length > maxStr.length){
                maxStr = current
            }
        } 
        // odd
       for(let l = i, r = i; s[l] && s[l] === s[r]; l--, r++){
          ll = l;
          rr = r;
          current = s.slice(ll, rr+1)
          if(current.length > maxStr.length){
              maxStr = current
          }
       } 
    }
    return maxStr;
  */