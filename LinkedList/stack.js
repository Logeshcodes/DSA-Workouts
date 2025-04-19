class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    isEmpty(){

        return this.size === 0 ;
    }

    push(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            node.next = this.head ;
            this.head = node ;
        }
        this.size++ ;
    }

    pop(){
        if(this.isEmpty()){
            return null ;
        }else{
            this.head = this.head.next ;
            this.size-- ;
        }
    }

    peek(){
        return this.head ? this.head.value : null ;
    }

    print(){

        let curr = this.head ;

        let listValues = '';

        while(curr){
            listValues+= `${curr.value} `;
            curr = curr.next ;
        }

        return listValues ;
    }
}



let stack = new LinkedList();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()

console.log(stack.peek())
console.log(stack.print())