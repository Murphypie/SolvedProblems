/*
[ [ 'rock', 'rock' ],
  [ 'rock', 'paper' ],
  [ 'rock', 'scissors' ],
  [ 'paper', 'rock' ],
  [ 'paper', 'paper' ],
  [ 'paper', 'scissors' ],
  [ 'scissors', 'rock' ],
  [ 'scissors', 'paper' ],
  [ 'scissors', 'scissors' ] ]
*/


const rockPaperScissors = (num) =>{
    const rps = ['rock', 'paper', 'scissors'];
    const output = []
    const recur = (num, arr) =>{
        if(num === 0) output.push(arr);
        else{
            for(let i = 0; i<rps.length; i++){
                recur(num-1, arr.concat(rps[i]))
            }
        }
    }

    recur(num, [])
    return output;
}


rockPaperScissors(2);















/*
 const rps = ['rock', 'paper', 'scissors'];
    const result = [];

    const recur = (str, count) =>{
        if(count === num) result.push(str);
        else for(let i of rps){
            recur(str.concat(i), count+1);
        }
    }
    recur([], 0)
    return result;

*/