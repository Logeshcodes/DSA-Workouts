class Queue{
    constructor(){
        this.items = []
    }
    
    
    size(){
        return this.items.length ;
    }
    
    enqueue(value){
        this.items.push(value);
    }
    
    dequeue(value){
        this.items.shift()
    }
    
    peek(){
        return this.items[0]
    }
    
    display(){
        return this.items.toString()
    }
    
    reverse(){
        
        let arr = []
        
        for(let i=this.items.length-1 ; i>= 0  ; i--){
            arr.push(this.items[i])
        }
        
        return arr.toString();
    }
}


let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

queue.dequeue()

console.log(queue.peek())
console.log(queue.display())
console.log(queue.reverse())



