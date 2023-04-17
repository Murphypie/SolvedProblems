/*
    *
   / \
  +   c
 / \
a   b
Input: root
Output: "(a+b)*c"

      *
     / \
    -   d
   / \
  *   c
 / \
a   b
Output = "((a*b)-c)*d"

// output = "";
// recursive function
// 1. If left exists, add parenthesis to output and invoke recursive function on left node
// 2. concatenate value to output
// 3. If right exists, close parenthesis to output and invoke recursive function on right node
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const bstExp = (root) =>{
    let output = "";
    let operArr = ["*", "-", "+", "/"]

    const dfs = (node) =>{
        if(!node) return ""
        let temp = ""
        node.left = dfs(node.left)
        node.right = dfs(node.right)
        temp += node.left + node.val + node.right
        if(operArr.includes(node.val)){
            temp = "(" + temp + ")";
        }
        return temp;
    }

    output = dfs(root)
    return output;
}


let arr =  ["*", "-", "d", "*", "c", null, null, "a", "b"] 


let root = new TreeNode(arr[0])
let queue = [root]
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

bstExp(root)