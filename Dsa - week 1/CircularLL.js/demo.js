class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;

    }
}

class CircularLL{
    constructor(){
        this.head = null;
        this.size = 0 ;
        
    }

    getSize(){
        return this.size ;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    append(value){

        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node ;
            this.head.next = this.head ;
        }else{
            this.head.next = node ;
            node.next = this.head
        }

        this.size++ ;
    }

    print(){
        if (this.isEmpty()) {
            return 0;
        } else {
            let curr = this.head;
            let list = "";
            let start = this.head;

            do {
                list += `${curr.value} `;
                curr = curr.next;
            } while (curr !== start);

            console.log(list.trim());  // Trim any trailing space
        }
    }

    isCircular(){
        if(this.isEmpty()){
            console.log("Its Empty");
            return
        } else {
            let slow = this.head 
            let fast = this.head
            while (fast && fast.next){
                    slow = slow.next;
                    fast = fast.next.next
                    if(slow === fast){
                        console.log('circular linkedList')
                        return
                    } 
            }
            console.log("Not circular linkedlist")
            return
        }
    }
}


let clist = new CircularLL() ;

clist.append(10)
clist.append(20)


clist.print()

clist.isCircular();

console.log(clist.getSize());
