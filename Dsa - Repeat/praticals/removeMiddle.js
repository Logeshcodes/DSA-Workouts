class Node{
    constructor(value){
        this.value = value 
        this.next = null ;
    }
}

class Linkedlist{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    getSize(){
        return this.size ;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }

        this.size++;
    }

    print(){

        if(this.isEmpty()){
            console.log("Empty");
        }else{

            let curr = this.head ;

            let listValues = '';

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
            console.log('Empty...');
        }else{

            let curr = this.head ;

            while(curr.next){
                curr = curr.next ;
            }
            curr.next = node ;
        }

        this.size++ ;
    }

    midElement(){

        let size = Math.floor(this.size/2);

        let curr = this.head ;

        for(let i=0;i<size ; i++){
            curr = curr.next ;
        }

        console.log(curr.value);
        return this.removeValue(curr.value);
    }


    removeValue(value){

        if(value === this.head.value){
            this.head = this.head.next ;

            this.size-- ;
            return value ;
        }else{

            let curr = this.head ;

            let removeElement 

            while(curr.next && curr.next.value !== value){
                curr = curr.next 
            }

            if(curr.next){
                removeElement = curr.next 
                curr.next = removeElement.next ;
                this.size--

                return removeElement.value ;
            }
            return null ;
        }
    }
}


let list = new Linkedlist()

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(60)
list.append(70)

list.midElement()

list.print()

console.log(list.getSize());