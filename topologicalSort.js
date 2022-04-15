// https://www.youtube.com/watch?v=eL-KzMXSXXI

class Topo{
   constructor(n){
       this.adjList = new Array(n).fill().map(()=>new Array());
       this.visited = new Array(n).fill(false);
       this.topOrder = []
   }
   addEdge(p,q){
       this.adjList[p].push(q);
   }

   dfs(i, queue){
       this.visited[i] = true;
       for(let node of this.adjList[i]){
           if(!this.visited[node]){
               this.dfs(node, queue)
               queue.push(node);
            }
        }
        return queue;
    }

   topSort(start){
        this.topOrder.push(...this.dfs(start, []))
        this.topOrder.push(start);
        for(let i = 0; i<this.visited.length; i++){
            if(!this.visited[i]){
                this.topOrder.push(...this.dfs(i, []));
                this.topOrder.push(i);
            }
        }
        return this.topOrder
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
// g;
// g.topSort(3);
// g.topOrder;

const g = new Topo(10);
g.addEdge(0,1)
g.addEdge(0,3)
g.addEdge(1,4)
g.addEdge(2,5)
g.addEdge(3,4)
g.addEdge(3,5)
g.addEdge(4,6)
g.addEdge(4,7)
g.addEdge(5,6)
g.addEdge(5,8)
g.addEdge(6,8)
g.addEdge(6,9)
g.addEdge(7,9)
g.topSort(0);




/*
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
*/





