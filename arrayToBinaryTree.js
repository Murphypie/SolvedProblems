/* Given an array, convert the array to Binary Tree */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr = [1,2,null,4,5,6,7];

let firstNode = new TreeNode(arr[0]);
let queue = [firstNode]

let idx = 1;

while(queue.length){
    let tempQueue = []
    let node = queue.shift();
    if(arr[idx] && arr[idx] !== null){
        node.left = new TreeNode(arr[idx])
        tempQueue.push(node.left)
    }
    if(arr[idx+1] && arr[idx+1] !== null){
        node.right = new TreeNode(arr[idx+1])
        tempQueue.push(node.right)
    }
    idx += 2
    queue.push(...tempQueue)
}

