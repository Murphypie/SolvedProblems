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
    // do it again
};

criticalConnections(4,
    [[0,1],[1,2],[2,0],[1,3]]
);

// criticalConnections(5,
//     [[0,1],[1,2],[2,0],[2,3], [3,0], [1,4]]
// );

// @lc code=end














/*
        const buildAdjList = (n, connections) => {
    const r = Array(n).fill().map(() => []);
    
    for (let c of connections) {
        const [a, b] = c;
        r[a].push(b);
        r[b].push(a);
    }
    
    return r;
}

var criticalConnections = function(n, connections) {
    const adjList = buildAdjList(n, connections);
    const orderList = Array(n).fill();
    const lowlinkList = Array(n).fill();
    
    let order = 0;
    const cycles = [];
    const critical = []
    
    const strongConnect = (i, p) => {
        orderList[i] = order++;
        lowlinkList[i] = orderList[i];
        
        for (const j of adjList[i]) {
            if (j === p) {
                continue;
            }
            
            if (orderList[j] === undefined) {
                strongConnect(j, i);                
            }
            
            lowlinkList[i] = Math.min(lowlinkList[i], lowlinkList[j]);
            
			// A higher lowlink value for node `j` means that the oldest 
			// ancestor that could be reached from node `j` is still younger
			// than node `i`. Had there been any other path from `j` to `i`,
			// `j`'s lowlink value would have been lower. Hence this connection
			// is critical.
            if (lowlinkList[j] > orderList[i]) {
                critical.push([i, j])
            }
        }
        
    }
    
    for (const i in adjList) {
        if (orderList[+i] !== undefined) {
            continue;
        }
        
        strongConnect(+i);
    }
    
    return critical;
};

*/

/* 
    let adjList = {};
    let disc = new Uint32Array(n);
    let low = new Array(n);

    for(let [u,v] of connections){
        if(!adjList[u]) adjList[u] = [];
        if(!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    const output = [];
    let count = 1;
    
    const dfs = (curr, prev) => {
        disc[curr] = low[curr] = count++

        for(let next of adjList[curr]){
            if(!disc[next]){
                dfs(next ,curr);
                low[curr] = Math.min(low[curr], low[next])
            }else if(next !== prev){
                low[curr] = Math.min(low[curr], disc[next]);
            }
            if(low[next]>disc[curr]){
                output.push([curr,next])
            }
        }
    }

    dfs(0, -1)
   
    return output;
    
*/