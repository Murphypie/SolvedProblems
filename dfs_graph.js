// Graph may contain cycles (a node may be visited twice). 
// To avoid processing a node more than once, use a boolean visited array
// https://www.programiz.com/dsa/graph-dfs

class Graph{
    constructor(N){
        this.numVertices = N;
        this.adjList = new Array(N);
        this.adjList  = Array.from(this.adjList, ()=>new Array());
        this.visited = new Array(N).fill(false);
        this.dfsReport = [];
    }
    addEdge(src, dest){
        this.adjList[src].push(dest);
    }
    dfs(v){
      this.visited[v] = true;
      this.dfsReport.push(v);
      for(let i of this.adjList[v]){
          if(!this.visited[i]){
              this.dfs(i);
          }
      }
      return this.dfsReport;
    }
}

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(1, 3);


g;
console.log(g.dfs(1))
g;
