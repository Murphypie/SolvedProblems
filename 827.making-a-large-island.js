/*
 * @lc app=leetcode id=827 lang=javascript
 *
 * [827] Making A Large Island
 */


// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
1. Use DFS to visit all islands. To identify an island, mark an island with a distinct index and record it to Hash Table with the area
of the island as value; e.g., (index, area)
2. Iterate through grid again, and if 0 is encountered, check if it is possible to connect islands.
We can do it by checking four directions and using index (if found) to get the area of an island from hash table.
*/

const largestIsland = (grid) =>{
    let islandArea = new Map();
    let islandIdx = 2;
   
    let maxArea = 0;
    let area = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                area = dfs(grid, i, j, islandIdx)
                islandArea.set(islandIdx, area)
                islandIdx++;
            }
            maxArea = Math.max(maxArea, area)
        }
    }
   
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            let seen = new Set();
            if(grid[i][j] === 0){
                let area = 1
                for(let [newRow, newCol] of directions(i,j)){
                    if(validIdx(grid, newRow, newCol) 
                    && grid[newRow][newCol] !== 0
                    && !seen.has(grid[newRow][newCol])){
                        area += islandArea.get(grid[newRow][newCol]);
                        seen.add(grid[newRow][newCol])
                    }
                    maxArea = Math.max(area, maxArea);
                }
            }
        }
    }
    return maxArea
}

function validIdx(grid, row, col){
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function directions(row, col) {
    // up, right, down, left
    return [[row-1,col], [row,col+1], [row+1,col], [row,col-1]];
}


function dfs(grid, i, j, islandIdx){
    if(grid[i] === undefined || grid[i][j] === undefined || grid[i][j] !== 1) return 0;
    grid[i][j] = islandIdx;
    let area = 1;
    area += dfs(grid, i+1, j, islandIdx)+
    dfs(grid, i, j+1, islandIdx)+
    dfs(grid, i-1, j, islandIdx)+
    dfs(grid, i, j-1, islandIdx)
    return area;
}

// @lc code=end

let grid = [[1,1],[1,1]]
largestIsland(grid);


/*
var largestIsland = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let maxArea = 0, islandMap = new Map(), islandIdx = 2;
    // use dfs to visit and mark all islands
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                // get area of island
                let area = dfs(grid, row, col, islandIdx);
                // record it to Hash Table with its area
                islandMap.set(islandIdx, area);
                // increment island index
                islandIdx++;
                // keep track of max area
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    islandMap;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // check if it is possible to connect islands
            // and get the area of connected island if possible
            if (grid[row][col] === 0) {
                // area is 1 since we can turn one 0 to 1
                // we need a set so that we don't add the area of the same island more than once
                let area = 1, seen = new Set();
                for (let [newRow, newCol] of directions(row,col)) {
                    if (validIdx(grid, newRow, newCol) && 
                        grid[newRow][newCol] !== 0 &&
                        !seen.has(grid[newRow][newCol])) {
                        // add it in order to compute area of connected island
                        area += islandMap.get(grid[newRow][newCol]);
                        // add island to set because we connected this island with current entry
                        seen.add(grid[newRow][newCol]);
                    }
                }
                // keep track of max area
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
    // T.C: O(N^2)
    // S.C: O(N^2), call stack can go as deep as number of entries in grid
};

function dfs(grid, row, col, islandIdx) {
    // validate position and check if it is unvisited land
    if (!validIdx(grid, row, col) || grid[row][col] !== 1) {
        return 0;
    }
    // mark land with island index
    grid[row][col] = islandIdx;
    let area = 1;
    for (let [newRow, newCol] of directions(row,col)) {
        area += dfs(grid, newRow, newCol, islandIdx);
    }
    return area;
}

function validIdx(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function directions(row, col) {
    // up, right, down, left
    return [[row-1,col], [row,col+1], [row+1,col], [row,col-1]];
}
*/