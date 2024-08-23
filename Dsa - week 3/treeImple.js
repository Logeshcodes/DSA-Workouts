class Node{
    constructor(value){
        this.left = null ;
        this.right = null ;
        this.value = value ;
    }
}

class BinarySearchTree{
    constructor(){
        this.root =  null ;
    }
    
    isEmpty(){
        return this.root === null ;
    }
    
    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode ;
        }else{
            this.insertNode(this.root , newNode)
        }
    }
    
    insertNode(root , newNode){
        
        if(root.value > newNode.value ){
            if(root.left === null){
                root.left = newNode ;
            }else{
                this.insertNode(root.left , newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode ;
            }else{
                this.insertNode(root.right , newNode)
            }
        }
    }
    
    
    
    search(root , value ){
        if(!root){
            return false ;
        }else{
            if(root.value === value){
                return true ;
            }else if(root.value > value){
                return this.search(root.left , value )
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
            console.log(root.value )
            this.inOrder(root.right)
        }
    }
    
    postValue(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    levelOrder(){
        let queue = []
        
        queue.push(this.root)
        
        
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
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
}



let bst = new BinarySearchTree()


console.log(bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root , 10))

console.log("min value : ", bst.min(bst.root))
console.log("max value : ", bst.max(bst.root))

// bst.preOrder(bst.root)

bst.levelOrder()