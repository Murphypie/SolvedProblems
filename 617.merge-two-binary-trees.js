/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
     // dfs, merge over to root1
    // base case
    if(root1 === null){
        return root2
    }
    if(root2 === null){
        return root1
    }
    // action
    root1.val += root2.val;
    // traverse
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);

let subRoot = new TreeNode(2);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(3);
subRoot.left.right = new TreeNode(4);
subRoot.right.right = new TreeNode(7);
mergeTrees(root, subRoot);

// @lc code=end

/*
   // dfs, merge over to root1
    // base case
    if(root1 === null){
        return root2
    }
    if(root2 === null){
        return root1
    }
    // action
    root1.val += root2.val;
    // traverse
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1
*/
