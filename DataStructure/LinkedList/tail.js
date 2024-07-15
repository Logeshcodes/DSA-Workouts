class Node{
    constructor(value){
       this.value = value ;
       this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.tail = null ;
        this.size = 0 ;
    }

    getSize(){
        return this.size 
    }

    isEmpty(){
        return this.size === 0 ;
    }

    print(){


        if(this.isEmpty()){
            console.log("List is Empty...");
        }else{
            let listValue = ''
            let curr = this.head

            while(curr){
                listValue += `${curr.value} `;
                curr = curr.next
            }

            console.log(listValue)
        }
    }


    append(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }else{
            this.tail.next = node
            this.tail = node ;
        }

        this.size++ ;
    }
}

let list = new LinkedList ()


list.append(20)
list.append(80)
list.append(90)

console.log(list.getSize())

list.print()
