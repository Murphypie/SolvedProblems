/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if(!matrix || !matrix.length) return false;

    const rows = matrix.length;
    const columns = matrix[0].length;

    const dfs = (startRow, endRow, startCol, endCol)=>{
        if(startRow > endRow || startCol > endCol) return false;
        const middleCol = Math.floor((startCol+endCol)/2)
        const middleRow = Math.floor((startRow+endRow)/2)

        if(matrix[middleRow][middleCol] === target) return true;

        if(matrix[middleRow][middleCol] < target){
            return dfs(middleRow+1, endRow, startCol, endCol) || dfs(startRow, endRow, middleCol+1, endCol)
        }else{
            return dfs(startRow, middleRow-1, startCol, endCol) || dfs(startRow, endRow, startCol, middleCol-1)
        }
    }

    return dfs(0, rows-1, 0, columns-1)
};

searchMatrix( [[1,1]], 2)
// @lc code=end








































/*
      if(!matrix || !matrix.length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const hasTarget = (startRow, endRow, startCol, endCol) =>{
        if(startRow > endRow || startCol > endCol) return false;
        const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
        const middleCol = Math.floor((endCol - startCol) / 2) + startCol;

        if(matrix[middleRow][middleCol] === target) return true;

        if(matrix[middleRow][middleCol] < target){
            return hasTarget(middleRow+1, endRow, startCol, endCol) || hasTarget(startRow, middleRow, middleCol +1, endCol);
        }else{
            return hasTarget(startRow, endRow, startCol, middleCol - 1) || hasTarget(startRow, middleRow - 1, middleCol, endCol);
        }
    }
    return hasTarget(0, rows-1, 0, cols-1);
*/
