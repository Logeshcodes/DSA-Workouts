class Queue{
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
    
    dequeue(value){
        this.items.pop()
    }
    
    display(){
        return this.items.toString();
    }
    
    peek(){
        return this.items[0]
    }
    
    reverse(){
        let arr = []
        for(let i=this.items.length-1 ; i>= 0 ; i--){
            arr.push(this.items[i])
        }
        return arr ;
    }
}

let queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.dequeue()

console.log(queue.peek())

console.log(queue.display())
console.log(queue.reverse())






