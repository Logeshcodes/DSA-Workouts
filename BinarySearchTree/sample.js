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
        let node = new Node(value);

        if(this.isEmpty()){
            this.root = node ;
        }else{
            this.insertNode(this.root , node);
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
    inOrder(root){

        if(root){
            
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){

        if(root){
            
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // Bfs

    levelOrder(){

        let queue = [] ;

        if(this.root){
            queue.push(this.root)
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


    min(root){
        if(root.left === null) return root.value;
        else{
            return this.min(root.left)
        }
    }

    max(root){
        if(root.right === null) return root.value ;
        else{
            return this.max(root.right)
        }
    }

    findNode(value , root){

        if(!root) return null ;

        if(root.value === value) return root ;
        else if(root.value > value){
            return this.findNode(value , root.left)
        }
        else if(root.value < value){
            return this.findNode(value , root.right)
        }
    }


    findDegree(node){

        let degree = 0 ;

        if(node.left) degree++ ;
        if(node.right) degree++ ;

        return degree ;
    }


    findHeight(node){

        if(!node) return -1 ;

        let leftHeight = this.findHeight(node.left)
        let rightHeight = this.findHeight(node.right)

        return 1 + Math.max(leftHeight ,rightHeight)
    }


    findDepth(node , root = this.root , currentDepth = 0){

        if(!node) return -1 ;

        if(root === node) return currentDepth ;

        else if(root.value > node.value) {
            return this.findDepth(node , root.left , currentDepth + 1 )
        }
        else if(root.value < node.value) {
            return this.findDepth(node , root.right , currentDepth + 1 )
        }
    }

}



let bst = new BinarySearchTree();


bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(17)

bst.preOrder(bst.root)

console.log('--------')

bst.levelOrder()

console.log('--------')


console.log('Max : ', bst.max(bst.root))
console.log('Min : ', bst.min(bst.root))

let node = bst.findNode(15 , bst.root)

console.log('Degree : ', bst.findDegree(node))
console.log('Height : ', bst.findHeight(node))
console.log('Depth : ', bst.findDepth(node))