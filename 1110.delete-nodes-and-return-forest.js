/*
 * @lc app=leetcode id=1110 lang=javascript
 *
 * [1110] Delete Nodes And Return Forest
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
 
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, new TreeNode(6), new TreeNode(7));
delNodes(root, [3,5])
// @lc code=end






   // let roots = [];
    // let search = function(root, isRoot){
    //     if(!root) return null;
    //     let shouldDelete = to_delete.includes(root.val);
    //     if(isRoot && !shouldDelete) roots.push(root);
    //     root.left = search(root.left, shouldDelete);
    //     root.right = search(root.right, shouldDelete);
    //     return shouldDelete ? null:root;
    // }
    // search(root, true);
    // return roots;


    /*
       // 1. BFS method to traverse (preorder)
   // 2. Check if the value is included in to_delete array. shoudDelete to hold boolean value
   // 3. When invoking recursive function, pass shouldDelete variable to next children tree
   // 3-1. If shouldDelete is true, then children tree will be severed from the main tree and will be the starting root
   // 4. If it is a Root and shouldDelete is false, then push it to output array
   // 5. If shouldDelete is true, return null, else return root

   let output = [];

   let search = function(root, isRoot){
       if(!root) return null;
       let shouldDelete = to_delete.includes(root.val);
       if(isRoot && !shouldDelete){
           output.push(root)
       }
       root.left = search(root.left, shouldDelete);
       root.right = search(root.right, shouldDelete);
       return shouldDelete ? null:root
   }

   search(root, true);
   return output;
    */