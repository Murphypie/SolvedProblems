// push
// contains
// addToHead
// insert   // insert an item at the position specified
// removeItem
// removePosition
// Reverse Linked List
// removeNthNodeFromEnd

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(val){
        let node = new Node(val);
        if(this.head === null && this.tail === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
    }

    contains(val){
        let traverser = this.head;
        while(traverser !== null){
            if(traverser.val === val) return true;
            traverser = traverser.next;
        }
        return false;
    }

    addToHead(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    
    insert(val, position){
        let traverser = this.head;
        let node = new Node(val);
        let i = 1;
        while(i<position){
            traverser = traverser.next;
            i++
        }
        let temp = traverser.next;
        traverser.next = node;
        node.next = temp;
    }

    removeItem(val){
        let traverser = this.head;
        if(traverser.val === val){
            this.head = traverser.next;
        }
        while(traverser.next !== null){
            if(traverser.next.val === val){
                if(traverser.next === this.tail){
                    traverser.next = null
                    this.tail = traverser;
                }else{
                    traverser.next = traverser.next.next;
                }
                return true;
            }
            if(traverser.next) traverser = traverser.next;
        }
        return false;
    }

    removePosition(index){
        let traverser = this.head;
        if(index === 0){
            this.head = traverser.next
        }else{
            let i = 0;
            while(i<index-1){
                if(traverser === this.tail) break;
                if(traverser.next) traverser = traverser.next;
                i++
            }
        }
        if(traverser === this.tail || traverser.next === null) return false;

        if(traverser.next === this.tail){
            traverser.next = null;
            this.tail = traverser;
        }else{
            traverser.next = traverser.next.next;
        }
    }

    reverseLinkedList(){
        let prev = null;
        let curr = this.head;
        let next = null;
        while(curr !== null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    removeNthNodeFromEnd(){
        let fast = this.head;
        let slow = this.head;
    
        for(let i = 0; i<n;i++){
            fast = fast.next;
        }
    
        if(fast === null) return this.head.next;
        while(fast.next !== null && slow.next.next){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
    }

}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}



  
const linkedList = new LinkedList();
linkedList.push(10);
linkedList.push(5);
linkedList.push(7);
linkedList.push(11);
linkedList.push(20);
linkedList.contains(20)
//linkedList.addToHead(8);
//linkedList.insert(3,2);
//linkedList.removeItem(7)
//linkedList.removePosition(4)
linkedList.reverseLinkedList()
//   linkedList
//   linkedList.removeNthNodeFromEnd(2);
//   linkedList
linkedList;
  
  /*
  
  function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(val) {
    this.value = val;
    this.next = null;
  }
  
  // adds node to end of list
  LinkedList.prototype.push = function(value) {
      const node = new Node(value);
      let temp = this.head;
      if(this.head === null && this.tail === null){
          this.head = node;
          this.tail = node;
      }else{
          while(temp.next !== null){
              temp = temp.next;
          }
          temp.next = node;
          this.tail = node;
      }
  };
  
  // returns true if value is present in the list
  LinkedList.prototype.contains = function(value) {
      let node = this.head;
      while(node !== null){
          if(node.value === value){
              return true;
          }
          node = node.next;
      }
      return false;
  };
  
  // Bonus
  // adds node to beginning of list
  LinkedList.prototype.addToHead = function(value) {
      let list = this;
      const newNode = new Node(value);
      newNode.next = list.head;
      list.head = newNode;
  };
  
  // Extra Bonus
  // insert an item at the position specified
  LinkedList.prototype.insert = function(value, position) {
      let curr = this.head;
      const newNode = new Node(value);
      let counter = 0;
      if(position === 0){
          return "Can't use 0 as position. Use addToHead instead"
      }
      while((counter+1)<=position && curr !== null){
          curr = curr.next;
          counter++
      }
      let temp = curr.next
      curr.next = newNode;
      newNode.next = temp;
  };
  
  // Extra Bonus
  // remove first occurrence of value from list
  LinkedList.prototype.removeItem = function(value) {
      let prev = this.head;
      let curr = this.head.next;
      if(this.head.value === value){
          this.head = this.head.next;
      }else{
          while(curr !== null){
              if(curr.value === value){
                  prev.next = curr.next;
              }
              prev = prev.next;
              curr = curr.next;
          }
      }
  
  };
  
  // Extra Bonus
  // remove element at specified position in list
  LinkedList.prototype.removePosition = function(position) {
      let prev = this.head;
      let curr = this.head.next;
      let counter = 0;
  
      if(position === 0){
          this.head = this.head.next;
      }else{
          while(counter < position-1 && curr.next !== null){
              prev = prev.next;
              curr = curr.next;
              counter++;
          }
      }
     
      if(curr.next === null && curr.next === null){
          prev.next = null;
          this.tail = prev;
      }else{
          prev.next = curr.next;
      }
      
  };
  
  LinkedList.prototype.reverseLinkedList = function(){
      let curr = this.head;
      let prev = null;
      let next = null;
  
      this.tail = this.head;
  
      while(curr !== null){
          next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
      }
  
      this.head = prev;
  
  }
  
  LinkedList.prototype.removeNthNodeFromEnd = function(n){
      let fast = this.head;
      let slow = this.head;
  
      for(let i = 0; i<n;i++){
          fast = fast.next;
      }
  
      if(fast === null) return this.head.next;
      while(fast.next !== null && slow.next.next){
          fast = fast.next;
          slow = slow.next;
      }
      slow.next = slow.next.next;
  }
  */