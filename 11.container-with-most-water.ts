/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let max = 0;

    for(let i = 0, j = height.length-1; i<j;){
        max = Math.max(max, Math.min(height[i], height[j])*(j-i));
        height[i] < height[j] ? i++ : j--;
    }

    return max;
};
// @lc code=end

