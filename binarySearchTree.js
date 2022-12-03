// add
// remove
// contains
// depthFirstPreOrder
// depthFirstInOrder
// depthFirstPostOrder
// breadthFirst
// min
// max
// height

class BinarySearchTree{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    add(input){
        if(this.val>input){
            if(this.left === null){
                this.left = new BinarySearchTree(input);
            }else{
                this.left.add(input)
            }
        }else{
            if(this.right === null){
                this.right = new BinarySearchTree(input);
            }else{
                this.right.add(input);
            }
        }
    }

    remove(input){
        if(this.val === input){
           this.val = null
           this.left = null
           this.right = null
        }
        if(this.val > input){
            if(this.left !== null){
                if(this.left.val === input){
                    this.left = null;
                }else{
                    this.left.remove(input)
                }
            }else{
                return;
            }
        }else{
            if(this.right !== null){
                if(this.right.val === input){
                    this.right = null;
                }else{
                    this.right.remove(input);
                }
            }else{
                return;
            }
        }
    }

    contains(input){
       if(this.val === input){
            return true;
       }else if(this.val > input){
            if(this.left !== null){
                return this.left.contains(input)
            }else{
                return false;
            }
       }else{
            if(this.right !== null){
                return this.right.contains(input)
            }else{
                return false;
            }
       }
       
    }

  
    depthFirstPreOrder(callback){
        callback(this.val);
        if(this.left !== null) this.left.depthFirstPreOrder(callback);
        if(this.right !== null) this.right.depthFirstPreOrder(callback);
    }

    depthFirstInOrder(callback){
        if(this.left !== null) this.left.depthFirstInOrder(callback);
        callback(this.val);
        if(this.right !== null) this.right.depthFirstInOrder(callback);
    }

    depthFirstPostOrder(callback){
        if(this.left !== null) this.left.depthFirstPostOrder(callback);
        if(this.right !== null) this.right.depthFirstPostOrder(callback);
        callback(this.val);
    }

    breadthFirst(callback){
        let queue = [this];
        while(queue.length){
            let firstEle = queue.shift();
            callback(firstEle.val);
            if(firstEle.left){
                queue.push(firstEle.left);
            }
            if(firstEle.right){
                queue.push(firstEle.right);
            }
        }
    }

    min(){
        if(this.left === null){
            return this.val;
        }else{
            return this.left.min();
        }
    }

    max(){
        if(this.right === null){
            return this.val;
        }else{
            return this.right.max();
        }
    }

    height(){
        let queue = [this];
        let counter = 0;
        while(queue.length > 0){
            let tempStorage = [];
            for(let node of queue){
                if(node.left) tempStorage.push(node.left)
                if(node.right) tempStorage.push(node.right)
            }
            // while(queue.length !== 0){
            //     let node = queue.shift();
            //     if(node.left) tempStorage.push(node.left)
            //     if(node.right) tempStorage.push(node.right)
            // }
            queue = tempStorage
            counter++
        }
        return counter;
    }
}

const node = new BinarySearchTree(20);
node.add(8);
node.add(22);
node.add(4);
node.add(12);
node.add(21);
node.add(25);



const callbackFn = (val) => console.log(val)

console.log(node.height());
































/*
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
*/