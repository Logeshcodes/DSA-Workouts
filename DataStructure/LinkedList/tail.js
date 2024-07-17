class Node {
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null ;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    getSize(){
        return this.size ;
    }

    prepend(value){

        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
    }


    print(){

        if(this.isEmpty()){
            return 
        }else{
            let curr = this.head ;

            let listValues = '' ;

            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next ; 
            }

            console.log(listValues);
        }
    }


    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
            this.tail = node ;
        }else{

            this.tail.next = node ;
            this.tail = node ;

        }

        this.size++ ;
    }

    insert(value , index){

        const node = new Node(value);

        if(index < 0 || index > this.size ){
            return 
        }

        if(index=== 0){
            this.prepend(value);
        }
        else if(index === this.size){
            this.append(value)
        }else{

            let curr = this.head ;

            for(let i=0;i< index-1 ;i++){
                curr = curr.next ;
            }

            node.next = curr.next ;
            curr.next = node ;

            this.size++ ;

        }
    }

    removeFromStart(){

        let removeElement ;

        if(this.isEmpty()){
            return -1 ;
        }else{

            removeElement = this.head ;
            this.head = this.head.next ;
            this.size-- ;
            return removeElement.value ;
        }
    }

    removeFromEnd(){

        let removeElement ;

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;

            while(curr.next.next !== null){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = null ;
            this.tail = curr ;
            this.size-- ;
            return removeElement.value ;

        }
    }
}


let list = new LinkedList




list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(5 , 0)
list.insert(55 , 6)

list.insert(35 ,4)

console.log(list.removeFromStart());
console.log(list.removeFromEnd());

list.print() ;



console.log(list.getSize());
