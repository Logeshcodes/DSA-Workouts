class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}


class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    prepend(value){

        let node = new Node(value) ;

        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }

        this.size++ ;
    }

    print(){
        if(this.isEmpty()){
            console.log("list is Empty...")
        }else{
            let curr = this.head ;
            let listValue = "" ;

            while(curr){
                listValue += `${curr.value} `;
                curr = curr.next ;
            }
            console.log(listValue) ;
        }
    }

    append(value){
        let node = new Node(value);

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

    insert(index , value ){

        

        if(index < 0 || index > this.size ) return 0 ;

        if(index === 0){
            return this.prepend(value)
        }else if(index === this.size){
            return this.append(value)
        }else{

            let node = new Node(value)

            let curr = this.head ;

            for(let i=0;i<index-1 ;i++){
                curr = curr.next ;
            }

            
            node.next = curr.next ;
            curr.next = node ;

            this.size++ ;
        }
    }

    midElement(){

        let mid = Math.floor(this.size/2);

        let curr = this.head ;

        for(let i=0;i<mid;i++){
            curr = curr.next ;
        }
        return curr.value ;

    }

    removeValue(value){

        if(value === this.head.value){
            this.head = this.head.next ;
        }else{

            let curr = this.head ;
        }
    }
}



let list = new LinkedList()

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)


list.insert(5,60)
list.insert(3,25)


list.append

list.print()
console.log(list.midElement());

console.log(list.getSize());