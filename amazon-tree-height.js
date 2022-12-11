class BinaryTree{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let tree = new BinaryTree(4);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(6);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(3);
tree.right.left = new BinaryTree(5);
tree.right.right = new BinaryTree(7);
tree.right.right.right = new BinaryTree(8)

function heightFinder(tree){
    let stack = [tree];
    let counter = 0;
    while(stack.length){
        let tempStack = []
        let stackLength = stack.length
        for(let i = 0; i<stackLength; i++){
            let node = stack.shift();
            if(node.left) tempStack.push(node.left);
            if(node.right) tempStack.push(node.right);
        }
        stack = tempStack;
        counter++
    }
    return counter-1;
}

heightFinder(tree)