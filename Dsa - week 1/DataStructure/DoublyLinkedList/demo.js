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
        return this.size === 0;
    }

    getSize(){
        return this.size ;
    }

    prepend(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }
        else {
            this.head.prev = node ;
            node.next = this.head ;
            this.head = node ;
           
        }
        this.size++ ;
    }

    print(){

        if(this.isEmpty()){
            return 0 ;
        }else{

            let curr = this.head ;

            let listValues = '' ;

            while(curr){

                listValues += `${curr.value} `
                curr = curr.next ;
            }
            console.log(listValues);
        }
    }

    append(value){

        let node = new Node(value) ;

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }else{

            this.tail.next = node ;
            node.prev = this.tail ;
            this.tail = node ;
        }

        this.size++ ;
    }


    reverse(){

        if(this.isEmpty()){
            return 0 ;
        }else{

            let curr = this.tail ;

            let str = '' ;

            while(curr){

                str += `${curr.value} `;
                curr = curr.prev ;
            }

            console.log(str);
        }
    }
}





let dlist = new DoublyLinkedList()

dlist.prepend(30)
dlist.prepend(20)
dlist.prepend(10)

dlist.append(40)
dlist.append(50)

dlist.print()
dlist.reverse()

console.log(dlist.getSize())