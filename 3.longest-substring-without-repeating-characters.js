/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start


var lengthOfLongestSubstring = function(s) {
    // Sliding
    let set = new Set();
    let l = 0;
    let output = 0;
    for(r = 0; r<s.length; r++){
        while(set.has(s[r])){
            set.delete(s[l]);
            l+=1;
        }
        set.add(s[r]);
        output = Math.max(output, r-l+1)
    }
    return output
};




let s = "abcabcbb";
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