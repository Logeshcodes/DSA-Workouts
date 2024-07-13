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


    removeFrom(index){

        if(index < 0 || index >= this.size){
            return null ;
        }
        let removeElement ;
        if(index === 0){
            removeElement = this.head ;
            this.head = this.head.next ;
        }else{

            let curr = this.head ;

            for(let i=0;i< index -1;i++){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = removeElement.next ;


        }
        this.size--
        return removeElement.value ;
       
    }

    removeValue(value){

        if(this.isEmpty()){
            return null;
        }
        
        if(this.head.value === value ){
        
            this.head = this.head.next ;
            this.size-- ;
            return value ;
        }
        else{
            let removeElement;

            let curr = this.head ;

            while(curr.next && curr.next.value !== value){
                curr = curr.next ;
            }

            if(curr.next){
                removeElement = curr.next ;
                curr.next = removeElement.next ;
                this.size--
                return value ;

            }
            return null ;

        }
    }


    search(value){

        if(this.isEmpty()){
            return -1 ;
        }

        let i=0;
        let curr = this.head ;

        while(curr){
            if(curr.value === value){
                return i ;
            }
            curr = curr.next ;
            i++ ;
        }
        return -1 ;
    }

    reverse(){
        let prev = null ;
        let curr = this.head ;
        while(curr){
            let next = curr.next ;

            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }
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





console.log(list.search(0))




console.log(list.getSize());