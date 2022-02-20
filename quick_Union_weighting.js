// Modify quick_union_lazy to avoid tall trees
// Keep track of size of each component
// Balance by linking small tree below large one.

class QuickUnion {
    constructor(N) {
      this.id = [];
      this.sz = [];
      for (let i = 0; i < N; i++) {
          this.id[i] = i;
          this.sz[i] = 1;
      }
    }
    root(i){ 
      while(this.id[i] !== i){
          i = this.id[i]
      };
      return i;
    };
    find(p,q){ 
        return this.root[p] === this.root[q]
    }
    unite(p,q){ 
        let i = this.root(p);
        let j = this.root(q);
        if(this.sz[i]<this.sz[j]){
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        }else{
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
    }
  }
  
  const test = new QuickUnion(3);
  test.unite(0,1);
  test.unite(1,2);
  test.unite(2,0);


 test;



 
 
  // Find - O(n) proportioanl to depth of p and q
  // Union - takes O(n), given roots
  // Unite: depth is at most O(log N)