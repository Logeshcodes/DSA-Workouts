class Stack {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0 ;
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

let stack =  new Stack 

stack.enqueue(10)
stack.enqueue(20)
stack.enqueue(30)
stack.enqueue(40)
stack.enqueue(50)

stack.dequeue()

console.log(stack.peek())

stack.print()