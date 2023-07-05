/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let tree = root;
    
    const dfs = (root) =>{
        if(!root) return;
        if(root.left || root.right){
            let temp = root.right
            root.right = root.left;
            root.left = temp;
        }
        dfs(root.left)
        dfs(root.right)

    }
    dfs(root)
    return root
};
// @lc code=end

