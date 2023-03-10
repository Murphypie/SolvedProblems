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

};


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

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