/*
 * @lc app=leetcode id=828 lang=javascript
 *
 * [828] Count Unique Characters of All Substrings of a Given String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var uniqueLetterString = function (s) {

    let res = 0;
    if(s.length === 0) return res;
    let lastPosition  = new Array(26).fill(0)
    let contribution  = new Array(26).fill(0)
   
    for(let i = 0; i<s.length; i++){
        let x = s.charCodeAt(i) - 65
        let substrEnding = i+1;
        contribution[x] = substrEnding - lastPosition[x];
        let cur = 0;
        for(let j = 0; j<26; j++){
            cur += contribution[j]
        } 
        res+=cur;
        lastPosition[x] = i + 1;
    }
    return res;
   
};

uniqueLetterString("ABAB");
//For Example, "LEETCODE", we can notice that "E" present multiple times and only the substrings contains one "E" can help "E" to be counted in.
// "LE", "ET", "ETCOD" are good, but "LEE", "ETCODE" are not.

// ["L" | "1E" | "2E" | "TCOD" | "3E"]
// Take a look at "1E", it has one letter on the left side, and zero letter in the right side,
// so there are 2 different ways to contains this "E" (LE, E), which is calculated by (1+leftlength(=1))*(1+rightlength(=0)) = 2
// Take a look at "2E", it has zero letter on the left, and four on the right, (1+leftLength(=1))*(1+rightLength(=4))=5
// For T, if we fix the right part, then therer are 4 different ways of left part (Left has "", "E", "EE", "LEE")
// If we fix the left part, then we can have 5 different ways of right part ("", "C", "CO", "COD", "CODE")

// @lc code=end

/*
  let result = 0;
    const n = s.length;
    const hash = {};
    for (let i = 0; i < n; i++) { // create the hash table contains every letter's index arr.
        const letter = s[i];
        if (hash[letter] === undefined) {
            hash[letter] = [i];
        } else {
            hash[letter].push(i);
        }
    }
	
    for (let letter in hash) {  // iterate every letter
        const arr = hash[letter];  // the arr contains all indexes the letter present in the string
		let lastIdx = arr[0];
		let lastRange = arr[0] + 1;  // left part length
        for (let i = 1; i < arr.length; i++) {
            const currIdx = arr[i];
            const currRange = currIdx - lastIdx; // right part length
            result += lastRange * currRange;  // multiply both side length to get the ways of valid substrings
            lastIdx = currIdx;
            lastRange = currRange;   // set next left part to be current right part
        }
        result += lastRange * (n - lastIdx);  // don't forget the last calcution 
    }
    return result;
*/




/* fail
 // let dp = [[s[0], 1]];
    // let output = 1;
    // for (let i = 1; i < s.length; i++) {
    //     let lastDP = dp[dp.length-1]
    //     let str = lastDP[0]
    //     let uniqCount = lastDP[1] 
    //     if(!lastDP[0].includes(s[i])){
    //        uniqCount += i+1
    //     }else{ 
    //         for(let j = 0; j<str.length; j++){
    //             let sliced = str.slice(j,str.length)
    //             if(sliced.indexOf(s[i]) !== -1 &&
    //             sliced.lastIndexOf(s[i]) !== sliced.indexOf(s[i])){
    //                 uniqCount;
    //             }else if(sliced.indexOf(s[i]) !== -1){
    //                 uniqCount -= 1
    //             }else{
    //                 uniqCount += 1
    //             }
    //         }
    //         uniqCount += 1
    //     }
    //     dp.push([str+ s[i], uniqCount])
    //     output += uniqCount
    // }


    // return output;
*/