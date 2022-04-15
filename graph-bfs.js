class Graph{
    constructor(n){
        this.adjList = new Array(n).fill().map(x=>new Array);
        this.visited = new Array(n).fill(false);
    }

    addEdge(p,q){
        this.adjList[p].push(q)
    }

    bfs(s){
        let queue = [];
        let output = [];
        queue.push(s)
        this.visited[s] = true;
        while(queue.length){
            s = queue.shift();
            output.push(s);
            for(let node of this.adjList[s]){
                if(!this.visited[node]){
                    this.visited[node] = true;
                    queue.push(node);
                }
            }
        }
        return output
    }
}

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.bfs(2);
