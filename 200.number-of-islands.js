/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

    const depthSearch = (grid, i, j) =>{
        if(i < 0 || i === grid.length || j<0 || j === grid[i].length){
            return
        }

        if(grid[i][j] === '1'){
            grid[i][j] = '0';
        }else{
            return
        }

        depthSearch(grid, i+1, j);
        depthSearch(grid, i-1, j);
        depthSearch(grid, i, j+1);
        depthSearch(grid, i, j-1);
    }

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(grid[i][j] === '1'){
                count++;
                depthSearch(grid, i,j)
            }
        }
    }
    return count;
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
numIslands(grid);
// @lc code=end

