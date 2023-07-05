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
};
largestRectangleArea([2,4])
// @lc code=end

