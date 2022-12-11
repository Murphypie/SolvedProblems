/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function checkoutofBound(i,j, board){
    if(i < 0 || j < 0 || board.length <= i || board[0].length <= j){
        return true
    }
    return false;
}

function finder(i,j, board, word){
    if(!word.length) return true;
    if(checkoutofBound(i,j,board)) return
    let currentWord = word[0]
    if(currentWord !== board[i][j]) return;
    word = word.slice(1)
    board[i][j] = 0;
    let output = finder(i+1, j, board, word) ||
    finder(i, j+1, board, word) ||
    finder(i-1, j, board, word) ||
    finder(i, j-1, board, word)
    board[i][j] = currentWord;
    return output;
}

var exist = function(board, word) {
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            if(board[i][j] === word[0]){
                if(finder(i,j,board,word)) return true;
            }
        }
    }
    return false;
}

const board = [["a"]]
const word = "a"
exist(board, word);

// @lc code=end

//  function isOutOfBound(board, row, col){
//     return row <0 || row >= board.length || col<0 || col >= board[0].length;
//  }

//  function finder(row,col, word, board){
//     if(!word.length) return true;
//     if(isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;

//     const curChar = board[row][col];
//     const newWord = word.substr(1);
//     board[row][col] = 0; // Disable the current character
//     const results = 
//     finder(row+1, col, newWord, board) ||
//     finder(row-1, col, newWord, board) ||
//     finder(row, col+1, newWord, board) ||
//     finder(row, col-1, newWord, board);
    
//     board[row][col] = curChar;
//     return results;
// }    

// var exist = function(board, word) {
//     for(let i = 0; i<board.length; i++){
//         for(let j = 0; j<board[0].length; j++){
//             if(board[i][j] === word[0]){
//                 if(finder(i,j, word, board)) return true;
//             }
//         }
//     }
//     return false;
// };