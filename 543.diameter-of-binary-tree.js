/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let output = [0];
    const dfs = (root)=>{
        if(!root) return -1;
        let left = dfs(root.left)
        let right = dfs(root.right)
        output[0] = Math.max(output[0], 2+left+right);
        return 1+Math.max(left,right)
    }
    dfs(root)
    output
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let arr = [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]

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


diameterOfBinaryTree(firstNode)













/*
    let node = root;
    let max = 0
    const dfs = (node) =>{
        if(node.left === null && node.right === null) return [0,0];
        let length = [0,0];
        if(node.left){
            let arr = dfs(node.left)
            length[0] = Math.max(arr[0],arr[1])+1
        } 
        if(node.right){
            let arr = dfs(node.right)
            length[1] = Math.max(arr[0],arr[1])+1
        }
        max = Math.max(max, length[0]+length[1])
        return length;
    }
    dfs(node)
    return max;
*/