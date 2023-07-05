/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const compare = (p, q) =>{
        if(!p && !q) return true;
        if(!p || !q || p.val !== q.val) return false;
        return compare(p.left, q.left) && compare(p.right, q.right)
    }
    return compare(p,q)
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let node1 = new TreeNode(1);
node1.left = new TreeNode(2); 
node1.right = new TreeNode(3); 
let node2  = new TreeNode(1);
node2.left = new TreeNode(2); 
node2.right = new TreeNode(3);
isSameTree(node1, node2) 