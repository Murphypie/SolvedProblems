class QuickFind{
    constructor(N){
        this.id = [];
        for(let i = 0; i<N; i++){
            this.id[i] = i;
        }
    }
    find(p,q){
        return this.id[p] === this.id[q]
    }
    unite(p, q){
        let pid = this.id[p];
        for(let i = 0; i<this.id.length; i++){
            if(this.id[i] === pid) this.id[i] = this.id[q]
        }
    }
}

const network = new QuickFind(10);
network.unite(3,4);
network.unite(4,9);
network.unite(8,0);
network.unite(2,3);
network.find(9,2);


network

