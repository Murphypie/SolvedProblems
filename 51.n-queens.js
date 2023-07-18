/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const output = [];
    function validator(arr, row, column){
        let output = true;
        if(arr.length === 0) return output;
        let origRow = row;
        let origCol = column;
        while(row>0){
            row -= 1
            if(arr[row][column] && arr[row][column] === "Q"){
                output = false;
            }
        }
        row = origRow
        column = origCol
        while(row>0 && column > 0){
            row--
            column--
            if(arr[row][column] && arr[row][column] === "Q"){
                output = false;
            }
        }
        row = origRow
        column = origCol
        while(row>0 && column <= arr[0].length){
            row--
            column++
            if(arr[row][column] && arr[row][column] === "Q"){
                output = false;
            }
        }
        return output;
    }

    const dfs = (row, arr) =>{
        if(arr.length === n){
            output.push([...arr])
            return
        }
        for(let i = 0; i<n; i++){
            let boardArr = new Array(n).fill(".")
            boardArr[i] = "Q";
            let boardStr = boardArr.join("")
            if(validator(arr, arr.length, i)){
                dfs(row+1, arr.concat([boardStr]))
            }
           
        }
    }
    dfs(0, [])
    return output;
};
// @lc code=end





solveNQueens(4)