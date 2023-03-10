/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */

var criticalConnections = function (n, connections) {
    


};

// criticalConnections(4,
//     [[0,1],[1,2],[2,0],[1,3]]
// );

criticalConnections(5,
    [[0,1],[1,2],[2,0],[2,3], [3,0], [1,4]]
);
































/*
  let nodes = new Graph(n);
        for(let [src,dest] of connections){
            nodes.addEdge(src, dest);
        }
        let disc = new Array(n);
        let low = new Array(n);
        let time = 1;
        let ans = []; 
        const criticalDFS = (curr, prev) =>{
            disc[curr] = low[curr] = time++;
            for(let next of nodes.adjList[curr]){
                if(!disc[next]){ // Calling criticalDFS on each unvisited adjacent nodes of the current node
                    criticalDFS(next, curr)
                    // We know curr and next is connected. So, we can set low[curr] to whichever is low for every connected nodes
                    low[curr] = Math.min(low[curr], low[next]);
                    // If there's a loop, when backtracking, low[next] should be lower than low[curr] since low[next]... could be from the start of the node (for simplicity 0)
                }else if(next !== prev){
                    // If a loop is formed, disc[next] could be lower value(2->0)
                    // So, set low[curr] to whichever is lower between low[curr] and disc[next];
                    low[curr] = Math.min(low[curr], disc[next]);
                }
                if(low[next] > disc[curr]){
                    ans.push([curr,next])
                }
            }
        }
        criticalDFS(0, -1);
        return ans;
*/

/*
let adjList =  new Array(n).fill().map(x => new Array())
     let disc = new Array(n);
     let low = new Array(n)
  
     for(let [src, dest] of connections){
         adjList[src].push(dest);
     }
     let counter = 1;
     let output = [];


     function dfs(curr, prev){
         // Increasing discovery rank and low
        disc[curr] = low[curr] = counter++;

        
        for(let next of adjList[curr]){
            if(!disc[next]){ // If unvisited
                dfs(next, curr)
                // invoked after it runs dfs recursive call. 
                low[curr] = Math.min(low[curr], low[next]);
            }else if(next !== prev){ // Every case except two nodes going back and forth
                low[curr] = Math.min(low[curr], disc[next]);
            }
            if(low[next] > disc[curr]){
                output.push([curr, next]);
            }
        }

               
    }
    
    dfs(0,-1);

    return output;
*/