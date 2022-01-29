// id[i] is parent of i
// Root of i is id[id[id[id...id[i]...]]]
// Find - check if p and q have the same root.
// Union - Set the id of q's root to the id of p's root

class QuickUnion {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
        this.id[i] = i;
    }
  }
  root(i){ // O(n) proportional to depth of i
    while(this.id[i] !== i){
        i = this.id[i]
    };
    return i;
  };
  find(p,q){ // O(n) proportional to depth of p and q
      return this.root[p] === this.root[q]
  }
  unite(p,q){ // O(n) proportional to depth of p and q
      let i = this.root(p);
      let j = this.root(q);
      this.id[i] = j;
  }

}

const test = new QuickUnion(10);
test.unite(3,4);
test.unite(4,9);
test.unite(2,3);
test.unite(5,6);
test;
test.unite(5,3);
test;


// Trees can get tall with quick union lazy - (because unite doesn't differentiate which one's greater value
// but just add then whichever the order in which p and q are given)
// Find is too expensive (could be N steps)