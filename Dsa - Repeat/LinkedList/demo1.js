class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList {
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }


    getSize(){
        return this.size ;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    append(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }
        else{

            node.next = this.head ;
            this.head = node 
        }

        this.size++ ;
    }

   


    print(){

        let curr = this.head ;

        let listValues = '';

        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next ;
        }

        console.log(listValues)
    }



    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }else{
            let curr = this.head ;

            while(curr.next){
                curr = curr.next ;
            }

            curr.next = node ;
        }
        this.size++ ;
    }

    insert(value,index){

        let node = new Node(value);

        if(index ===0){
            return this.append(value)
        }else if(index === this.append.size){
            return this.prepend(value)
        }else{

            let curr = this.head ;

            for(let i=0;i< index-1;i++){
                curr = curr.next ;
            }
            node.next = curr.next;
            curr.next = node ;
        }


    }
}



const list = new LinkedList()

console.log(list.getSize());

list.append(30)
list.append(20)
list.append(10)


list.prepend(40)

list.insert(23,2)

list.print()

console.log(list.getSize());