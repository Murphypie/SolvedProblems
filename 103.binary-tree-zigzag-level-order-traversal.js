/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 */

// @lc code=start

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    // if(root === null) return [];
    // let output = [];
    // let queue = [root];
    // let counter = 0;
    // while(queue.length > 0){
    //     const size = queue.length;
    //     const level = [];
    //     for(let i = 0; i<size; i++){
    //         const node = queue.shift();
    //         if(counter % 2 === 0) level.push(node.val);
    //         else level.unshift(node.val);

    //         if(node.left) queue.push(node.left)
    //         if(node.right) queue.push(node.right)
    //     }
    //     output.push(level);
    //     counter++;
    // }
    // return output;
};

// let root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// root.left.left = new TreeNode(4)
// root.right.right = new TreeNode(5);
// zigzagLevelOrder(root);


// @lc code=end

