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

var delNodes = function(root, to_delete) {
    let head = root;
    const output = []
    let deleteNums = new Set(to_delete)
    const dfs = (node, isRoot) => {
        if(!node) return null;
        let shouldDelete = deleteNums.has(node.val);
        if(isRoot && !shouldDelete) output.push(node);
        node.left = dfs(node.left, shouldDelete)
        node.right = dfs(node.right, shouldDelete)
        return shouldDelete? null:node;
    }

    dfs(head, true)
    return output;
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

let arr = [1,2,3,null,null,null,4]
let to_delete =  [2,1]

let node = new TreeNode(arr[0]);
let queue = [node]

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

delNodes(node, to_delete)
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