class Node{
    constructor(value){
        this.value = value ;
        this.next = null;
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

        let node =new Node(value) ;

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

            let listValues = '';

            while(curr){
                listValues += `${curr.value} ` ;

                curr = curr.next ;
            }


            console.log(listValues);
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

            curr.next = node ;
        }

        this.size++ ;
    }


    insert(value , index){

        

        if(index < 0 || index > this.size) return ;

        if(index === 0){
            return this.prepend(value)
        }else if(index === this.size){
            return this.append(value)
        }else{

            let node = new Node(value);

            let curr = this.head ;


            for(let i=0 ;i<index-1 ;i++){
                curr = curr.next
            }

            node.next = curr.next ;
            curr.next = node ;


            this.size++ ;

        }
    }


    search(value){

        if(this.isEmpty()){
            return -1 ;
        }else{

            let curr = this.head ;

            let i= 0 ;

            while(curr){

                if(curr.value === value )
                    return i ;

                curr = curr.next ;
                i++ ;
            }

            return -1 ;
        }
    }

    removeIndex(index){

        if(index < 0 || index > this.size){
            return ;
        }else{

            let curr = this.head ;

            let removeElement 

            for(let i=0;i<index-1 ; i++){
                curr = curr.next ;
            }

            removeElement = curr.next ;
            curr.next = removeElement.next ;

            this.size-- ;

            return removeElement.value ;

        }
    }


    removeValue(value){

        if(this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
        }else{

            let curr = this.head ;

            let removeElement 

            while(curr.next && curr.next.value !== value){
                curr = curr.next ;
            }
           if(curr.next){

                removeElement = curr.next ;
                curr.next = removeElement.next;

                this.size-- ;
                return removeElement.value ;
           }
        }
    }


    midElement(){

        let mid = Math.floor(this.size / 2) ;

        let curr = this.head ;

        for(let i=0;i< mid;i++){
            curr = curr.next
        }

        return this.removeValue(curr.value);
    }



    reverse(){

        let prev = null ;

        let curr = this.head ;

        while(curr){

            let next = curr.next ;
            curr.next = prev;
            prev = curr;
            curr = next ;
        }
        this.head = prev ;
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

    linkedToArray(){

        let arr = []

        let curr = this.head ;

        while(curr){
            arr.push(curr.value)
            curr = curr.next;
        }


        return arr ;
    }
}


function arrayToLinkedList(arr){

    let list2 = new LinkedList()

    for(let i=0;i< arr.length ; i++){
        list2.append(arr[i])
    }

    return list2;
}


let list = new LinkedList()

list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)

list.insert(15,1)

console.log(list.search(11));

console.log(list.removeValue(30));
console.log(list.removeIndex(1));

list.append(50)
list.append(60)
list.append(70)
list.append(80)
list.append(80)

list.midElement()

list.print()

list.reverse()

list.removeDuplicate()

list.print()


console.log(list.linkedToArray());


let arr = [1,2,3,4,5]

let list2 = arrayToLinkedList(arr);

list2.print()


console.log(list.getSize());