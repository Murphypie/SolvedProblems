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

    }
    max(){

    }
    height(){

    }
}

const node = new BinarySearchTree(8);
node.add(3);
node.add(10);
node.add(1);
node.add(6);
node.add(14);
node.add(4)
node.add(7)
node.add(13)

node;
node.contains(9)
const log = (x)=>{console.log(x)}
node.breadthFirst(log);