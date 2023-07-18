/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
    let res = root.val;

    function dfs(root){
        if(!root) return 0;
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax,0)
        rightMax = Math.max(rightMax,0)
        res = Math.max(res, root.val+leftMax+rightMax)
        return root.val + Math.max(leftMax, rightMax)
    }
    dfs(root)

    return res;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr = [-10,9,20,null,null,15,7]

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


maxPathSum(firstNode)










/*
    let node = root
    let output = -Infinity
    const dfs = (node) =>{
        if(!node) return;
        let sum = node.val
        let leftSum = childSum(node.left)
        let rightSum = childSum(node.right)
        if(leftSum >= 0) sum += leftSum
        if(rightSum >= 0) sum += rightSum
        dfs(node.left)
        dfs(node.right)
        output = Math.max(output, sum)
        return sum;
    }

    dfs(node)


    function childSum(node){
        if(!node) return 0
        let sum = node.val;
        let max = Math.max(childSum(node.left), childSum(node.right))
        if(sum+max < sum) return sum;
        return sum+max;
    }
    return output;
*/