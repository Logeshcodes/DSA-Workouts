class Node{
    constructor(value){
        this.next = null ;
        this.value = value
    }
}


class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }

    isEmpty(){
        return this.head === null ;
    }

    prepend(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
        }else{

            node.next = this.head ;
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
                curr = curr.next ;
            }

            curr.next = node ;
        }

        this.size++ ;
    }

    insert(value , index){

        if(index < 0 || index > this.size) return ;

        if(index === 0){
            this.prepend(value)
        }else if(index === this.size){
            this.append(value)
        }else{

            let node = new Node(value)

            let curr = this.head ;
            

            for(let i=0;i< index-1 ; i++){
                
                curr = curr.next ;
            }

            node.next = curr.next ;
            curr.next = node ;

            this.size++ ;
        }
    }


    removeIndex(index) {

        if(index < 0 || index > this.size) return ;

        else if(index === 0){
            this.head = this.head.next ;
            this.size-- ;
        }else{



            let curr = this.head ;
            let prev = null ;

            for(let i=0;i< index ; i++){
                prev = curr ;
                curr = curr.next ;
            }

            if(curr){
                if(!curr.next){
                    prev.next = null ;
                }else{
                    prev.next = curr.next ;
                }

                this.size-- ;

            }
        }
    }

    removeValue(value){

        if(this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
        }else{

            let curr = this.head ;
            let prev = null ;

            while(curr && curr.value!== value){
                prev = curr ;
                curr = curr.next ;
            }

            if(curr){
                if(!curr.next){
                    prev.next = null ;
                }else{
                    prev.next = curr.next ;
                }

                this.size-- ;
            }
        }
    }


    display(){

        let curr = this.head ;

        let listValues = '' ;


        while(curr){
            listValues += `${curr.value} ` ;
            curr = curr.next ;
        }

        return listValues ;
    }



    findDuplicates(){

        let set = new Set();
        let arr = [] ;

        let curr = this.head ;

        while(curr){

            if(set.has(curr.value)){
                arr.push(curr.value)
            }else{
                set.add(curr.value)
            }
            curr = curr.next ;
        }


        for(let i=0;i< arr.length ; i++){
            this.removeValue(arr[i])
        }
    }


    removeDuplicates(){

        let set = new Set();
        let duplicates = new Set();

        let curr = this.head ;

        while(curr){

            if(set.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                set.add(curr.value)
            }
            curr = curr.next ;
        }

        curr = this.head ;
        let prev = null ;

        while(curr){

            if(duplicates.has(curr.value)){

                if(prev === null){
                    this.head = this.head.next ;
                }else{

                    prev.next = curr.next ;
                }

                this.size-- ;

            }else{
                prev = curr ;
            }


            curr = curr.next ;
        }
    }


    toArray(){

        let arr = [];

        let curr = this.head ;

        while(curr){
            arr.push(curr.value)
            curr = curr.next ;
        }

        return arr ;
    }
}

let list =  new LinkedList();

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(5 , 0)
list.insert(55 , 6)
list.insert(25 , 3)


list.removeIndex(7)
list.removeValue(50)


list.append(50)
list.append(50)
list.append(50)

list.removeDuplicates()

console.log('/n')


console.log(list.display())

console.log(list.toArray())



function isPalindrome(str){

    let list = new LinkedList ;

    for(let i=0;i<str.length ; i++){
        list.prepend(str[i])
    }

    let res = list.display()

    return str === res ;
}

let str = 'madam'

console.log(isPalindrome(str))