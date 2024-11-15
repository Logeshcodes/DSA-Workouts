class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0 ;
    }
    
    getSize(){
        return this.size ;
    }
    
    isEmpty(){
        return this.size === 0 ;
    }
    
    prepend(value){
        
        let node = new Node(value)
        
        let curr = this.head ;
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            
            node.next = this.head ;
            this.head = node ;
        }
        
        this.size++ ;
   
    }
    
    display(){
        
        let curr = this.head ;
        
        let listValues = ''
        
        while(curr){
            listValues += `${curr.value} ` ;
            curr = curr.next ;
        }
        
        return listValues ;
    }
    
    append(value){
        
        let node = new Node(value) ;
        
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
    
    insert(value , index){
        
        if(index < 0 || index > this.size) return ;
        if(index === 0) {
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }else{
            
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
    
    removeValue(value){
        
        if(this.head.value === value){
            this.head = this.head.next ;
            this.size-- ;
        }
        
        let curr = this.head ;
        let prev =  null  ;
        
        while(curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }
        if(curr){
            prev.next = curr.next ;
            this.size--
        }
        
        return curr.value ;
    }
    
    midElement(){
        let slow = this.head ; 
        let fast  = this.head ; 
        
        while(fast!== null && fast.next !== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        
        return slow.value ;
    }
    
    removeIndex(index){
        
        if(index === 0){
            this.head = this.head.next ;
            this.size-- ;
        }
        
        let curr = this.head ;
        let prev = null ;
        
        for(let i=0;i< index ; i++){
            prev = curr ;
            curr =curr.next ;
        }
        
        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
        return curr.value ;
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
        this.head = prev ;
    }
    
    findDuplicate(){
        
        let set = new Set();
        
        let curr = this.head ;
        
        let arr = []
        
        
        while(curr){
            if(!set.has(curr.value)){
                set.add(curr.value)
            }else{
                arr.push(curr.value)
            }
            
            curr = curr.next ;
        }
        
        return arr ;
        
        // remove duplicate ;
        
        
        // for(let i=0;i< arr.length ;i++){
        //     this.removeValue(arr[i])
        // }
    }
    
   removeDuplicate(){
       
       let set = new Set()
       let duplicate = new Set()
       
       let curr = this.head ;
       
        while(curr){
             if(set.has(curr.value)){
                duplicate.add(curr.value)
            }else{
                set.add(curr.value)
            }
            curr = curr.next ;
        }
       
       let prev = null ;
       
       curr = this.head ; // re-assign curr 
       
       while(curr){
           
           if(duplicate.has(curr.value)){
               
               if(prev === null){
                   this.head = curr.next ;
               }else{
                   prev.next = curr.next ;
                   
               }
               this.size--
               
           }else{
               
               prev = curr ;
           }
           
           
           curr = curr.next 
       }
       
   }

   
   
   // to Array
   
   toArray(){
       
       let arr = []
       let curr = this.head ;
       
       while(curr){
           arr.push(curr.value)
           
           curr = curr.next 
       }
       return arr ; 
   }
    
}


let list = new LinkedList



list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(5 , 0)
list.insert(55 , 6)
list.insert(35 , 4)

list.append(60)
list.append(60)

list.removeValue(list.midElement())

console.log(list.removeIndex(6))

console.log(list.findDuplicate())

list.removeDuplicate()

console.log(list.display())
list.reverse()
console.log(list.display())
console.log(list.getSize())

console.log(list.toArray())



// functions 


let arr = [1,2,3,4,5] ;

function arrToLinkedList(arr){
    
    let list = new LinkedList()
    
    for(let i=0 ;i< arr.length ; i++){
        list.append(arr[i])
    }
    
    return list.display()
}

console.log(arrToLinkedList(arr));

let str = 'madam'





function isPalindrome(str){
    
    let list = new LinkedList()
    
    for(let i=0;i< str.length ; i++){
        list.prepend(str[i])
    }
    
    let res = list.display()    // remove space in display method
    
    console.log(res)
    
    return str === res ;
}

console.log(isPalindrome(str))







