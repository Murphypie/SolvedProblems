/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let output = [];
    let str = "";
    let startIndex = 0;
    let localMaxIndex = -Infinity;
    for(let i = 0; i<s.length; i++){
        let lastIndex = s.lastIndexOf(s[i])
        localMaxIndex = Math.max(localMaxIndex, lastIndex);
        if(i === localMaxIndex){
            output.push(localMaxIndex+1-startIndex)
            startIndex = i+1
        }
        
    }

    return output;

};
let s = "ababcbacadefegdehijhklij"
partitionLabels(s)
// @lc code=end







































/*
   // input will have a multiple partitions with a partition being similar to each other
   // 1. Go through the given string and find the last occruence of chars
   // 2. As you go through the loop, compare max value and update accordingly
   // 3. When the index and the max value (last occurence of char) are the same,
   // push the that index to result array
   // 4. For the next partition, when it finds the max value, we should subtract the value of previous max values
   
   let resultArr = [];
   let max = -9999999;
   let anchor = 0;

   for(let i = 0; i<s.length; i++){
       max = Math.max(max, s.lastIndexOf(s[i]));
       if(i === max){
           resultArr.push(i+1-anchor);
           anchor = i+1;
       }
   }
   return resultArr;
*/





/*
 let arr = [];
    let last = -1;
    let nextIn = 0;
    for(let i = 0; i<s.length;i++){
        last = Math.max(last, s.lastIndexOf(s[i]));
        if(last === i){
            arr.push(i-nextIn+1);
            nextIn = i+1;
        }
    }
    return arr;
*/

//let partition = [];
//     const last = new Array(26).fill(-1);
//     let anchor = 0;
//     let end = 0;

//     for(let i = 0; i<s.length;i++){
//         last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
//     }
//    last;
//     for(let i = 0; i<s.length; i++){
//         end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)])
//         if(i===end){
//             partition.push(i-anchor+1);
//             anchor = i+1;
//         }
//     }
//     return partition;


