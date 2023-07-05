/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let queue = [];
    let count = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 2){
                queue.push([i,j])
            }
            if(grid[i][j] === 1){
                count++;
            }
        }
    }

    let output = 0;
    while(queue.length){
        let size = queue.length;
        for(let i = 0; i<size; i++){
            let currOrg = queue.shift();
            let possibleDir = directions(currOrg[0], currOrg[1]);
            for(let [x,y] of possibleDir){
                if(validAndFresh(grid, [x,y])){
                    grid[x][y] = 2;
                    queue.push([x,y])
                    count--;
                }
            }
        }
        if(queue.length !== 0) output++;
        
   }
   
   return count === 0 ? output : -1;
};

function directions(i,j){
    return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]
}

function validAndFresh(grid, arr){
    let x = arr[0]
    let y = arr[1]
    if(x < 0 || x>grid.length-1 || y < 0 || y>grid[0].length-1) return false;
    
    if(grid[x][y] === 1){
        return true;
    }else{
        return false
    }
}


orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);

// @lc code=end




















/*
 let queue = []
    let min = 0;
    let fresh = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === 2) queue.push([i,j]);
            if(grid[i][j] === 1) fresh++;
        }
    }
    while(queue.length){
        const size = queue.length;
        for(let i = 0; i<size; i++){
            const [x,y] = queue.shift();
            if(x+1<grid.length && grid[x+1][y] === 1){
                grid[x+1][y] = 2
                queue.push([x+1, y])
                fresh--;
            }
            if(x-1>=0 && grid[x-1][y] === 1){
                grid[x-1][y] = 2
                queue.push([x-1, y])
                fresh--;
            }
            if(y<grid[0].length && grid[x][y+1] === 1){
                grid[x][y+1] = 2
                queue.push([x, y+1])
                fresh--;
            }
            if(y-1>=0 && grid[x][y-1] === 1){
                grid[x][y-1] = 2
                queue.push([x, y-1])
                fresh--;
            }
        }
        if(queue.length>0) min++;
    }
    return fresh === 0 ? min : -1;
*/
