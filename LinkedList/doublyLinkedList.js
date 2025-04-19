class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
        this.prev = null ;
    }
}


class DoublyLinkedList{

    constructor(){
        this.head = null ;
        this.tail = null ;
        this.size = 0 ;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    prepend(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = this.tail = node ;
        }else{
            
            node.next = this.head ;
            this.head.prev = node;
            this.head = node ;
             
        }
        this.size++ ;
    }

    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = this.tail = node ;
        }else{
            
            let curr = this.head ;

            while(curr.next){
                curr = curr.next ;
            }     

            curr.next = node ;
            node.prev = curr ;
        }
        this.size++ ;
    }



    printForward(){

        let curr = this.head ;

        let listValues = '';

        while(curr){

            listValues += `${curr.value} `;
            curr = curr.next ;
        }
        return listValues ;
    }
}

let dll = new DoublyLinkedList()

dll.prepend(50)
dll.prepend(40)
dll.prepend(30)
dll.prepend(20)
dll.prepend(10)

dll.append(60)
dll.append(70)

console.log(dll.printForward())