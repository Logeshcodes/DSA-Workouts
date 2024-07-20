class Node{
    constructor(value){
        this.value = value ;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head =null ;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0 ;
    }
    
    getSize(){
        return this.size ;
    }
    
    prepend(value){
        
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            node.next = this.head ;
            this.head = node ;
        }
        
        this.size++ ;
    }
    
    print(){
        
        let listValues = "";
        
        if(this.isEmpty()){
            console.log("List Empty")
        }else{
            let curr = this.head ;
            
            
            
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next ;
            }
            console.log(listValues);
        }
    }
    
    append(value){
        
        let node = new Node(value)
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            let curr = this.head ;
            
            while(curr.next){
                curr = curr.next ;
            }
            curr.next = node ;
        }
        
        this.size++ ;
    }
    
    
    removeValue(value){
        
        if(this.isEmpty()){
            console.log("Empty...")
        }
        else{
            
            let removeElement ;
            
            let curr = this.head ;
            
            while(curr.next && curr.next.value !== value){
                
                curr = curr.next ;
                
            }
            
            removeElement = curr.next  ;
            curr.next = removeElement.next ;
            this.size-- ;
            return removeElement.value ;
        }
        
    }
    
    reverse(){
        let prev = null ;
        let curr = this.head ;
        
        while(curr){
            let next = curr.next ;
            
            curr.next = prev;
            prev = curr ;
            curr =next ;
        }
        this.head = prev ;
        
       
    }
    
    removeIndex(index){
        
        if(index < 0 || index > this.size){
            return -1 ;
        }
        if(index === 0){
            this.head = this.head.next ;
        }else{
            
            let removeElement ;
            let curr = this.head ;
            
            for(let i=0;i< index-1;i++){
                curr =curr.next ;
            }
            
            removeElement = curr.next ;
            curr.next = removeElement.next 
            this.size-- ;
            
            return removeElement.value ;
            
        }
        
        this.size--;
    }
    
    
    midElement(){
        
        let curr = this.head ;
        
        let size = this.size ;
        
        let mid = Math.floor(size/2);
        
        for(let i=0;i< mid ;i++){
            curr = curr.next ;
        }
        return this.removeValue(curr.value) ;
    }
    
    insert(value , index){
        
        let node = new Node(value)
        
        if(index < 0 || index > this.size ) return -1 ;
        
        if(index === 0){
            return this.prepend(value);
        }else if(index === this.size){
            return this.append(value)
        }else{
            
            let curr = this.head ;
            
            for(let i=0;i< index-1;i++){
                curr = curr.next 
            }
            node.next = curr.next;
            curr.next = node 
            
            this.size++ ;
        }
    }
    
    search(value){
        
        if(this.isEmpty()){
            return -1 ;
        }else{
            
            let curr = this.head ;
            
            let i = 0 ;
            
            while(curr){
                if(curr.value ===value){
                    return i ;
                }
                curr = curr.next ;
                i++ ;
            }
            return -1 ;
        }
    }
    
}



let list = new LinkedList()

console.log(list.getSize());




list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)
list.append(60)
list.append(70)
console.log(list.removeIndex(3))

console.log("Mid : ",list.midElement())

list.insert(35 , 3)

console.log(list.search(30))

list.print();
list.reverse();
list.print();



console.log(list.getSize());