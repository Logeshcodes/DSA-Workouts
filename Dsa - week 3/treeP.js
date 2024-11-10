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
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode ;
        }else{
            this.insertNode(this.root , newNode) ;
        }
    }
    
    insertNode(root , newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode ;
            }else{
                this.insertNode(root.left , newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right , newNode)
            }
        }
    }
    
    search(root , value){
        if(!root){
            return false ;
        }else{
            if(root.value === value ){
                return true ;
            }else if(root.value > value) {
                return this.search(root.left , value)
            }else if(root.value < value){
                return this.search(root.right , value )
            }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }
    
    max(root){
        if(!root.right){
            return root.value ;
        }else{
            return this.max(root.right)
        }
    }
    // bfs
    levelOrder(){
        
        let queue = []
        
        queue.push(this.root);
        
        while(queue.length){
            let curr = queue.shift()  // dequeue
            console.log(curr.value)
            
            if(curr.left){
                queue.push(curr.left) // enqueue
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    delete(value){
        this.root = this.deleteNode(this.root , value )
    }
    
    deleteNode(root , value){
        if(root.value > value){
            root.left = this.deleteNode(root.left , value )
        }else if (root.value < value){
            root.right = this.deleteNode(root.right , value)
        }else{
            
            if(!root.left && ! root.right){
                return null ;
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left;
            }else{
                let minValue = this.min(root.right);
                root.value = minValue ;
                root.right = this.deleteNode(root.right , minValue)
            }
        }
        return root ;
    }
    
     validateBST(root , min=null , max = null){

        if(!root) return true ;

        if((min !== null && min >= root.value) || (max!== null && max <= root.value)) return false ;

        return (
            this.validateBST(root.left , min , root.value) &&
            this.validateBST(root.right , root.value , max)
        )
    }
    
}



let bst = new BinarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

bst.delete(3)

console.log(bst.search(bst.root , 10))

bst.inOrder(bst.root);

console.log("min value :", bst.min(bst.root))
console.log("max value :", bst.max(bst.root))

console.log(bst.validateBST())