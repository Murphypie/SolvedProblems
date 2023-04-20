
class LinkedList {
    constructor(val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function linkedListSwap(ll, x, y) {
    let dummyload = new LinkedList(0);
    dummyload.next = ll;
    let node = dummyload;

    let firstPrevNode;
    let secondPrevNode;

    while(node){
        if(!node.next){
            if(!secondPrevNode) secondPrevNode = node;
            break;
        }
        if(node.next.val === x || node.next.val === y){
            if(!firstPrevNode){
                firstPrevNode = node
            }else{
                secondPrevNode = node;
            }
        }

        node = node.next
    }

    let firstNode = firstPrevNode.next
    let secondNode = secondPrevNode.next
    let temp = secondNode.next

    firstPrevNode.next = secondNode
    secondNode.next = firstNode.next

    secondPrevNode.next = firstNode
    firstNode.next = temp;
    return dummyload.next;
}

let ll = new LinkedList(10);
ll.next = new LinkedList(15);
ll.next.next = new LinkedList(12);
ll.next.next.next = new LinkedList(13);
ll.next.next.next.next = new LinkedList(20);
ll.next.next.next.next.next = new LinkedList(14);

linkedListSwap(ll, 10, 20);




































/*
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
*/