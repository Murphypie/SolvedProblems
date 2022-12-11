class UnionFind {
    constructor(n) {
        this.graph = [...Array(n)].map((_, i) => i);
        this.extra = null;
    }
    
    find(id) {
        if(this.graph[id] === id) return id;
        this.graph[id] = this.find(this.graph[id]);
        return this.graph[id];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX !== rootY) this.graph[rootY] = rootX;
        else this.extra = [x, y]
    }
}

