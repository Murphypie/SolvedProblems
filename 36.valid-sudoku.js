/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowHash = {};
    let colHash = {};
    let boxHash = {};
    for(let row = 0; row<board.length; row++){
        if(!rowHash[row]){
            rowHash[row] = {};
        }
        for(let col = 0; col<board[0].length; col++){
            if(!colHash[col]){
                colHash[col]= {};
            }
            if(board[row][col] !== '.'){
                let boxNum = idx2box(row, col)
                if(!boxHash[boxNum]){
                    boxHash[boxNum] = {};
                }
                if(boxHash[boxNum][board[row][col]]){
                    return false;
                }
                if(rowHash[row][board[row][col]]){
                    return false;
                }
                if(colHash[col][board[row][col]] ){
                    return false;
                }
                rowHash[row][board[row][col]] = true;
                colHash[col][board[row][col]] = true;
                boxHash[boxNum][board[row][col]] = true;
            }

        }
    }
    function idx2box(row,col){
        return Math.floor(row/3)*3 + Math.floor(col/3)+1
    }
    return true;
};

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
isValidSudoku(board)
// @lc code=end

