/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // do stack and divide/conquer
    
 
 
};

let heights = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
//[2,1,0,3,4,2,3,4]//[2,1,2]//[2,4]
largestRectangleArea(heights)
// @lc code=end









/* Failed Divide and Conquer
   let max = 0;
    if(heights.length === 1) return heights[0]

    let findLowestHeights = (arr)=> {
        let temp = 0;
        for(let i = 0; i<arr.length; i++){
            if(i === 0){
                temp = i
            }else if(arr[temp]>arr[i]){
                temp = i
            }
        }
        return temp;
    }

    let divide = (arr) =>{
        if(arr.length === 0) return 0
        if(arr.length === 1) return arr[0]
        let localMin = findLowestHeights(arr);
        let localMinHeight = arr[localMin]
        let area = localMinHeight*arr.length
        let leftArr = arr.slice(0, localMin);
        let rightArr = arr.slice(localMin+1);
        let localmax = Math.max(area, max, divide(leftArr), divide(rightArr))
        max = Math.max(max, localmax)
        return area;
    }

    divide(heights)

    return max;
*/











/*
// 1. Calculate area - minimum values * base(length of stack)
// 2. store max value
//Brute force

   let areaArr = new Array(heights.length)
    areaArr = Array.from(areaArr, ()=>new Array(heights.length).fill(0));
    let maxArea = -Infinity;
    for(let i = 0; i<heights.length; i++){
        let localMin = Infinity;
        for(let j = i; j<heights.length; j++){
            localMin = Math.min(localMin, heights[j]);
            let area = localMin*(j-i+1)
            maxArea = Math.max(maxArea, area);
            areaArr[i][j] = area
        }
    }

    return maxArea
*/


/*
Divide and conquer
  
  This approach relies on the observation that the rectangle with maximum area will be the maximum of:

1. The widest possible rectangle with height equal to the height of the shortest bar.

2. The largest rectangle confined to the left of the shortest bar(subproblem).

3. The largest rectangle confined to the right of the shortest bar(subproblem).

Let's take an example:

[6, 4, 5, 2, 4, 3, 9]
Here, the shortest bar is of height 2. The area of the widest rectangle using this bar as height is 2x7=14. 
Now, we need to look for cases 2 and 3 mentioned above. 
Thus, we repeat the same process to the left and right of 2.
 In the left of 2, 4 is the minimum, forming an area of rectangle 4x3=12. 
 Further, rectangles of area 6x1=6 and 5x1=5 exist in its left and right respectively.
 Similarly we find an area of 3x3=9, 4x1=4 and 9x1=9 to the left of 2. 
 Thus, we get 14 as the correct maximum area.
 

 function calculateArea(heights, start, end){
    if(start>end){
        return 0;
    }
    let min_index = start;
    for(let i = start; i<=end; i++){
        if(heights[min_index] > heights[i]){
            min_index = i;
        }
    }
    
    return Math.max(heights[min_index]*(end-start+1),
        calculateArea(heights, start, min_index-1),
        calculateArea(heights, min_index+1, end)
    )
}

return calculateArea(heights, 0, heights.length-1);
*/

/*
   // Stack
    let stack = [-1];
    let maxArea = 0;
    for(let i = 0; i<heights.length; i++){
        while(heights[stack[stack.length-1]] > heights[i] && stack[stack.length-1] !== -1){
            let top = stack.length-1;
            let current_height = heights[stack.pop()];
            let current_width = i - stack[top-1] -1
            maxArea = Math.max(current_height*current_width, maxArea)
        }
       stack.push(i)
   }

   while(stack[stack.length-1] !== -1){
       let top = stack.length-1;
       let current_height = heights[stack.pop()];
       let current_width = heights.length - stack[top-1] -1;
       maxArea = Math.max(maxArea, current_height * current_width);
   }

   return maxArea
*/