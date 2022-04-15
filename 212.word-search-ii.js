/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */


// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

 var findWords = function(board, words) {
    let output = [];
    let trie = buildTrie(words)
    let pointer = trie;

    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
                matchWords(i,j, board, pointer)
        }
    }

    function matchWords(i,j, board, pointer){
        if(pointer.end){
            output.push(pointer.end)
            pointer.end = null;
        };
    
        if(board[i] === undefined || board[i][j] === undefined) return;
        let curr = board[i][j]
        if(!pointer[curr]) return;
         board[i][j] = 0;
         matchWords(i+1, j, board, pointer[curr]) 
         matchWords(i, j+1, board, pointer[curr]) 
         matchWords(i-1, j, board, pointer[curr]) 
         matchWords(i, j-1, board, pointer[curr])
         board[i][j] = curr;
    
    }
    return output;
};




function buildTrie(words){
    let obj = {};
    for(let w of words){
        let pointer = obj;
        for(let c of w){
            if(!pointer[c]) pointer[c] = {};
            pointer = pointer[c]
        }
        pointer.end = w;
    }
    return obj;;
}


const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","over","pea","eat","rain"]
findWords(board, words)
// @lc code=end

/*
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

*/


/*
var findWords = function(board, words) {
    let output = [];
    let trie = buildTrie(words)
    let pointer = trie;

    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
                matchWords(i,j, board, pointer, [])
        }
    }

};

function matchWords(i,j, board, pointer, arr){
    if(pointer.end){
        arr.push(pointer.end)
        pointer.end = null;
    };

    if(board[i] === undefined || board[i][j] === undefined) return;
    let curr = board[i][j]
    if(!pointer[curr]) return;
     board[i][j] = 0;
     matchWords(i+1, j, board, pointer[curr], arr) 
     matchWords(i, j+1, board, pointer[curr], arr) 
     matchWords(i-1, j, board, pointer[curr], arr) 
     matchWords(i, j-1, board, pointer[curr], arr)
     board[i][j] = curr;

    return arr;
}


function buildTrie(words){
    let obj = {};
    for(let w of words){
        let pointer = obj;
        for(let c of w){
            if(!pointer[c]) pointer[c] = {};
            pointer = pointer[c]
        }
        pointer.end = w;
    }
    return obj;;
}


*/