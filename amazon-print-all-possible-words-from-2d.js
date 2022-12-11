/*
Question: Given a 2d matrix words, print all the words which are present in an English Dictionary. 
The words in the dictionary need not be in a straight line i.e you need to consider all the 8 possible directions.
For eg.
words= [["M","Y"],["N","A"]]
Output: ["MY","MAN","AN","ANY","MANY"]
*/


function printAllPossible(words){
    // 1. Trie structure - need to contain (Start with) each element in the given array
    // 1-a. Nested For loop

    let trie = {};

    for(let i = 0; i<words.length; i++){
        for(let j = 0; j<words[0].length; j++){
            // function that will complete the trie structure for that element
            dfs(words, i, j , trie);
        }
    }

    function dfs(words, i, j, trie){
        if(words[i] === undefined || words[i][j] === undefined || words[i][j] === "0") return;
        let pointer = trie;
        if(!pointer[words[i][j]]) pointer[words[i][j]] = {};
        pointer = pointer[words[i][j]] 
        let temp = words[i][j] 
        words[i][j] = "0"
        dfs(words, i+1, j, pointer);
        dfs(words, i, j+1, pointer);
        dfs(words, i-1, j, pointer);
        dfs(words, i, j-1, pointer);
        dfs(words, i+1, j+1, pointer);
        dfs(words, i+1, j-1, pointer);
        dfs(words, i-1, j+1, pointer);
        dfs(words, i-1, j-1, pointer);
        words[i][j] = temp;
        return trie;
    }
    trie;
}

const words = [["M","Y"],["N","A"]];
printAllPossible(words)