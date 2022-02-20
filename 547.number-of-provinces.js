/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

const { updateFor, setEmitFlags } = require("typescript");

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */

class UnionFind{
    constructor(n){
        this.graph = [...Array(n)].map((_, i)=>i);
        this.groups = n;
    }         

    find(id) {
        if(this.graph[id] === id) return id;
        this.graph[id] = this.find(this.graph[id]);
        return this.graph[id];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX !== rootY) {
            this.graph[rootY] = rootX;
            this.groups--;
        }
    }
    
}

 var findCircleNum = function(M) {
    const N = M.length, unionfind = new UnionFind(N);
    for(let r = 0; r < N; r++) {
        for(let c = 0; c < N; c++) {
            if(M[r][c] && r !== c) unionfind.union(r, c);
        }
    }
    return unionfind.groups;
 }

findCircleNum([[1,1,0],[1,1,0],[0,0,1]]);
// @lc code=end

/*
    const seen = new Set();
     let count = 0;
     let stack = [];
     for(let i = 0; i<isConnected.length; i++){
         if(!seen.has(i)){
             stack.push(i);
             while(stack.length){
                 const curr = stack.pop();
                 seen.add(curr);
                 for(let j = 0; j<isConnected[0].length; j++){
                     if(isConnected[curr][j] && !seen.has(j)){
                         stack.push(j);
                     }
                 }
             }
             count++;
         }
     }
     return count;
*/