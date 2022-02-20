/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 */

const { updateFor } = require("typescript");

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */


 var criticalConnections = function(n, connections) {
  
 }

criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]);




// var criticalConnections = function(n, connections) {
//     let nodes = new Graph(n);
//     for(let [src,dest] of connections){
//         nodes.addEdge(src, dest);
//     }
//     let disc = new Array(n);
//     let low = new Array(n);
//     let time = 1;
//     let ans = [];
//     const criticalDFS = (curr, prev) =>{
//         disc[curr] = low[curr] = time++;
//         for(let next of nodes.adjList[curr]){
//             if(!disc[next]){ // Calling criticalDFS on each unvisited adjacent nodes of the current node
//                 criticalDFS(next, curr)
//                 // We know curr and next is connected. So, we can set low[curr] to whichever is low for every connected nodes
//                 low[curr] = Math.min(low[curr], low[next]);
//                 // If there's a loop, when backtracking, low[next] should be lower than low[curr] since low[next]... could be from the start of the node (for simplicity 0)
//             }else if(next !== prev){
//                 // If a loop is formed, disc[next] could be lower value(2->0)
//                 // So, set low[curr] to whichever is lower between low[curr] and disc[next];
//                 low[curr] = Math.min(low[curr], disc[next]);
//             }
//             if(low[next] > disc[curr]){
//                 ans.push([curr,next])
//             }
//         }
//     }
//     criticalDFS(0, -1);
//     return ans;
// };