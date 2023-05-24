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
    let output = 0;

    const dfs = (i,j) =>{
        if(!grid[i] || !grid[i][j] || grid[i][j] === "0") return;
        grid[i][j] = "0";
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i-1,j)
        dfs(i,j-1)
    }
    
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                dfs(i,j);
                output++;
            }
        }
    }
    return output;
}


let grid =  [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
numIslands(grid);
// @lc code=end
































/*
DFS
var numIslands = function(grid) {
let count = 0;
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

    const depthSearch = (grid, i, j) =>{
    if(grid[i] === undefined || grid[i][j] === undefined ||  grid[i][j] === "0") return;
    if(grid[i][j] === "1") grid[i][j] = "0";
    depthSearch(grid, i+1, j)
    depthSearch(grid, i-1, j) 
    depthSearch(grid, i, j+1) 
    depthSearch(grid, i, j-1) 
}
*/


/*
    let count = 0;

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                dfs(i,j);
                count++;
            }
        }
    }

    function dfs(i, j){
        // if(i < 0 || j < 0 || i > grid.length-1 || j > grid[0].length-1){
        //     return;
        // }
        if(grid[i] === undefined || grid[i][j] === undefined) return;
        if(grid[i][j] === "0"){
            return;
        }else grid[i][j] = "0"
        dfs(i+1, j)
        dfs(i, j+1)
        dfs(i-1, j)
        dfs(i, j-1)
    }
    return count;
*/