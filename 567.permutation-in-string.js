/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const chars = new Array(26).fill(0), a = "a".charCodeAt(0);
  
    // Create a map of s1 chars
    for (let i = 0; i < s1.length; i++) chars[s1.charCodeAt(i) - a]--;
      
    for (let i = 0; i < s2.length; i++) {
      // Increase visited char in the map
      chars[s2.charCodeAt(i) - a]++;
  
      // Continue until s1.length chars are visited
      if (i < s1.length - 1) continue;
  
      // Reset chars exiting the window in the map
      if (i > s1.length - 1) chars[s2.charCodeAt(i - s1.length) - a]--;
   
      // Check if all map chars are zero
      if (chars.every((v) => v == 0)) return true;
  
    }
  
    return false;
};

let s1 = "abcdxabcde"
let s2 = "abcdeabcdx"
checkInclusion(s1, s2);
// @lc code=end

/*
 let str = ""
    let bool = false;
    function swap(s, l, r){
        let charArr = s.split("");
        let temp = charArr[l];
        charArr[l] = charArr[r];
        charArr[r] = temp;
        return charArr.join("");
    }

    function permute(s, l, r){
        if(l === r){
           if(s2.includes(s)){
               bool = true
           } 
        }else{
            for(let i = l; i<r; i++){
                s = swap(s, l, i);
                permute(s, l+1, r);
                s = swap(s, l, i);
            }
        }

    }
    permute(s1, 0, s1.length)
    return bool;
*/


/*
  const chars = new Array(26).fill(0), a = "a".charCodeAt(0);

  // Create a map of s1 chars
  for (let i = 0; i < s1.length; i++) chars[s1.charCodeAt(i) - a]--;
    
  for (let i = 0; i < s2.length; i++) {
    // Increase visited char in the map
    chars[s2.charCodeAt(i) - a]++;

    // Continue until s1.length chars are visited
    if (i < s1.length - 1) continue;

    // Reset chars exiting the window in the map
    if (i > s1.length - 1) chars[s2.charCodeAt(i - s1.length) - a]--;
 
    // Check if all map chars are zero
    if (chars.every((v) => v == 0)) return true;

  }

  return false;

*/


/*
 if(s1.length > s2.length) return false;
    const s1map = new Array(26).fill(0)
    const s2map = new Array(26).fill(0)
    const a = "a".charCodeAt(0);

    for(let i = 0; i<s1.length; i++){
        s1map[s1.charCodeAt(i) - a]++;
        s2map[s2.charCodeAt(i) - a]++;
    }

    for(let i = 0; i<s2.length - s1.length; i++){
        if(matches(s1map, s2map)){
            return true;
        }
        s2map[s2.charCodeAt(i+s1.length)-a]++;
        s2map[s2.charCodeAt(i)-a]--;
    }
    
    function matches(s1map, s2map){
        for(let i = 0; i<26; i++){
            if(s1map[i] !== s2map[i]){
                return false;
            }
        }
        return true;
    }

    return matches(s1map, s2map)
*/