const rockPaperScissors = (num) =>{
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
}

rockPaperScissors(2);