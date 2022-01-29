/*
 * @lc app=leetcode id=1335 lang=javascript
 *
 * [1335] Minimum Difficulty of a Job Schedule
 */

// @lc code=start
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    if(d > jobDifficulty.length) return -1
  let copiedjD = jobDifficulty.slice(); // shallow copy
  if(copiedjD[0] < copiedjD[copiedjD.length-1]){
    copiedjD = copiedjD.sort((a,b)=>-b-a);
}
  let resultArr = new Array(d);
  resultArr.fill(0);
  for (let i = d - 1; i >= 0; i--) {
    if (i === 0) {
      resultArr[i] = copiedjD;
    } else {
      resultArr[i] = copiedjD.pop();
    }
  }
  var sumDiff = resultArr.reduce((a,b)=>{
      if(Array.isArray(b)){
          a += b[0]
      }else{
          a += b;
      }
      return a
  }, 0)
  return sumDiff;
};

minDifficulty([11,111,22,222,33,333,44,444], 6)
// @lc code=end
