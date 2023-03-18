/*
 * @lc app=leetcode id=1339 lang=javascript
 *
 * [1339] Maximum Product of Splitted Binary Tree
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
var maxProduct = function (root) {
    let head = root
    let total = 0;
    let sumsArr = [];

    let postOrderDFS = (root) =>{
        if(!root) return 0;
        let sum = root.val;
        if(root.left) sum += postOrderDFS(root.left)
        if(root.right) sum += postOrderDFS(root.right)
        total += root.val;
        sumsArr.push(sum)
        return sum;
    }

    postOrderDFS(head)

    let max = 0;

    for(let i = 0; i<sumsArr.length; i++){
        max = Math.max(max, (total-sumsArr[i])*sumsArr[i])
    }

    
    return max%(1000000000+7);
};


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr = [1,null,2,3,4,null,null,5,6]


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


maxProduct(root);

// @lc code=end






/*
let allSums = [];
    let total = treeSum(root);
    let max = 0;
    
    for(let sum of allSums){
        max = Math.max(max, (total-sum)*sum);
    }

    function treeSum(root) {
        if(root === null) return 0;
        let leftsum = treeSum(root.left)
        let rightsum = treeSum(root.right)
        let totalSum = leftsum+rightsum+root.val;
        allSums.push(totalSum);
        return totalSum;
    }
    

    return max % 1000000007;
 */