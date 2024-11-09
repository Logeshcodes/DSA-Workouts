class Node{
    constructor(value){
        this.value = value ;
        this.next =  null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }
    
    getSize(){
        return this.size 
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    prepend(value){
        let node = new Node(value);
        
        if(this.isEmpty()){
            this.head = node ;
        }else {
            node.next = this.head ;
            this.head = node ;
        }
        this.size++ ;
    }
    
    
    append(value){
        let node = new Node(value);
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            let curr = this.head ;
        
        while(curr.next){
            curr = curr.next ;
        }
        curr.next =  node ;
        }
        
        this.size++ ;
    }
    
    print(){
        
        let curr = this.head ;
        
        let listValues = '' ;
        
        while(curr){
            
            listValues += `${curr.value} `
            curr = curr.next ;
        }
        
        
        return listValues ;
    }
    
    reverse(){
        
        let curr = this.head ;
        let prev = null ;
        
        while(curr){
            let next = curr.next ;
            curr.next = prev ;
            prev = curr ;
            curr = next ;
        }
        this.head = prev
    }
    
    insert(value , index){
        
        if(index < 0 || index > this.size) return ;
        if(index === 0){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }
        else{
            
            let node = new Node(value) ;
            
            let curr = this.head ;
            
            for(let i=0;i< index-1 ; i++){
                curr = curr.next ;
            }
            node.next = curr.next ;
            
            curr.next = node ;
            
            this.size++ ;
        }
        
    }
    
    midElement(){
        let slow = this.head ;
        let fast = this.head ;
        
        while(fast !== null && fast.next!== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        
        
        
        this.removeValue(slow.value)
    }
    
    removeValue(value){
        
        if(this.isEmpty()) return ;
        
        if(this.head.value ===  value){
            this.head = this.head.next ;
            this.size-- ;
        }
        
        let curr = this.head ;
        
        let prev = null ;
        
        while(curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }
        
        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
    }
    
    linkedListToArray(){
         
         let curr = this.head ;
         
         let arr = [];
         
         while(curr){
             arr.push(curr.value);
             curr = curr.next ;
         }
         
         
         console.log(arr)
    }
    
}

let arr = [1,2,3,4,5]


function arrayTOLinkedList(arr){
    
    let list2 = new LinkedList();
    
    for(let i=0;i< arr.length ;i++){
        list2.append(arr[i])
    }
    return list2.print() ;
}

console.log(arrayTOLinkedList(arr))

let list = new LinkedList();

list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.append(50)

list.insert(5 , 5)
list.insert(51 , 3)

list.midElement()

list.reverse()

list.removeValue(5)

console.log(list.print())

list.linkedListToArray()




