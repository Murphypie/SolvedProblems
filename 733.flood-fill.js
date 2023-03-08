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
    let dfs = (sr, sc, originalColor, newColor) =>{
        if(image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] !== originalColor) return
        image[sr][sc] = newColor;
        dfs(sr+1, sc, originalColor, newColor)
        dfs(sr, sc+1, originalColor, newColor)
        dfs(sr-1, sc, originalColor, newColor)
        dfs(sr, sc-1, originalColor, newColor)
    }
    
    let originalColor = image[sr][sc]
    if(originalColor !== newColor){
        dfs(sr, sc, originalColor, newColor)
    };

    
   
    
   

   return image;

};
let image = [[0,0,0],[0,1,1]], sr = 1, sc = 1, newColor = 1
floodFill(image, sr, sc, newColor)

// @lc code=end




















/*
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
*/