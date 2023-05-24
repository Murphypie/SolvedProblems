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
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    let output = [];
    for(let i = 0; i<intervals.length; i++){
        let lastEntry = output[output.length-1]
        if(output.length === 0 || intervals[i][0]>lastEntry[1]){
            output.push(intervals[i])
            continue;
        };
        // Curr interval in between two numbers
        if(intervals[i][0] <= lastEntry[1]){
            if(intervals[i][1] > lastEntry[1]) lastEntry[1] = intervals[i][1]
        }
        // Curr interval bigger than last Entry[1]
        if(intervals[i][0] > lastEntry[1]){
            output.push(intervals[i])
        }
        // Curr interval small than last Entry[0]
        if(intervals[i][0] < lastEntry[0]){
            if(intervals[i][1] < lastEntry[0]){
                output.push(intervals[i])
            }else if(intervals[i][1] < lastEntry[1]){
                lastEntry[0] = intervals[i][0]
            }
        }
        
    }
    return output;
};

let intervals =  [[1,4],[4,5]]
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