class Node{
    constructor(value){
        this.value = value ;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
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
            let listValues = "" ;

            while(curr){
                listValues += `${curr.value} `
                curr = curr.next ;
            }
            console.log(listValues)
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

    insert(value , index){

        let node = new Node(value)

        if(index === 0){
            this.prepend(value)
        }
        if(index === this.size){
            this.append(value)
        }
        else{

            let curr = this.head ;

            for(let i=0;i< index -1 ;i++){
                curr = curr.next 
            }
            node.next = curr.next 
            curr.next = node 

            this.size++ ;
        }
    }

    removeIndex(index){


        if(index < 0 || index > this.size ) return null;

        let removeValue ;

        if(index === 0){
            removeValue = this.head ;
            this.head = this.head.next ;
            
        }else{
            let curr = this.head ;

            for(let i=0;i< index-1;i++){
                curr = curr.next 
            }
            removeValue = curr.next ;

            curr.next = removeValue.next;
        }

        this.size-- ;
        return removeValue.value ;
    }

    removeValue(value){

        if(this.isEmpty()){
            return null ;
        }else{

            let removeElement ;

            let curr = this.head ;

            while(curr.next.value !== value){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = removeElement.next;

            this.size-- ;

            

        }
    }

    midElement(){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let slow = this.head ;
            let fast = this.head ;

            while(fast!== null && fast.next !== null){
                slow = slow.next ;
                fast = fast.next.next ;
            }

            return slow.value ;
        }
    }

    search(value){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;

            let i=0;

            while(curr){

                if(curr.value === value){
                    return i ;
                }
                curr = curr.next ;
                i++;
            }

            return -1 ;
        }
        
    }


    reverse(){

        

        let prev = null;

        let curr = this.head ;

        while(curr){
            let next = curr.next ;

            curr.next = prev ;

            prev = curr ;
            curr = next ;
        }
        this.head = prev;


    }


    removeDuplicate(){

        let curr = this.head ;

        while(curr && curr.next){

            if(curr.value === curr.next.value){

                curr.next = curr.next.next ;
                this.size-- ;
            }else{
                curr = curr.next ;
            }
        }
    }
}



const list = new LinkedList()

console.log(list.getSize());
console.log(list.isEmpty());


list.prepend(30)
list.prepend(20)
list.prepend(20)
list.prepend(10)

list.append(40)

list.insert(35,3)

console.log(list.midElement());

console.log(list.search(20));


list.print()


list.removeDuplicate()
list.reverse()
list.print()

console.log(list.getSize());
console.log(list.isEmpty());
