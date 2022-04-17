class UnionFind{
    constructor(n){
        this.graph = [...Array(n)].map((_, i) => i);
        this.extra = null;
    }

    find(i){
        while(this.graph[i] !== i){
            i = this.graph[i];
            this.find(i)
        }
        return i;
    }

    union(i, j){
        let p = this.find(i);
        let q = this.find(j);
        if(p !== q) this.graph[j] = p;
        else this.extra = [i,j]
    }

}

const network = new UnionFind(11);
network.union(2,10); //CK
network.union(5,4); // FE
network.union(0,9); // AJ
network.union(0,1); // AB
network.union(2,3); // CD
network.union(3,8) // DI
network.union(11,5) //LF
network.union(2,0) // CA
network.union(1,0) // AB
network.union(7,6) // HG
network.union(7,5) //HF
network.union(7,1) // HB


// A = 0, B = 1, C=2, D=3, E=4, F=5, G=6, H=7, I=8, J=9, K=10

network
