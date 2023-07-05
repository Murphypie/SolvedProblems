/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {

};
// @lc code=end


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr = [5,1,4,null,null,3,6]//[5,4,6,null,null,3,7]

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


isValidBST(firstNode)