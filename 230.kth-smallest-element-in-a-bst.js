/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []
    let output = 0
    const dfs = (root,) =>{
        if(!root) return;
        dfs(root.left)
        arr.push(root.val);
        if(arr.length === k){
            output = root.val
            return
        }
        dfs(root.right)
    }

    dfs(root, [])
    return output
};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let arr =[3,1,4,null,2]
let k = 1

let firstNode = new TreeNode(arr[0]);
let queue = [firstNode]

let idx = 1;

while(queue.length){
    let tempQueue = []
    let node = queue.shift();
    if(Number.isInteger(arr[idx]) && arr[idx] !== null){
        node.left = new TreeNode(arr[idx])
        tempQueue.push(node.left)
    }
    if(Number.isInteger(arr[idx+1]) && arr[idx+1] !== null){
        node.right = new TreeNode(arr[idx+1])
        tempQueue.push(node.right)
    }
    idx += 2
    queue.push(...tempQueue)
}


kthSmallest(firstNode, k)
