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

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size===0 ;
    }

    append(value){

        let node = new Node(value) ;

        if(this.isEmpty()){
            this.head = node ;

        }else{

            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
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
           curr.next = node 
        }

        this.size++ ;
    }

    print(){

        if(this.isEmpty()){
            console.log("Empty")
        }else{

            let curr = this.head ;

            let listValues = '';

            while(curr){

                listValues += `${curr.value} `;
                curr = curr.next 
            }

            console.log(listValues)
        }
    }


    midValue(){

        let mid = Math.floor(this.size/2)

        let curr = this.head ;

        for(let i=0 ;i< mid ;i++){
            curr = curr.next 
        }

        console.log(curr.value) ;
    }

    insert(value , index ){

        let node = new Node(value)

        if(index === 0){
            return this.append(value)
        }else if(index === this.size){
            return this.prepend(value)
        }
    }

    removeIndex(index){

        if(index < 0 || index > this.size){
            console.log("wrong index")
        }else{


            let curr = this.head ;

            let removeElement ;

            for(let i=0;i< index-1 ;i++){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = removeElement.next 
        }

        this.size--;
    }


    removeValue(value){

        if(this.head.value === value){
            this.head = this.head.next
        }
        this.size-- 
    }
}

let list = new LinkedList()

console.log(list.getSize());

list.append(30)
list.append(20)
list.append(10)

list.prepend(40)
list.prepend(50)

list.insert(2,0)
list.insert(55 ,6)

list.removeIndex(3)

list.midValue()

list.print()

list.removeValue(2)

console.log(list.getSize());