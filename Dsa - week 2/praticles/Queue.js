class Queue{
    constructor(){
        this.items = [] ;
    }

    isEmpty(){
        return this.items.length === 0 ;
    }

    size(){
        return this.items.length ;
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0] ;
        }
        return null ;
    }

    print(){
        console.log(this.items.toString());
        
    }
}



const queue = new Queue()

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.dequeue());

queue.print();

console.log(queue.size());


