/*
 * @lc app=leetcode id=1691 lang=javascript
 *
 * [1691] Maximum Height by Stacking Cuboids 
 */

// @lc code=start
/**
 * @param {number[][]} cuboids
 * @return {number}
 */

// box(L,W,H) can be on top of box if Li < Lj, Wi<Wj
var maxHeight = function(cuboids) {
    // Box order is given in random order. But we know that stacking is dependent on Length and Width.
    // Sort boxes by either length or width
    
    cuboids.forEach(x=>x.sort((a,b)=>{
        return a>b ? 1 : -1
    }))
    
    cuboids.sort((a,b)=>{
        if(a[2]>b[2]) return 1;
        else if(a[2]===b[2]){
            if(a[1]>b[1]) return 1
            else return -1
        }
        else return -1
    })
    cuboids
    let heights = cuboids.map(x=>x[2]);
 
    let tallest = heights[heights.length-1];

    for(let i = 1; i<cuboids.length; i++){
        let box = cuboids[i];
        tallest = heights[i]
        for(let j = 0; j<i; j++){
            if(canBeStacked(cuboids[j], box)){
                heights[i] = Math.max(heights[i], heights[j]+box[2]);
                tallest = Math.max(tallest, heights[i])
            }
        }
    }
    

    function canBeStacked(top, bottom){
        return top[0] <= bottom[0] && top[1] <= bottom[1]
    }
    return tallest;

};

const cuboids =  [[50,26,84],[2,55,62],[64,63,72]]// [[50,45,20],[95,37,53],[45,23,12]]
maxHeight(cuboids);
// @lc code=end

/*
  cuboids.sort((a,b)=>{
        if(a[0]>b[0]) return 1;
        else if(a[0]===b[0]){
            if(a[1] > b[1]) return 1
            else return -1
        }else return -1;
    })
    cuboids
    let heights = cuboids.map(x=>x[2]);
    let tallest = 1;

    for(let i = 1; i<cuboids.length; i++){
        let box = cuboids[i];
        for(let j = 0; j<i; j++){
            if(canBeStacked(cuboids[j], box)){
                heights[i] = Math.max(heights[i], heights[j]+box[2]);
                tallest = Math.max(tallest, heights[i])
            }
        }
    }
    

    function canBeStacked(top, bottom){
        return top[0] < bottom[0] && top[1] < bottom[1]
    }
    return tallest;

*/