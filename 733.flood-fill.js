/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc]
    if(image[sr][sc] === newColor) return image

    function dfs(image, sr, sc, newColor){
        if(image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] !== color) return
        if(image[sr][sc] === color) image[sr][sc] = newColor;
        dfs(image, sr+1, sc, newColor)
        dfs(image, sr, sc+1, newColor)
        dfs(image, sr-1, sc, newColor)
        dfs(image, sr, sc-1, newColor)
    }
    dfs(image, sr, sc, newColor);

    return image;
};

floodFill([[0,0,0],[0,1,1]], 1, 1, 1);

// @lc code=end

