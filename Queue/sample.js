class Queue{
    constructor(){
        this.items = []
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

    display(){
        return this.items.toString()
    }
}

let queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.dequeue()

console.log(queue.peek())

console.log(queue.display())

