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
    
    //Add 
    
    insert(value){
        let node = new Node(value) ;
        
        if(this.isEmpty()){
            this.root = node ;
        }else{
            this.insertNode(this.root , node ) ;
        }
    }
    
    insertNode(root , node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node ;
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node ;
            }else{
                this.insertNode(root.right , node ) ;
            }
        }
    }
    
    // Display
    
    
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }        
    }
    inOrder(root){
        if(root){
            
            this.postOrder(root.left)
            console.log(root.value);
            this.postOrder(root.right)
        }        
    }
    postOrder(root){
        if(root){
            
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value);
        }        
    }
    
    // breath fs
    
    levelOrder(root){
        
        let queue = [];
        
        if(this.root){
            queue.push(this.root) ;
        }
        
        
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value) ;
            
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    // finding
    
    min(root = this.root){
        if(!root.left){
            return root.value ;
        }else{
            return this.min(root.left)
        }
    }
    
    max(root = this.root){
        if(!root.right){
            return root.value ;
        }else{
            return this.max(root.right)
        }
    }
    
    
    search(root , value){
        if(!root) return false ;
        
        if(root.value === value) return true ;
        else if(root.value > value) {
            return this.search(root.left , value)
        }else if(root.value < value){
            return this.search(root.right , value )
        }
    }
    
    
    findNode( value , root = this.root){
        if(!root) return null ;
        if(root.value === value) return root ;
        else if(root.value > value){
            return this.findNode(value , root.left)
        }else if(root.value < value){
            return this.findNode(value , root.right)
        }
    }
    
    findDegree(node){
        
        let degree = 0 ;
        if(node.left) degree++ ;
        if(node.right) degree++ ;
        
        return degree ;
    }
    
    findHeight(node= this.root){
        if(!node) return -1 ;
        const leftHeight = this.findHeight(node.left)
        const rightHeight = this.findHeight(node.right)
        return 1 + Math.max(leftHeight , rightHeight) ;
    }
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7);
bst.insert(12);
bst.insert(2);

// bst.preOrder(bst.root)

bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)

console.log(bst.search(bst.root , 10))

console.log('min : ', bst.min())
console.log('max : ', bst.max())

let node = bst.findNode(10);

console.log('Degree : ' ,bst.findDegree(node))
console.log('Height : ' ,bst.findHeight(10))



