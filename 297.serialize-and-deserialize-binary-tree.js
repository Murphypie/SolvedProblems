/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return []
    let output = [root.val];
    let queue = [root];
    while(queue.length){
        let size = queue.length;
        for(let i = 0; i<size; i++){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
                output.push(node.left.val)
            }else{
                output.push(null)
            }
            if(node.right){
                queue.push(node.right)
                output.push(node.right.val)
            }else{
                output.push(null)
            }
        }
    }
    let cutRange = 0;
    for(let i = output.length-1; i>=0; i--){
        if(output[i] !== null){
            cutRange = i;
            break;
        }
    }
    output = output.slice(0, cutRange+1)

    
    return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data.length) return null
    let outputNode = new TreeNode(data[0]);
    let count = 0;
    let queue = [outputNode];
    while(queue.length){
        let size = queue.length;
        for(let i = 0; i<size; i++){
            let node = queue.shift()
            count += 1;
            if(data[count] === 0 || data[count]){
                node.left = new TreeNode(data[count])
                queue.push(node.left)
            }
            count += 1;
            if(data[count] === 0 || data[count]){
                node.right = new TreeNode(data[count])
                queue.push(node.right)
            }
        }
    }
   return outputNode
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}


let arr = [1,2,3,null,null,4,5]
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

serialize(firstNode)
deserialize(arr)

