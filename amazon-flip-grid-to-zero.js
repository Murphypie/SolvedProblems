/*
Suppose,
0 1 0
1 0 1
0 1 0
You are allowed to flip in order to row or column wise.
Now is it possible make all values into 0 on the grid.
Suppose if I flip 2nd column then grid is
0 0 0
1 1 1
0 0 0
then I flip 2nd row then the grid is
0 0 0
0 0 0
0 0 0
Then it is possible  to make all the values  is 0.
So answer is true.
*/

function flipGridToZero(grid){
   

}







/*
Brute force

   for(let i = 0; i<grid.length; i++){
        if(grid[i][0] === 1) rowFlip(grid, i)
    }
    for(let i = 0; i<grid[0].length; i++){
        if(grid[0][i] === 1) columnFlip(grid, i)
    }
    let output = true;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] !== 0) output = false;
        }
    }
    return output;
*/

function rowFlip(grid, i){
    for(let k = 0; k<grid[i].length; k++){
        if(grid[i][k] === 0) grid[i][k] = 1
        else grid[i][k] = 0
    }
}
function columnFlip(grid, j){
    for(let k = 0; k<grid.length; k++){
        if(grid[k][j] === 0) grid[k][j] = 1
        else grid[k][j] = 0
    }
}

let grid = [[0,1,0],[1,0,1],[0,1,0]]
flipGridToZero(grid)

/*
  
    Main idea: every row should be equal or complementary to the first row.
    If it's not, there are always will be this pesky extra values.
    1. Iterate over rows and compare each value with the first row's value
    2. If the first values are the same, all other must be the same too (rows are equal)
    3. Otherwise values must be complementary (rows are complementary)
    Time: O(m × n)
    Space: O(1)
    

    const m = grid.length;
    const n = grid[0].length;
    const firstRow = grid[0];
    
    // Start from the second row. 
    // We will compare everything with the first one.
    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            // If first element of rows are the same,
            // every other element should be the same too
            if(grid[i][0] === firstRow[0]) {
                if(grid[i][j] !== firstRow[j]) return false;
            } else {
                // Otherwise, every element should be complementary (equal to the reverted version)
                if(grid[i][j] !== (1 - firstRow[j])) return false;
            }
        }
    }
    
    
    return true;
*/