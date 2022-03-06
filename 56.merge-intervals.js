/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

};

merge([[1,3],[2,6],[8,10],[15,18]])
// @lc code=end

/*
  let sortedInt = intervals.sort((a,b)=>{
        if(b[0] - a[0] > 0){
            return -1;
        }else{
            return 1
        }
    });
    let mergedInt = [sortedInt[0]]
    for(let i = 0; i<sortedInt.length; i++){
        if(sortedInt[i][0] <= mergedInt[mergedInt.length-1][1]){
            mergedInt[mergedInt.length-1] = [mergedInt[mergedInt.length-1][0], Math.max(sortedInt[i][1], mergedInt[mergedInt.length-1][1])]
        }else{
            mergedInt.push(sortedInt[i])
        }
    }
    return mergedInt;

*/