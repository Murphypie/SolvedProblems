/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // Do it again with DP
    let maxN = Math.floor(Math.sqrt(n));
    let dp = new Array(n+1).fill(0).map((_,i)=>i)

    for(let i = 2; i<=maxN; i++){
        for(let j = 0; j<dp.length; j++){
            let divi = Math.floor(j/(i*i))
            let divided = j - divi*(i*i)
            dp[j] = Math.min(dp[j], divi+dp[divided])
        }
    }
    return dp[dp.length-1]
};

numSquares(13)
// @lc code=end


































// backtracking - taking too long

/*
   let output = Infinity
    
    function backtracking(remaining, count, nextInt){
        if(remaining < 0) return;
        if(remaining === 0) output = Math.min(output, count);
        if(nextInt*nextInt > remaining) return

        let takesame = backtracking(remaining-(nextInt*nextInt), count+1, nextInt);
        //let taketonext = backtracking(remaining-((nextInt+1)*(nextInt+1)), count+1, nextInt+1);
        let leave = backtracking(remaining, count, nextInt+1)

    }

    backtracking(n, 0, 1)

    return output;

*/



/*
  if (n<=1)return n;
    
    // --- 1 2 3 4 5 6 7 8 9 10 11 12
    // 1^2 1 2 3 4 5 6 7 8 9 10 11 12 <-
    // 2^2 - - - 1 2 3 4 2 3  4  5  3 <-
    // 3^2 - - - - - - - - 1  2  3  3 <-
    
    let matrix = [0]
    
    // compare self and up, take min
    for (let i=1; i*i<=n;i++){
        for (let j=i*i; j<=n; j++){
            if (i===1){
                matrix[j]=j;
            }else{
                let up = matrix[j];
                let currSquare=i*i;
                let currSquareNumbers = Math.floor(j/currSquare);
                let residue = j%currSquare;
                let current = currSquareNumbers + matrix[residue];
                
                matrix[j]=Math.min(up,current);
                
            }
            
        }
    }
    return matrix[n];
*/