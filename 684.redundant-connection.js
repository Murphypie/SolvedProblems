/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */




var findRedundantConnection = function(edges) {
   //again 
   

};


let edges = [[1,2],[1,3],[2,3]]// [[1,2],[2,3],[3,4],[1,4],[1,5]] 
//[[2,7],[7,8],[3,6],[2,5],[6,8],[4,8],[2,8],[1,8],[7,10],[3,9]] // [2,8]
findRedundantConnection(edges);
// @lc code=end























/*
    //DFS
    // For each edge (u, v), traverse the graph with a depth-first search to see if we can connect 
    // u to v as we build the connection. If we can, then it must be the duplicate edge.

    let output;
    let map = {};

    const dfs = (u, v, visited) =>{
        visited[u] = true;

        if(u in map){
            if(map[u].has(v)) return true;
            for(let w of map[u]){
                if(!visited.has(w)){
                    visited.add(w);
                    if(dfs(w,v,visited)) return true;
                }
            }
        }
    }

    for(let [u,v] of edges){
        if(dfs(u,v, new Set())) output = [u,v]

        if(!map[u]) map[u] = new Set();
        if(!map[v]) map[v] = new Set();
        map[u].add(v)
        map[v].add(u)
        
    }
    return output

*/



/*
class UnionFind{
    constructor(n){
        this.id = new Array(n+1).fill().map((_,i)=>i);
        this.redundant = null;
    }

    find(i){
        if(this.id[i] === i) return i;
        this.id[i] = this.find(this.id[i])
        return this.id[i]
    }

    union(p,q){
        let i = this.find(p)
        let j = this.find(q)
        if(i !== j) this.id[j] = i; 
        else this.redundant = [p,q]
    }
}
var findRedundantConnection = function(edges) {
    // Union Find
    let unionfind = new UnionFind(edges.length)
    for(let [u,v] of edges){
        unionfind.union(u,v);
    }
    unionfind
};
*/



/*


 class UnionFind{
    constructor(n){
        this.parent = [...Array(n)].map((_, i) => i);
        this.rank = new Array(n).fill(1)
    }
    find(i){
       if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
       return this.parent[i]
    }
    union(p, q){
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if(rootP === rootQ){
            return false
        }else if(this.rank[rootP] < this.rank[rootQ]){
            this.parent[rootP] = rootQ;
            this.rank[rootQ] += this.rank[rootP]
        }else{
            this.parent[rootQ] = rootP;
            this.rank[rootP] += this.rank[rootQ]
        }
        return true;
    }
}


var findRedundantConnection = function(edges) {
    let maxEdge = 1000;
    const dsu = new UnionFind(maxEdge+1)
    for([u,v] of edges){
        dsu;
        if(!dsu.union(u, v)) return [u,v];
    }
    
};
*/