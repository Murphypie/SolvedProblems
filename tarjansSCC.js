// https://www.youtube.com/watch?v=wUgWX0nc4NY
/**
 Strongly Connected Componets (SCCs) can be thought as self-contained cycles
 within a directed graph where every vertex.

 Low-Link value of a node is the smallest (lowest) node id reachable 
 from that node when doing a dfs

 Time Complexity = O(V+E); Vertices + Edges

 */ 


 class TarjansScc{
    constructor(N){
        this.numberofNodes = N;
        this.id = 0;
        this.sccCount = 0;
        this.ids = new Array(N).fill(-1); // -1 to note unvisited
        this.low = new Array(N).fill(0);
        this.onStack = new Array(N).fill(false);
        this.stack = [];
        this.adjList = new Array(N);
        this.adjList = Array.from(this.adjList, ()=>new Array())
        this.grouped = [];
    }

    addEdge(p,q){
        this.adjList[p].push(q);
    }

    dfs(at){
        this.stack.push(at);
        this.onStack[at] = true;
        this.ids[at] = this.low[at] = this.id++

        for(let to of this.adjList[at]){
            if(this.ids[to] === -1){
                this.dfs(to);
            }
            if(this.onStack[to]){ // This means that nodes formed a cycle
                this.low[at] = Math.min(this.low[at], this.low[to])
            }
        }

        if(this.ids[at] === this.low[at]){
            let tempArr = [];
            for(let node = this.stack.pop();; node = this.stack.pop()){
                tempArr.push(node);
                this.onStack[node] = false;
                this.low[node] = this.ids[at]
                if(node === at) break;
            }
            this.grouped.push(tempArr);
            this.sccCount++;
        }
    }

    findSccs(){
        for(let i = 0; i< this.numberofNodes; i++){
            if(this.ids[i] === -1){
                this.dfs(i)
            }
        }
        return this.low;
    }
}

const g = new TarjansScc(8);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(3,4);
g.addEdge(3,7);
g.addEdge(4,5);
g.addEdge(5,6);
g.addEdge(5,0);
g.addEdge(6,4);
g.addEdge(6,0);
g.addEdge(6,2);
g.addEdge(7,3);
g.addEdge(7,5);

g.findSccs();
g;






