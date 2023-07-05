/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let output = [];
    let queue = [root];
    while(queue.length){
        let size = queue.length;
        let tempQueue = []
        for(let i = 0; i<size; i++){
            let node = queue.shift()
            if(node){
                tempQueue.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if(tempQueue.length) output.push(tempQueue)
    }
    return output;
};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr =  [3,9,20,null,null,15,7]

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


levelOrder(firstNode)