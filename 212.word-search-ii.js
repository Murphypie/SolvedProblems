/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

const { getNameOfJSDocTypedef } = require("typescript");

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(board, words) {
    let output = [];
    const root = buildTrie(words);

    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            dfs(root, row, col, board, output)
        }
    }

    function dfs(node, row, col, board, output){
        if(node.end){
            output.push(node.end);
            node.end = null;
        }

        if(row<0 || row>=board.length || col < 0 || col >= board[0].length) return;
        const c = board[row][col];
        if(!node[c]) return; 
        board[row][col] = 0; // Marking visited
        dfs(node[c], row + 1, col, board, output); // up
        dfs(node[c], row - 1, col, board, output); // down
        dfs(node[c], row, col + 1, board, output); // right
        dfs(node[c], row, col - 1, board, output); // left
        board[row][col] = c;  // reset - back track

    }

    function buildTrie(words){
        const root = {};
        for(let w of words){
            let pointer = root; // here 'pointer' just a reference, that we use to go down from root till last child node
            // and when we reach last child node - this is the end of the word
            // and instead of setting "node.end = true", we set "node.end = word"

            for(let c of w){
                if(!pointer[c]) pointer[c] = {};
                pointer = pointer[c];
            }
            
            // Pointer should be at the end of tree since it was updated in for loop (pointer = pointer[c])
            pointer.end = w;
        }
        return root;
    }

    return output;
};

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]
findWords(board, words)
// @lc code=end

/*


*/