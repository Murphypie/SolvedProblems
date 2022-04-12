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
  let output = [];
  let sortedInt = intervals.sort((a,b)=>{
    if(b[0] - a[0] > 0){
        return -1;
    }else{
        return 1
    }
    });
    
    for(let i = 0; i<intervals.length; i++){
        if(output.length === 0 && intervals[i]){
            output.push(intervals[i])
            continue;
        };
  
        if(output[output.length-1][1] >= intervals[i][0]){
            if(output[output.length-1][1] <= intervals[i][1]){
                output[output.length-1] = [output[output.length-1][0], intervals[i][1]]
            }
            
        }else{
            output.push(intervals[i])
        }
    }
    return output;
};

merge([[1,4],[2,3]])
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