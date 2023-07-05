/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {
    let output = true;
    const dfs = (root) =>{
        if(!root) return
        if(!root.left && !root.right) return [0,0];
        let height = [0,0];
        if(root.left){
            let arr = dfs(root.left)
            height[0] = Math.max(arr[0], arr[1])+1
        }
        if(root.right){
            let arr = dfs(root.right);
            height[1] = Math.max(arr[0], arr[1])+1
        }
        if(Math.abs(height[1]-height[0])>1) output = false;
        return height;
    }
    dfs(root)
    return output;
};
// @lc code=end

