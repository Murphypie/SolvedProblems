/*
https://leetcode.com/discuss/interview-question/1863005/Wonderbiz-Tech-or-Onsite-or-Hard

Input 3
9,8,7
2,1,6
3,4,5
*/

const { OutputFileType } = require("typescript");

function spiralnxnMatrix(n){
    const output = [];
    for(let i = 0; i<n; i++){
        output.push([])
    };
    
    let counter = n*n;
    let startRow = 0;
    let endRow = n-1;
    let startColumn = 0;
    let endColumn = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
         // Top row
         for(let i = startColumn; i<=endColumn; i++){
             output[startRow][i] = counter;
             counter--
         }
         startRow++;

         // Right Column
         for(let i = startRow; i<=endRow; i++){
             output[i][endColumn] = counter;
             counter--
         }
         endColumn--;

         // Bottom Row
         for(let i = endColumn; i>=startColumn; i--){
             output[endRow][i] = counter;
             counter--
         }
         endRow--;
         
         // Left Column
         for(let i = endRow; i>=startRow; i--){
             output[i][startColumn] = counter;
             counter--
         }
         startColumn++;
    }
    return output;
}

spiralnxnMatrix(3);