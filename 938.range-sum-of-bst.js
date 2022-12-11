/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;

    function bst(tree){
        if(tree.val > low && tree.val < high || tree.val === high || tree.val === low) sum+= tree.val
        if(tree.left) bst(tree.left)
        if(tree.right) bst(tree.right)
    }

    bst(root)
    return sum;
};
// @lc code=end




/*
    let sum = 0;
    let node = root;
    let recur = (node) =>{
        if(!node) return;
        if(node.val >= low && node.val <=high){
            sum += node.val;
        }
        if(node.left) recur(node.left)
        if(node.right) recur(node.right)
    }
    recur(node)
    return sum;
*/