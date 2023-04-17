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
    
    intervals = intervals.sort((a,b)=>{
        if(a[0]>b[0]) return 1
        else return -1
    })

    for(let i = 0; i<intervals.length; i++){
        if(output.length === 0) output.push(intervals[i]);
        let lastEl = output[output.length-1];
        let curr = intervals[i];
        
        if(lastEl[1] >= curr[0] && lastEl[1] <= curr[1]){
            output[output.length-1] = [lastEl[0], curr[1]]
        }

        if(lastEl[1] < curr[0]){
            output.push(curr)
        }
     
    }

    return output;
};

let intervals =  [[1,3],[0,6]]
merge(intervals)
// @lc code=end

































/*
  intervals = intervals.sort((a,b)=>{
        if(a[0]>b[0]) return 1
        else return -1
    })

    let output = [];
    for(let i = 0; i<intervals.length; i++){
        if(output.length === 0){
            output.push(intervals[i])
            continue;
        };
        if(output[output.length-1][1]>=intervals[i][0]){
            if(output[output.length-1][1] < intervals[i][1]){
                output[output.length-1][1] = intervals[i][1]
            }
        }else{
            output.push(intervals[i]);
        }


    }

    return output;
*/


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


/*
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
*/