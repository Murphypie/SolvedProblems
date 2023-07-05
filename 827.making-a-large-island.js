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


var largestIsland = function(grid) {

    let islandMap = {};
    let output = 0;

    const dfs = (indx, i, j, grid, count) => {
        if(!validIdx(grid, i, j) || grid[i][j] === 0 || grid[i][j] === indx) return count
        let possibleDir = directions(i,j);
        if(grid[i][j] === 1) count += 1
        grid[i][j] = indx;
        for(let [row, col] of possibleDir){
            count = dfs(indx, row, col, grid, count)
        }
        return count;
    }

    let indx = 1;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                let size = dfs(++indx, i, j, grid, 0)
                islandMap[indx] = size;
                output = Math.max(output, size)
            }
        }
    }
    
    const adder = (i,j,visited, grid, sum) =>{
        let possibleDir = directions(i,j);
        for(let [row, col] of possibleDir){
            if(validIdx(grid, row, col)){
                if(!visited.has(grid[row][col]) && grid[row][col] !== 0){
                    islandMap[grid[row][col]]
                    sum += islandMap[grid[row][col]]
                    visited.add(grid[row][col])
                }
            }
        }
        return sum;
    }
    
    
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 0){
                output = Math.max(output, adder(i,j, new Set(), grid, 0)+1)
            }
        }
    }

    return output
};

function validIdx(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function directions(row, col) {
    // up, right, down, left
    return [[row-1,col], [row,col+1], [row+1,col], [row,col-1]];
}



let grid = [[1,1],[1,1]]//[[0,1,0,0,0], [0,0,1,0,0], [0,1,1,0,0], [0,0,0,1,1], [0,0,1,1,1]]  
//[[0,0,0,0,0,0,0],[0,1,1,1,1,0,0],[0,1,0,0,1,0,0],[1,0,1,0,1,0,0],[0,1,0,0,1,0,0],[0,1,0,0,1,0,0],[0,1,1,1,1,0,0]]
// [[0,1,0,0,0], [0,0,1,0,0], [0,1,1,0,0], [0,0,0,1,1], [0,0,1,1,1]]  
//largestIsland(grid);
largestIsland(grid);



// @lc code=end


















/*
    let localMax = 0;
    let idxToArea = new Map();
    let idx = 2;
    
    function dfs(i,j, inputArr, idx){
        if(inputArr[i] === undefined|| inputArr[i][j] === undefined|| inputArr[i][j] === 0) return;
        if(inputArr[i][j] === 1){
            localMax++;
        }
        inputArr[i][j] = 0
        dfs(i+1, j, inputArr, idx)
        dfs(i-1, j, inputArr, idx)
        dfs(i, j+1, inputArr, idx)
        dfs(i, j-1, inputArr, idx)
        inputArr[i][j] = idx
    }
    
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                localMax = 0;
                dfs(i,j,grid, idx);
                idxToArea.set(idx, localMax)
                idx++
            }
        }
    }

    
    let alteredAreaMax = localMax;
    
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 0){
                let visitedIdx = {};
                let localAlteredMax = 1;
                let possibleDir = directions(i, j)
                for(let [row, col] of possibleDir){
                    if(validIdx(grid, row, col)){
                        if(grid[row][col] !== 0 && !visitedIdx[grid[row][col]]){
                            visitedIdx[grid[row][col]] = true;
                            localAlteredMax += idxToArea.get(grid[row][col])
                        }
                    }
                    alteredAreaMax = Math.max(alteredAreaMax, localAlteredMax)
                }
            }
        }
    }
    
    return alteredAreaMax
*/











// var largestIsland = function(grid) {
//     if (grid.length === 0 || grid[0].length === 0) {
//         return 0;
//     }
//     let maxArea = 0, islandMap = new Map(), islandIdx = 2;
//     // use dfs to visit and mark all islands
//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[0].length; col++) {
//             if (grid[row][col] === 1) {
//                 // get area of island
//                 let area = dfs(grid, row, col, islandIdx);
//                 // record it to Hash Table with its area
//                 islandMap.set(islandIdx, area);
//                 // increment island index
//                 islandIdx++;
//                 // keep track of max area
//                 maxArea = Math.max(maxArea, area);
//             }
//         }
//     }
//     islandMap;
//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[0].length; col++) {
//             // check if it is possible to connect islands
//             // and get the area of connected island if possible
//             if (grid[row][col] === 0) {
//                 // area is 1 since we can turn one 0 to 1
//                 // we need a set so that we don't add the area of the same island more than once
//                 let area = 1, seen = new Set();
//                 for (let [newRow, newCol] of directions(row,col)) {
//                     if (validIdx(grid, newRow, newCol) && 
//                         grid[newRow][newCol] !== 0 &&
//                         !seen.has(grid[newRow][newCol])) {
//                         // add it in order to compute area of connected island
//                         area += islandMap.get(grid[newRow][newCol]);
//                         // add island to set because we connected this island with current entry
//                         seen.add(grid[newRow][newCol]);
//                     }
//                 }
//                 // keep track of max area
//                 maxArea = Math.max(maxArea, area);
//             }
//         }
//     }
//     return maxArea;
//     // T.C: O(N^2)
//     // S.C: O(N^2), call stack can go as deep as number of entries in grid
// };

// function dfs(grid, row, col, islandIdx) {
//     // validate position and check if it is unvisited land
//     if (!validIdx(grid, row, col) || grid[row][col] !== 1) {
//         return 0;
//     }
//     // mark land with island index
//     grid[row][col] = islandIdx;
//     let area = 1;
//     for (let [newRow, newCol] of directions(row,col)) {
//         area += dfs(grid, newRow, newCol, islandIdx);
//     }
//     return area;
// }

// function validIdx(grid, row, col) {
//     return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
// }

// function directions(row, col) {
//     // up, right, down, left
//     return [[row-1,col], [row,col+1], [row+1,col], [row,col-1]];
// }

