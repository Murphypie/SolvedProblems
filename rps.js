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
    let output = []

    const repeater = (count, tempArr) =>{
        if(count===num){
            output.push(tempArr)
            return;
        };
        for(let i = 0; i<rps.length; i++){
            repeater(count+1, tempArr.concat(rps[i]))
        }
    }

    repeater(0, [])
    return output;
}


rockPaperScissors(3);















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