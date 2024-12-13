class Stack{
    constructor(){
        this.items = []
    }
    
    
    size(){
        return this.items.length ;
    }
    
    push(value){
        this.items.push(value);
    }
    
    pop(value){
        this.items.pop()
    }
    
    peek(){
        return this.items[this.items.length-1]
    }
    
    display(){
        return this.items.join(' ') // also use join() => instead of toString()
    }
    
    reverse(){
        
        let arr = []
        
        for(let i=this.items.length-1 ; i>= 0  ; i--){
            arr.push(this.items[i])
        }
        
        return arr.toString();
    }
}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)

stack.pop()

console.log(stack.peek())
console.log(stack.display())



console.log(stack.reverse())








