/*
https://leetcode.com/discuss/interview-question/1812472/Mario-needs-to-Rescue-Peach-inside-a-castle-of-Lava
Goal : Mario needs to Rescue Peach inside a castle of Lava.
Facts :

The castle is filled with lava. There are some landing spots that are safe.
Each landing spot is defined by an x-index and a y-index in a grid.
Mario always start at landing spot (0,0) at the entrance to the lava castle.
The distance between landing spots are defined as the square root of the sum of
the squares of x-index and y-index difference.
Mario can only safely jump a distance of 5 units.
Calculate the minimum number of jumps Mario needs to reach Peach and rescue her.
Examples :
Peach at (3,3) , safe spots (1,1), (2,2) → 1 jump (0,0) - (3,3)
Peach at (5,5), safe spots (1,1), (2,2), (3,3), (4,4) → 2 jumps (0,0) - (3,3) - (5,5)
Peach at (10, 0) safe spots (0,4), (0, 5), (5,5), (10,5) → 4 jumps
Peach at (5,5) safe spots (0,1), (1,0), (1,1) → -1 (cannot rescue Peach)

class Spot{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Map{
    getPeachSpot(){

    }
    getSafeSpots(){

    }
}
function calculateMinimumJumps(map){

}

*/

function calculateMinimumJumps(peach, spot){
    spot.sort((a,b)=>{
        if(a[0] > b[0]) return 1;
        else if(a[0] === b[0]){
            if(a[1] > b[1]) return 1;
            else return -1
        }else{
            return -1;
        }
    })
    let concatArr = [[0,0]].concat(spot.concat([peach]));
    let concatArrLength = concatArr.length;
    let dp = new Array(concatArrLength).fill(Infinity);
    dp[0] = 0;
    let output = 0;
    for(let i = 1; i<concatArr.length; i++){
        for(let j = 0; j<i; j++){
            if(jumpable(concatArr[j], concatArr[i])){
                dp[i] = Math.min(dp[i], dp[j]+1);
                output = Math.max(output,dp[i]);
            }
        }
    }
    function jumpable(prev, next){
        let distance = (next[0]-prev[0]) * (next[0]-prev[0]) + (next[1]-prev[1])*(next[1]-prev[1])
        return distance <= 25 ? true : false
    }
    return dp[dp.length-1] === Infinity ? -1 : output;
}

const peach = [10,0];
const spot = [[0,4],[0,5],[5,5],[10,5]]

calculateMinimumJumps(peach, spot)
