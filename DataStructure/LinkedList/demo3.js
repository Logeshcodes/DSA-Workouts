class Node{
    constructor(value){
        this.value =value ;
        this.next = null ;
    }
}

class LinkedList{
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

    prepend(value){

        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }
        else{
            node.next = this.head ;

            this.head = node ;
        }
        this.size++
    }

    print(){

        const node = new Node()

        if(this.isEmpty()){
            console.log("list is empty");
        }
        else{
            let curr = this.head ;

            let listValues = ''

            while(curr){
                listValues += `${curr.value} `
                curr = curr.next ;
            }
            console.log(listValues)
        }
    }

    append(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }else{

            let curr = this.head ;

            while(curr.next){
                curr = curr.next ;
            }
            node.next = curr.next ;
            curr.next = node ;
        }

        this.size++ ;

    }

    insert(value , index ){

        if(index === 0){
            this.prepend(value)
        }
        if(index === this.size){
            this.append(value)
        }
        else{

            let node = new Node(value)

            let curr = this.head ;

            for(let i=0;i< index -1 ;i++){
                curr =curr.next
            }

            node.next = curr.next ;
            curr.next = node ;


        }
        this.size++
    }
}


let list = new LinkedList()


console.log(list.getSize());
console.log(list.isEmpty());


list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(45,4)

list.print()


console.log(list.getSize());