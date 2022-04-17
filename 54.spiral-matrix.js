/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    if(matrix[0].length === 0) return [];
    let output = [];

    // Adding first row
    output = output.concat(matrix.shift())
    
    // Adding last column
    for(let i = 0; i<matrix.length-1; i++){
        output.push(matrix[i].pop())
    }
    
    // Adding last row
    const lastRow = matrix.pop();
    if(lastRow) output = output.concat(lastRow.reverse())

    // Adding first column
    for(let i = matrix.length - 1; i>=0; i--){
        if(matrix[i].length) output.push(matrix[i].shift())
    }
    
    return output.concat(spiralOrder(matrix))
};
let matrix = [[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]];
spiralOrder(matrix)
// @lc code=end

/*
    if (matrix.length === 0) return [];
    if (matrix[0].length === 0) return [];

    let output = [];

    // Adding first row
    output = output.concat(matrix.shift());

    // Adding last col
    for(let i = 0; i<matrix.length-1; i++){
        output.push(matrix[i].pop())
    }

    // Adding last row
    const lastRow = matrix.pop();
    if(lastRow) output = output.concat(lastRow.reverse());

    // Adding first col
    for (let i=matrix.length-1; i>=0; i--){
        if(matrix[i].length) output.push(matrix[i].shift());
    }
    
    return output.concat(spiralOrder(matrix));
*/