// https://www.youtube.com/watch?v=eL-KzMXSXXI

class Topo{
    constructor(N){
        this.numberofNodes = N;
        this.visited = new Array(N).fill(false);
        this.ordering = new Array(N).fill(0);
        this.adjList = new Array(N);
        this.adjList = Array.from(this.adjList, ()=>new Array())
        this.index = N-1;
    }

    addEdge(p,q){
        this.adjList[p].push(q);
    }

    dfs(at, visited, visitedNodes, adjList){
        visited[at] = true;
        for(let edge of adjList[at]){
            if(this.visited[edge] === false){
                this.dfs(edge, visited, visitedNodes, adjList)
            }
        }
        visitedNodes.push(at)
    }

    topsort(){
        for(let at = 0; at<this.numberofNodes; at++){
            if(this.visited[at] === false){
                let visitedNodes = [];
                this.dfs(at, this.visited, visitedNodes, this.adjList);
                for(let nodeId of visitedNodes){
                    this.ordering[this.index] = nodeId;
                    this.index = this.index-1;
                }
            }
        }
        return this.ordering;
    }
}


// const g = new Topo(6);
// g.addEdge(0,1);
// g.addEdge(0,3);
// g.addEdge(0,5);
// g.addEdge(1,2);
// g.addEdge(2,3);
// g.addEdge(2,4);
// g.addEdge(3,4);
// g.addEdge(5,3);
// g.adjList;
// g.topsort();
// g.ordering;

const g = new Topo(13);
g.addEdge(0,3);
g.addEdge(1,3);
g.addEdge(2,0);
g.addEdge(2,1);
g.addEdge(3,6);
g.addEdge(3,7);
g.addEdge(4,0);
g.addEdge(4,5);
g.addEdge(5,9);
g.addEdge(5,10);
g.addEdge(6,8);
g.addEdge(7,8);
g.addEdge(7,9);
g.addEdge(8,11);
g.addEdge(9,11);
g.addEdge(9,12);
g.addEdge(10,9);
g.adjList;
g.topsort();
g.ordering;







