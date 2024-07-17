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

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size ;
    }

    prepend(value){
        const node = new Node(value) ;

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
            return ;
        }else{

            let curr = this.head ;
            let listValues = '' ;

            while(curr){
                listValues += `${curr.value} ` ;
                curr = curr.next ;
            }
            console.log(listValues);

        }
    }

    append(value){

        const node = new Node(value) ;

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

        const node = new Node(value)

        if(index < 0 || index > this.size){
            return 
        }

        if(index === 0){
            return this.prepend(value)
        }
        if(index === this.size){
            return this.append(value)
        }
        else{

            let curr = this.head ;

            for(let i=0 ;i< index - 1;i++){
                curr = curr.next ;
            }
            node.next = curr.next ;
            curr.next = node ;
            this.size++ ;

        }
    }

    removeIndex(index){

        if(this.isEmpty()){
            return -1 ;
        }

        let removeElement ;
        
        if(index === 0 ){
            removeElement = this.head;
            this.head = this.head.next ;

            this.size-- ;

            return removeElement.value ;
        }
        
        else{

            let curr = this.head ;

            for(let i=0;i< index-1 ; i++){
                curr = curr.next ;
            }
            removeElement = curr.next ;
            curr.next = removeElement.next ;

            this.size-- ;

            return removeElement.value ;
        }


        
    }



    removeValue(value){

        if(this.isEmpty()){
            return -1
        }

        let removeElement ;

        if(this.head.value === value){
            removeElement = this.head ;
            this.head = this.head.next ;
            this.size--;
            return removeElement.value ;
        }else{

            let curr = this.head ;

            while(curr.next && curr.next.value !== value){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = removeElement.next ;
            this.size-- ;
            return removeElement.value ;

        }
    }

    search(value){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;
            let i =0 ;
            while(curr){
                if(curr.value === value){
                    return i;
                }
                curr = curr.next;
                i++ ;
            }
            return -1 ;

        }
    }



     reverse(){
            
        let prev = null ;
        let curr = this.head ;

        while(curr){
            let next = curr.next ;
            curr.next = prev;
            prev = curr ;
            curr = next ;
        }
        this.head = prev ;
     }



    midElement(){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;

            let size = this.size ;
            let mid = Math.floor(size/2);

            for(let i=0 ;i< mid;i++){
                curr = curr.next ;
            }
            return curr.value ;
        }
    }

    midElement2(){

        let slow = this.head ;
        let fast = this.head ;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next ;
        }

        return slow.value ;
    }

    removeDuplicate(){

        if(this.isEmpty()){
            return -1 ;
        }else{

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

    linkedlistToArray(){

        let arr = []

        let curr = this.head ;

        for(let i=0;i<this.size;i++){
            arr.push(curr.value)
            curr = curr.next ;
        }

        return arr ;
    }
}


function arrayToLinkedList(arr){

    const list2 = new LinkedList();

    for(let i=0 ;i< arr.length ; i++){
        list2.append(arr[i])
    }

    return list2 ;
}


const list = new LinkedList() ;


list.prepend(30);
list.prepend(20);
list.prepend(10);

list.append(40)

list.insert(5,0)
list.insert(50,5)
list.insert(25,3)

list.append(50)

console.log('Removed : ',list.removeIndex(0));
console.log('RemovedValue : ',list.removeValue(25));

console.log('search index : ' , list.search(50));

console.log('mid Element : ',list.midElement());
console.log('mid Element : ',list.midElement2());

list.removeDuplicate()


list.print()

let arr = list.linkedlistToArray()

console.log('\n');

console.log('Linkedlist to arr : ',arr)



let list2 = arrayToLinkedList(arr)

console.log('\n');

console.log('Array to Linkedlist :')

list2.print()

console.log('\n');

list2.reverse()

console.log('Reverse Linkedlist : ') 

list2.print()

console.log('\n');

console.log('Total size : ',list.getSize());