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
        return this.size ;
    }

    isEmpty(){
        return this.size === 0 ;
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
        let node = new Node(value);

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



    
    insert(value , index){

        if(index < 0 || index > this.size){
            return ;
        }
        if(index === 0){
            return this.prepend(value)
        }
        if(this.size === index){
            return this.append(value)
        }else{

            let node = new Node(value)

            let curr = this.head ;

            for(let i=0;i< index-1 ;i++){
                curr = curr.next
            }

            node.next = curr.next 
            curr.next = node

            this.size++ ;
        }
    }

    removeIndex(index){
        if(index < 0 || index >= this.size){
            return null;
        }

        let removeNode ;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next 
        }
        else{

            let curr =this.head ;

            for(let i=0;i< index -1 ;i++){
                curr = curr.next ;

            }
            removeNode = curr.next
            curr.next = removeNode.next ;

        }
        this.size-- ;
        console.log(removeNode.value)
    }


    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
            return value ;
            
        }
        else{

            let curr = this.head ;
            let removeNode ;

            while( curr.next && curr.next.value !== value ){
                curr = curr.next ;
            }
           if(curr.next){
            removeNode = curr.next ;
            curr.next = removeNode.next ;
            this.size-- ;
            return removeNode.value ;
           }
           return null;

        }
        
        
    }

    search(value){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;

            let i = 0 ;

            while(curr){
                if(curr.value === value){
                    return i ;
                }
                curr = curr.next ;
                i++ ;
            }
            return -1;
        }


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
       this.head = prev ;
    }

    midElement(){

        if(this.isEmpty()){
            return -1 ;
        }
        else{

            let size = this.size ;
            let mid = Math.floor(size/2)

            let curr = this.head ;
            
            for(let i=0;i<mid ; i++){
                curr = curr.next ;
            }
            return this.removeValue(curr.value) ;
        }
    }


    linkedListToArray(){

        let arr = [];
    
        let curr = this.head ;
    
    
        while(curr){
            arr.push(curr.value);
            curr = curr.next ;
        }
    
        return arr ;
    
    }
    
    



    
}

function arrayToLinkedList(arr){

    const Linkedlist = new LinkedList()

        for(let i=0;i<arr.length ;i++){
            Linkedlist.append(arr[i])
        }

        return Linkedlist ;
}


let list = new LinkedList()


console.log(list.getSize())
console.log(list.isEmpty())

list.prepend(30)
list.prepend(40)
list.prepend(20)
list.prepend(10)


list.append(60)
list.append(60)
list.append(70)

list.insert(35,3)

list.removeIndex(2)

console.log(list.removeValue(39));

list.print()

list.reverse()

console.log("m : ",list.midElement())



list.print()


let arr = [1,2,3,4,5]


let list2 = arrayToLinkedList(arr);

list2.print()


let arr2 = list.linkedListToArray()

console.log(arr2);


console.log(list.getSize())