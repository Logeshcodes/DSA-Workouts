class Node{
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class LinkedList{
    
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    isEmpty(){
        return this.size === 0;
    }
    
    enqueue(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }
        this.size++ ;
    }

    dequeue(){

        if(this.isEmpty()){
            return null ;
        }else{
            

            let curr = this.head;
            let prev = null ;
            while(curr.next){
                prev = curr ;
                curr = curr.next ;
            }

            if(curr){
                prev.next  = null ;
            }
        }
        this.size--;
    }

    peek(){
       
        let curr = this.head;
            while(curr.next){
                curr = curr.next ;
            }
            return curr.value ;
            
    }

    print(){

        let curr = this.head ;

        let listValues = '';

        while(curr){
            listValues+= `${curr.value} `
            curr = curr.next ;
        }

        return listValues;
    }
}

let list = new LinkedList();

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)

list.dequeue()

console.log(list.peek());

console.log(list.print())
