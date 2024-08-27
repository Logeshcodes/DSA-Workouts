class Node{
    constructor(value){
        this.value = value ;
        this.left = null ;
        this.right = null ;
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
            this.insertNode(this.root , newNode ) ;
        }
    }

    insertNode(root , newNode){
        
        if(root.value > newNode.value){
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

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    close(root , value ){
        if(!root.right){
            return this.root.value ;
        }else{
            return this.close(root.right)
        }
    }

    // mistake method

    closest(root , value ){
        if(root.value === value){
            return value ;
        }
        else if(value < root.value){
            return this.closest(root.right , value)
        }
    }
}




let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log("close :",bst.close( bst.root , 15));
console.log("closest :",bst.closest( bst.root , 14));


bst.postOrder(bst.root)