/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
   let maxArea = 0;
   grid;
   let area = 0;
   for(let i = 0; i<grid.length; i++){
       for(let j = 0; j<grid[0].length; j++){
           if(grid[i][j] === 1){
               area = dfs(grid, i, j)
           }
           maxArea = Math.max(area, maxArea)
       }
   }
   return maxArea
};

function dfs(grid, i, j){
    if(!inBound(grid, i,j) || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    let area = 1;
    
    for(let [newI, newJ] of proximity(i,j)){
        area += dfs(grid, newI, newJ)
    }
    return area;
}

function inBound(grid, i, j){
    return i>= 0 && i<grid.length && j>=0 && j<grid[0].length;
}

function proximity(i,j){
    return [[i+1,j],[i,j+1],[i-1,j],[i,j-1]]
}


let grid =[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
maxAreaOfIsland(grid)
// @lc code=end

/*
 let count = 0;
    let maxArea = 0;
    let area = 0;
 
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                count++;
                area = 0;
                dfs(grid,i,j)
                maxArea = Math.max(maxArea, area);
            }
        }
    }


    function dfs(grid, i, j){
        if(grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === 0) return
        grid[i][j] = 0;
        area++;
        dfs(grid, i+1,j);
        dfs(grid, i,j+1);
        dfs(grid, i-1,j);
        dfs(grid, i,j-1);
    }
    return maxArea
*/