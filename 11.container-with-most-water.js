/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height){
   let area = 0;
    for(let i = 0, j = height.length-1; i<j;){
        area = Math.max(area, (j-i)*Math.min(height[i], height[j]));
        height[j] < height[i] ? j-- : i++;
   }
   return area;
};
// @lc code=end
