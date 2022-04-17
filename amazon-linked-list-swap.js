
class LinkedList {
    constructor(val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function linkedListSwap(ll, x, y) {
  let prevX = null
  let currX = null
  let prevY = null;
  let currY = null;
  let prev = null
  let node = ll;

  while(node !== null){
      if(node.val === x){
        prevX = prev;
        currX = node;
      }
      if(node.val === y){
        prevY = prev;
        currY = node;
      }
      prev = node;
      node = node.next;
  }

  prevX.next = currY;
  prevY.next = currX;
  
//   let temp = currY.next;
  
//   currY.next = currX.next
//   currX.next = temp;

  let temp = currX.next;
  currX.next = currY.next;
  currY.next = temp;


  return ll;
}

let ll = new LinkedList(10);
ll.next = new LinkedList(15);
ll.next.next = new LinkedList(12);
ll.next.next.next = new LinkedList(13);
ll.next.next.next.next = new LinkedList(20);
ll.next.next.next.next.next = new LinkedList(14);

linkedListSwap(ll, 15, 20);
