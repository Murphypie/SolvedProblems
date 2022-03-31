//https://www.youtube.com/watch?v=pVfj6mxhdMw

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacenyList={};
    }
    addVertex(vertex){
        if(!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacenyList[vertex1].push({node:vertex2, weight:weight});
        this.adjacenyList[vertex2].push({node:vertex1, weight:weight})
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        // Build up initial state
        for(let vertex in this.adjacenyList){
            if(vertex === start){
                nodes.enqueue(vertex, 0);
                distances[vertex] = 0;
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
      
        // As long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                // We are done, build up path to return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacenyList[smallest]){
                    let nextNode = this.adjacenyList[smallest][neighbor];
                    //console.log(nextNode);
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // update previous - how we got to neighbot
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }

        }
        return path.concat(smallest).reverse();
    }
}

var graph =new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");