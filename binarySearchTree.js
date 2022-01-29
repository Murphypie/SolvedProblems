class BinarySearchTree{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    add(val){
        let node = new BinarySearchTree(val);
        if(this.val > val){
            if(this.left === null){
                this.left = node;
            }else{
                this.left.add(val);
            }
        }else{
            if(this.right === null){
                this.right = node;
            }else{
                this.right.add(val);
            }
        }
    }

    remove(val){
        if(this.left !== null && this.left.val === val){
            this.left = null;
            return;
        };
        if(this.right !== null &&this.right.val === val) {
            this.right = null
            return;
        };
        if(this.val > val){
            if(this.left !== null){
                this.left.remove(val);
            }else{
                return;
            }
        }
        if(this.val < val){
            if(this.right !== null){
                this.right.remove(val);
            }else{
                return;
            }
        }
        return;
    }

    contains(val){
        if(this.val === val){
            return true;
        };
        if(this.val > val){
            if(this.left !== null){
                return this.left.contains(val);
            }
        }
        if(this.val < val){
            if(this.right !== null){
                return this.right.contains(val);
            }
        }
        return false
    }

    depthFirstPreOrder(callback){
        callback(this.val);
        if(this.left !== null) this.left.depthFirstPreOrder(callback);
        if(this.right !== null) this.right.depthFirstPreOrder(callback);
    }

    depthFirstInOrder(callback){
        if(this.left !== null) this.left.depthFirstPreOrder(callback);
        callback(this.val);
        if(this.right !== null) this.right.depthFirstPreOrder(callback);

    }
    depthFirstPostOrder(callback){
        if(this.left !== null) this.left.depthFirstPostOrder(callback);
        if(this.right !== null) this.right.depthFirstPostOrder(callback);
        callback(this.val);
    }

    breadthFirst(callback){
        const queue = [this];
        while(queue.length){
            callback(queue[0].val);
            if(queue[0].left) queue.push(queue[0].left);
            if(queue[0].right) queue.push(queue[0].right);
            queue.shift();
        }
    }

    min(){
        let min = Infinity;
        const leftTraverser = (root) => {
            if(!root) return;
            min = Math.min(min, root.val);
            if(root.left){
                leftTraverser(root.left);
            }
        }
        leftTraverser(this);
        return min;
    }

    max(){
        let max = -Infinity;
        const rightTraverser = (root) =>{
            if(!root) return;
            max = Math.max(max, root.val);
            if(root.right){
                rightTraverser(root.right);
            }
        }
        rightTraverser(this);
        return max;
    }

    height(){
        let height = 0;
        const heightFinder = (root) =>{

            if(!root.right && !root.left){
                height = height - 1
                return
            }

            if(root.left){
                height = height + 1;
                heightFinder(root.left)
            };
            if(root.right){
                height = height + 1;
                heightFinder(root.right);
            }
                
        }
        heightFinder(this);
        return height+1;
    }
}

const node = new BinarySearchTree(20);
node.add(8);
node.add(22);
node.add(4);
node.add(12);
node.add(10);
node.add(14);

console.log(node.height())