/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */


class UnionFind{
    constructor(n){
        this.arr = [...new Array(n)].map((_,i)=>i);
        this.group = n;
    }

    find(id) {
        if(this.arr[id] === id) return id;
        this.arr[id] = this.find(this.arr[id]);
        return this.arr[id];
    }

    union(p, q){
        const rootp = this.find(p);
        const rootq = this.find(q);
        if(rootp !== rootq){
            this.arr[rootq] = rootp;
            this.group--;
        }
    }
}



 var findCircleNum = function(isConnected) {
     let unionfind = new UnionFind(isConnected.length);
     
     for(let i = 0; i<isConnected.length; i++){
        for(let j = 0; j<isConnected[0].length; j++){
            if(isConnected[i][j] === 1 && i !== j){
                unionfind.union(i, j)
            }
        }
    }
    return unionfind.group
 }

 let arr = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
findCircleNum(arr);
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


/*
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
*/

/*
 let visited = new Array(M.length).fill(false);
    let edges = [];
    for(let i = 0; i<M.length; i++){
        let tempArr = [];
        for(let j = 0; j<M[0].length; j++){
            if(M[i][j] === 1 && i !== j){
                tempArr.push(j);
            }
        }
        edges.push(tempArr);
    }

    let dfs = (edges, start) => {
        if(visited[start]) return
        visited[start] = true;

        for(let edge of edges[start]){
            dfs(edges, edge)
        }

    }

    let count = 0;
    
    for(let i = 0; i<M.length; i++){
        if(!visited[i]){
            dfs(edges, i)
            count++;
        }
    }

    return count;
*/