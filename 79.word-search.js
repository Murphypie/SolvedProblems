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






var exist = function(board, word) {
    
    let dfs = (i,j,board, word) =>{
        if(word.length === 0) return true
        if(board[i] === undefined || board[i][j] === undefined || board[i][j] !== word[0]) return false;
        let tempChar = board[i][j]
        board[i][j] = "0"
        let result = dfs(i+1, j, board, word.slice(1)) ||
        dfs(i-1, j, board, word.slice(1)) ||
        dfs(i, j+1, board, word.slice(1)) ||
        dfs(i, j-1, board, word.slice(1))
        board[i][j] = tempChar
        return result;
    }
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] === word[0]){
                if(dfs(i,j,board,word)) return true;
            }
        }
    }
    return false;


}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "SEE"
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

/*
function dfs(i,j,board, word){
		if(!word.length) return true;
		if(board[i] === undefined || board[i][j] === undefined || board[i][j] === 0) return false;
		if(board[i][j] !== word[0]) return false;

		const newWord = word.substr(1);
		let tempStrg = board[i][j]
		board[i][j] = 0;
		let result = 
		dfs(i+1, j, board, newWord) ||
		dfs(i, j+1, board, newWord) ||
		dfs(i-1, j, board, newWord) ||
		dfs(i, j-1, board, newWord)
		board[i][j] = tempStrg
		return result
   } 

   for(let i = 0; i<board.length; i++){
    	for(let j = 0; j<board[0].length; j++){
        	if(board[i][j] === word[0]){
            	return dfs(i,j,board, word)
        	}
    	}
   }
   return false;
*/