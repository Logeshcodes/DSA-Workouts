class Node{
    constructor(value){
        this.left = null ;
        this.right = null ;
        this.value = value ;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null ;
    }

    isEmpty(){
        return this.root === null ;
    }

    insert(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root , node)
        }
    }

    insertNode(root , node){

        if(root.value > node.value){
            if(root.left === null){
                root.left = node ;
            }else{
                this.insertNode(root.left , node )
            }
        }else{
            if(root.right === null){
                root.right = node ;
            }else{
                this.insertNode(root.right , node)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


    levelOrder(){

        let queue = [];

        if(this.root){
            queue.push(this.root);
        }

        while(queue.length){

            let curr = queue.shift()
            console.log(curr.value);

            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}


let bst = new BinarySearchTree();

bst.insert(15)
bst.insert(5)
bst.insert(10)
bst.insert(3)
bst.insert(7)

// bst.preOrder(bst.root);

bst.levelOrder()