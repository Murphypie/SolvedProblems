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
 var findCircleNum = function(isConnected) {
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
 }

// @lc code=end

// Union-Find
// class QuickUnion {
//     constructor(N) {
//       this.id = [];
//       this.sz = [];
//       for (let i = 0; i < N; i++) {
//           this.id[i] = i;
//           this.sz[i] = 1;
//       }
//     }
//     root(i){ 
//       while(this.id[i] !== i){
//           this.id[i] = this.id[this.id[i]] // make every other node in path point to its grandparent
//           i = this.id[i]
//       };
//       return i;
//     };
//     find(p,q){ 
//         return this.root[p] === this.root[q]
//     }
//     unite(p,q){ 
//         let i = this.root(p);
//         let j = this.root(q);
//         if(this.sz[i]<this.sz[j]){
//             this.id[i] = j;
//             this.sz[j] += this.sz[i];
//         }else{
//             this.id[j] = i;
//             this.sz[i] += this.sz[j];
//         }
//     }
//   }


// var findCircleNum = function(isConnected) {
//     let nodes = new QuickUnion(isConnected.length);
//     let nodeSet = new Set();
//     for(let i = 0; i<isConnected.length;i++){
//         for(let j = 0; j<isConnected[0].length; j++){
//             if(i !== j && isConnected[i][j] === 1){
//                 nodes.unite(i,isConnected[i][j]*j);
//             }
//         }
//     }
//     for(let i = 0; i<nodes.id.length; i++){
//         nodes.id[i] = nodes.root(i)
//         nodeSet.add(nodes.id[i]);
//     }
//     return nodeSet.size
// };


// DFS
// var findCircleNum = function(isConnected) {
//     // Set - Save visited location
//     // Run through row of the given array.
//     // At each row - check to see if this location was visited. 
//     // If not, run dfs function that will recursively update the visited location
//     // In dfs function, At each column (isConnected[i][j])
//     // Check to see if it was visited before or connected.
//     // If both are not, add column[j] to visited location. 

//     let seen = new Set();
//     let count = 0;

//     const dfs = (i) => {
//         for(let j = 0; j<isConnected[0].length; j++){
//             if(isConnected[i][j] === 1 && !seen.has(j)){
//                 seen.add(j)
//                 dfs(j);
//             }
//         }
//     }

//     for(let i = 0; i<isConnected.length;i++){
//         if(!seen.has(i)){
//             dfs(i)
//             count++;     
//         }
//     }

//     return count;
// };