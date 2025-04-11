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

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head;
            this.head = node ;
        }
        this.size++ ;
    }

    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            let curr = this.head ;

            while(curr.next){
                curr  = curr.next ;
            }
            curr.next = node ;
        }
        this.size++ ;
    }

    insert(value , index){

        if( index < 0 || index > this.size) return ;

        if(index === 0){
            this.prepend(value);
        }else if( index === this.size){
            this.append(value);
        }else{

            let curr =this.head ;
            let node = new Node(value)

            for( let i=0 ; i< index -1 ; i++){
                curr =curr.next ;
            }

            node.next = curr.next ;
            curr.next = node ;

            this.size++ ;
        }
    }

    removeByValue(value){

        if (!this.head) return;

        if(this.head.value === value){
            this.head = this.head.next ;
            this.size--;
            return ;
        }

        let curr = this.head ;
        let prev = null ;

        while( curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
    }

    removeByIndex(index){

        if(index < 0 || index > this.size) return ;

        if(index === 0){
            this.head = this.head.next ;
            this.size--;
            return ;
        }

        let curr = this.head ;
        let prev = null ;

        for(let i=0;i < index ; i++){
            prev = curr ;
            curr = curr.next ;
        }

        if(curr){
            prev.next = curr.next;
            this.size--;
        }

    }


    midElement(){

        let slow = this.head ;
        let fast = this.head ;

        while( fast && fast.next){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        return slow.value ;
    }

    reverse(){

        let curr = this.head ;
        let prev = null ;

        while(curr){
            let next = curr.next ;
            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }
        this.head = prev ;
    }

    print(){

        let listValues = '';
        let curr  =this.head ;

        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next ;
        }
        return listValues ;
    }

    display(){

        let listValues = '';
        let curr  =this.head ;

        while(curr){
            listValues += `${curr.value}`;
            curr = curr.next ;
        }
        return listValues ;
    }


    findDuplicates(){

        let set = new Set();
        let duplicates = new Set();

        let curr = this.head ;

        while(curr){

            if(set.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                set.add(curr.value);
            }

            curr = curr.next ;
        }

        return [...duplicates]

    }

    removeDuplicates(){
        let set = new Set();
        let curr = this.head ;
        let prev = null;
    
        while(curr){
            if(set.has(curr.value)){
                prev.next = curr.next;
                this.size--;
            }else{
                set.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }
    

    removeAllDuplicates(){

        let set = new Set();
        let duplicates = new Set();

        let curr = this.head ;

        while(curr){

            if(set.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                set.add(curr.value);
            }

            curr = curr.next ;
        }

        curr = this.head ;
        let prev = null ;

        while(curr){

            if(duplicates.has(curr.value)){

                if(prev === null){
                    this.head = this.head.next ;
                    this.size-- ;
                }else{
                    prev.next = curr.next ;
                    this.size-- ;
                }

            }else{
                prev = curr ;
            }

            curr =curr.next ;
        }

    }


    search(value){

        if(this.head.value === value){
            return true ;
        }

        let curr = this.head ;

        while(curr){

            if( curr.value === value){
                return true ;
            }
            curr = curr.next ;
        }
        return false ;
    }

    sorting(){

        if(!this.head && !this.head.next) return ;
    
        let curr = this.head ;

            while(curr.next){
                if( curr.value > curr.next.value){
                    let temp = curr.value ;
                    curr.value = curr.next.value ;
                    curr.next.value =temp ;
                }
                curr = curr.next ;
            }

    }

    toArray(){

        let arr = [];
        let curr = this.head ;

        while(curr){
            arr.push(curr.value);
            curr =curr.next;
        }
        return arr ;
    }


    makeCircular(){

        let curr = this.head ;

        while(curr.next){
            curr = curr.next ;
        }

        curr.next = this.head ;
    }

    checkCircular(){

        let slow = this.head ;
        let fast = this.head ;


        while(fast && fast.next){

            slow = slow.next ;
            fast = fast.next.next ;

            if(slow === fast){
                return true ;
            }
        }
        return false ;
    }

}


let list = new LinkedList();

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(52)
list.prepend(10)

list.append(60)
list.append(70)
list.append(70)
list.append(70)
list.append(80)
list.append(80)
list.append(80)

list.insert( 25 , 2);

list.removeByValue(25);
list.removeByIndex(2);

console.log(list.midElement())

console.log(list.print())
list.reverse()
list.reverse()
console.log(list.print())


console.log(list.findDuplicates())
list.removeDuplicates()

list.removeAllDuplicates()

console.log(list.print())
console.log(list.getSize())
console.log(list.search(20))

list.sorting()

console.log(list.print())


let arr = [ 1 , 2, 3 ,4 , 5]

function arrToLinkedList(arr){

    let list = new LinkedList();

    for(let i=0;i< arr.length ; i++){
        list.append(arr[i])
    }

    return list.print()

}

console.log(arrToLinkedList(arr))


function isPalindrome(str){

    let list = new LinkedList();

    for(let i=0;i< str.length ; i++){
        list.prepend(str[i])
    }

    let res = list.display()

    return res === str ;
}

let str = 'madam'

console.log(isPalindrome(str))


console.log(list.checkCircular())
list.makeCircular()
console.log(list.checkCircular())