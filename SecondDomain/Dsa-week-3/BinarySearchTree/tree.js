class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value ;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    isEmpty(){
        return this.root === null ;
    }
    
    insert(value){
        let node = new Node(value) ;
        
        if(this.isEmpty()){
            this.root = node ;
        }else{
            this.insertNode(node , this.root)
        }
    }
    
    insertNode(node , root ){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node ;
            }else{
                this.insertNode(node , root.left)
            }
        }else{
            if(root.right === null){
                root.right = node ;
            }else{
                this.insertNode(node , root.right)
            }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
           
            this.postOrder(root.left)
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    
    min(root){
        
        if(!root.left ){
            return root.value ;
        }else{
            return this.min(root.left)
        }
        
    }
    max(root){
        
        if(!root.right ){
            return root.value ;
        }else{
            return this.max(root.right)
        }
        
    }
    // bsf
    
   levelOrder(root){
       
       let queue = []
       
       if(root){
           queue.push(this.root) ;
           
       }
       
       
       while(queue.length){
           let curr = queue.shift();
           console.log(curr.value)
           
           if(curr.left){
               queue.push(curr.left)
           }
           if(curr.right){
               queue.push(curr.right)
           }
       }
   }
   
   search(root , value){
       if(!root){
           return false ;
       }else{
           if(root.value === value){
               return true ;
           } 
           else if (root.value > value) return this.search(root.left , value)
           else if (root.value < value){
           return this.search(root.right , value)
           }
       }
   }
   

    
    findNode(value , root = this.root){
        if(!root) return null ;
        if(root.value === value ) return root ;
        else if(root.value > value) {
            return this.findNode(value , root.left)
        }
        else if(root.value <  value) {
            return this.findNode(value , root.right)
        }
    }

    getDegree(node) {
        let degree = 0;
        if (node.left !== null) degree++;
        if (node.right !== null) degree++;
       
        return degree;
    }
    
}


let bst = new BinarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

const node = bst.findNode(10);
console.log('Degree : ',bst.getDegree(node))

bst.levelOrder(bst.root)



console.log('search : ' , bst.search(bst.root , 7))
console.log('min : ' , bst.min(bst.root))
console.log('max : ' , bst.max(bst.root))



