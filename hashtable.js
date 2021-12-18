function HashTable() {
  this.SIZE = 4 ;
  this.count = 0;
  this.storage = [];
}

HashTable.prototype.set = function(key, value) {
  const hash = hashCode(key, this.SIZE);
  let bucket = this.storage[hash];

  // If no bucket exists, create a new empty bucket.
  if(!bucket){
    bucket = [];
    this.storage[hash] = bucket;
  }

  // What if there's conflict (same key)? If there is, override them.
  let override = false;
  for(let i = 0; i<bucket.length; i++){
    let tuple = bucket[i];
    if(tuple[0] === key){
      tuple[1] = value;
      override = true;
    }
  }

  // If no conflict(different key but the same hash value), add it to our bucket
  // note that it could be the new empty bucket we created above(line 31) or
  // a bucket with other tuples with keys that are different that the key of the tuple we are inserting.
  if(!override){
    bucket.push([key, value]);
    this.count++;
    if(this.count > this.SIZE*0.75){
      this.rehash(this.SIZE*2);
    }
  }
  return this;
};

HashTable.prototype.rehash = function(newLimit){
  let oldStorage = this.storage;
  this.SIZE = newLimit;
  this.count = 0;
  this.storage = [];

  oldStorage.forEach(function(bucket){
    if(!bucket){
      return;
    }
    for(let i = 0; i<bucket.length; i++){
      let tuple = bucket[i]
      this.set(tuple[0], tuple[1]*10)
    }
  }.bind(this))
}

HashTable.prototype.retrieve = function(key){
  let hash = this.hashCode(key, this.SIZE);
  let bucket = this.storage[hash];
  if(!bucket){
    return null;
  }
  for(let i = 0; i<bucket.length; i++){
    let tuple = bucket[i];
    if(tuple[0]===key){
      return tuple[1]
    }
  }
  return null;
}

HashTable.prototype.retrieveAll = function(){
  console.log(this.storage);
}

HashTable.prototype.remove = function(key) {
  const hash = hashCode(key, this.SIZE);
  let bucket = this.storage[hash];
  for(let i = 0; i<bucket.length; i++){
    var tuple = bucket[i];
    if(tuple[0] === key){
      bucket.splice(i, 1);
      if(this.count < this.SIZE*0.25){
        this.resize(this.SIZE/2);
      }
    }
  }
  return tuple[1];
};

let hashTest = new HashTable();
hashTest.set("Heeho", 1);
hashTest.set("Alyssa", 2);
hashTest.set("Bibo", 3);
hashTest.set("Biba", 4)
hashTest.set("Bibiba",5)
hashTest.set("Bibibibo",6)
hashTest.set("MyLove",7)
hashTest.set("BibiLoveyBa",8)
hashTest.set("BibibibiBa",9)
hashTest.set("LoveyBa",10)

hashTest.remove('BibibibiBa')
hashTest;

// YOUR CODE ABOVE
function hashCode(string, size) {
  'use strict';
  
  let hash = 0;
  if (string.length === 0) return hash;
  
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash) % size;
}

