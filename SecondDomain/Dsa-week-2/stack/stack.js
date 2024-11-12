class Stack{
    constructor(){
        this.items = []
    }
    
    isEmpty(){
        return this.items.length === 0 ;
    }
    
    size(){
        return this.items.length ;
    }
    
    push(value){
        this.items.push(value)
    }
    
    pop(value){
        this.items.pop()
    }
    
    display(){
        return this.items.toString();
    }
    
    peek(){
        return this.items[this.size()-1]
    }
    
    reverse(){
        let arr = []
        for(let i=this.items.length-1 ; i>= 0 ; i--){
            arr.push(this.items[i])
        }
        return arr ;
    }
}

let stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.pop()

console.log(stack.reverse())

console.log(stack.peek())
console.log(stack.display())




