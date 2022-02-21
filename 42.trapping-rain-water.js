/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */



var trap = function(height) {
    let left = [];
    let right = [];
    let leftmax = 0;
    let rightmax = 0;
    for(let i = 0, j=height.length-1; i<height.length, j>=0; i++, j--){
        leftmax = Math.max(leftmax, height[i]);
        rightmax = Math.max(rightmax, height[j]);
        left.push(leftmax);
        right.unshift(rightmax);
    }
    let output = 0;
    for(let i = 0; i<left.length; i++){
        output += Math.min(left[i], right[i]) - height[i]
    }
    return output;
};

// 1. Brute Force (time - O(n^2), space - O(n))
// 2. Dynamic Programming (time - O(n), space - O(n))
// 3. Stack (time - O(n), space - O(n))
// 4. Two Pointers (time - O(n), space - O(1))
// https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)
trap([4,2,0,3,2,5])
// @lc code=end

