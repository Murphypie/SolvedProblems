/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0;
    let high =matrix[0].length-1;
    let rowLow = 0;
    let rowHigh =  matrix.length-1;

    while(low<=high && rowLow <= rowHigh){
        let mid = Math.floor((low+high)/2);
        let rowMid = Math.floor((rowLow+rowHigh)/2);
        if(matrix[rowMid][mid] === target){
            return true;
        }
        if(matrix[rowMid][0] > target){
            rowHigh--;
            continue;
        }
        if(matrix[rowMid][matrix[0].length-1] < target){
            rowLow++;
            continue;
        }
        if(matrix[rowMid][mid] < target){
            low++
        }else{
            high--
        }
    }

    return false;
};
let matrix =[[1]], target = 1
searchMatrix(matrix, target)
// @lc code=end

