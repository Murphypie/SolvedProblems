/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

const { updateFor } = require("typescript");

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */

class QuickUnion {
    constructor(N) {
      this.id = [];
      this.sz = [];
      for (let i = 0; i < N; i++) {
          this.id[i] = i;
          this.sz[i] = 1;
      }
    }
    root(i){ 
      while(this.id[i] !== i){
          this.id[i] = this.id[this.id[i]] // make every other node in path point to its grandparent
          i = this.id[i]
      };
      return i;
    };
    find(p,q){ 
        return this.root[p] === this.root[q]
    }
    unite(p,q){ 
        let i = this.root(p);
        let j = this.root(q);
        if(this.sz[i]<this.sz[j]){
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        }else{
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
    }
  }


var findCircleNum = function(isConnected) {
    let nodes = new QuickUnion(isConnected.length);
    let nodeSet = new Set();
    for(let i = 0; i<isConnected.length;i++){
        for(let j = 0; j<isConnected[0].length; j++){
            if(i !== j && isConnected[i][j] === 1){
                nodes.unite(i,isConnected[i][j]*j);
            }
        }
    }
    for(let i = 0; i<nodes.id.length; i++){
        nodes.id[i] = nodes.root(i)
        nodeSet.add(nodes.id[i]);
    }
    return nodeSet.size
};
// @lc code=end

