/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if(root1 === null) return root2;
    if(root2 === null) return root1;
    let node1 = root1;
    let node2 = root2;
    const dfs = (node1, node2) =>{
        if(!node1 && !node2) return null;
        if(!node1 || !node2) return node1 ? node1:node2;
        if(node1 && node2) node1.val += node2.val;
        node1.left = dfs(node1.left, node2.left)
        node1.right = dfs(node1.right, node2.right)
        return node1;
    }
    dfs(node1, node2);
    return root1;

};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// let root = new TreeNode(1);
// root.left = new TreeNode(3);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(5);

// let subRoot = new TreeNode(2);
// subRoot.left = new TreeNode(1);
// subRoot.right = new TreeNode(3);
// subRoot.left.right = new TreeNode(4);
// subRoot.right.right = new TreeNode(7);
let root = null
let subRoot = new TreeNode(1);
mergeTrees(root, subRoot);

// @lc code=end
















/*
   // dfs, merge over to root1
    // base case
    if(root1 === null){
        return root2
    }
    if(root2 === null){
        return root1
    }
    // action
    root1.val += root2.val;
    // traverse
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1
*/


/* long but bfs
    const root1arr = [root1.val];
    const root2arr = [root2.val];

    function treeToArr(tree, arr){
        let queue = [tree];
        while(queue.length > 0){
            const node = queue.shift();
            if(!node.left && !node.right) return
            if(node.left){
                queue.push(node.left)
                arr.push(node.left.val)
            }else{
                arr.push(null)
            }
            if(node.right){
                queue.push(node.right)
                arr.push(node.right.val)
            }else{
                arr.push(null)
            }
        }
    }

    treeToArr(root1, root1arr)
    treeToArr(root2, root2arr)

    let arr = [];
    let maxLength = Math.max(root1arr.length, root2arr.length);

    for(let i = 0; i<maxLength; i++){
        let sum = 0;
        if(!root1arr[i] && !root2arr[i]){
            arr[i] = null;
            continue;
        }
        if(root1arr[i]) sum+= root1arr[i]
        if(root2arr[i]) sum+= root2arr[i]
    
        arr[i] = sum
    }

    let firstNode = new TreeNode(root1arr[0] + root2arr[0]);
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
    
    firstNode

*/