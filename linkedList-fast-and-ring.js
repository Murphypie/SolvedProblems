class LinkedList{
    constructor(val, next){
        this.val = (val === undefined ? 0:val);
        this.next = (next === undefined ? null : next);
    }
}

let node =  new LinkedList(1)
let head = node;
let counter = 2;
let joint;

while(counter <= 10){
    head.next = new LinkedList(counter);
    head = head.next;
    if(counter === 6){
        joint = head;
    }
    if(counter === 10){
        head.next = joint;
    }
    counter++;
}

function fastSlowPointer(node){
    let fast = node;
    let slow = node;
    //fast slow pointer (slow will yield mid point)
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        // check if there's a ring
        if(fast === slow) break;
    }
    // check if there's a ring
    slow = node;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow
}

fastSlowPointer(node)

