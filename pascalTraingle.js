

const pascalTriangle = (num) =>{
    if(num === 0) return [];
    if(num === 1) return [[1]];
    let output = [];
    for(let i = 1; i<=num; i++){
        let temp = [];
        for(let j = 0; j<i; j++){
            if(j===0 || j === i-1){
                temp.push(1);
            }else{
                temp.push(output[i-2][j] + output[i-2][j-1])
            }
        }
        output.push(temp);
    }
    return output;
}

pascalTriangle(3);

/*
    if (num === 0) return [];
    if (num === 1) return [[1]];
    let result = [];
    for(let row = 1; row<=num; row++){
        let arr = [];
        for(let col = 0; col<row; col++){
            if(col === 0 || col === row-1){
                arr.push(1);
            }else{
                arr.push(result[row-2][col-1] + result[row-2][col])
            }
        }
        result.push(arr);
    }
    return result;
*/