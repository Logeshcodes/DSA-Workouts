class Queue {
    constructor(){
        this.items = []
    }

    size(){
        return this.items.length ;
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    print(){
        console.log(this.items.toString())
    }
}


let queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.dequeue()

console.log(queue.peek())

queue.print()