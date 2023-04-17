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


 var findCircleNum = function(isConnected) {
    const M = isConnected;

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

 }
 let arr =  [[1,1,0],[1,1,0],[0,0,1]]//[[1,1,0,0],[1,1,1,0],[0,1,1,0], [0,0,0,1]]
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

class UnionFind{
    constructor(n){
        this.storage = new Array(n).fill(1).map((_,i)=>i)
        this.size = n;
    }

    find(value){
        if(this.storage[value] === value) return value;
        else return this.find(this.storage[value])
    }

    union(x,y){
        let findX = this.find(x);
        let findY = this.find(y);
        if(findX !== findY){
            this.storage[findY] = findX;
            this.size--;
        }
    }

}


 var findCircleNum = function(isConnected) {
    let unionFind = new UnionFind(isConnected.length);
    
    for(let i = 0; i<isConnected.length; i++){
        for(let j = 0; j<isConnected[i].length; j++){
            if(j !== i && isConnected[i][j] === 1){
                unionFind.union(i, j)
            }
        }
    }

    return unionFind.size
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


/*
var findCircleNum = function(isConnected) {
    let edges = new Array(isConnected.length).fill(0).map(x=>[])
    let visited = new Array(isConnected.length).fill(false);

    for(let i = 0; i<isConnected.length; i++){
        for(let j = 0; j<isConnected[0].length; j++){
            if(i !== j && isConnected[i][j] !== 0){
                edges[i].push(j)
            }
            
        }
    }
    
    let count = 0;
    for(let i = 0; i<isConnected.length; i++){
        if(!visited[i]){
            dfs(edges, i)
            count++
        }
    }

    function dfs(edges, start){
        if(visited[start]) return;
        visited[start]= true;

        for(let edge of edges[start]){
            dfs(edges, edge)
        }
    }

 
    
    return count;
}
*/
