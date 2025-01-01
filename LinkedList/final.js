class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    // Check 
    
    getSize(){
        return this.size ;
    }
    
    isEmpty(){
        return this.size === 0 ;
    }
    
    // Adding Node
    
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
        
        if(index < 0 || index > this.size){
            return ;
        }
        else if(index === 0){
            this.prepend(value)
        }else if(index === this.size){
            this.append(value)
        }else{
            let node = new Node(value);
            
            let curr = this.head ;
            
            for(let i=0 ; i< index-1 ; i++){
                curr =curr.next ;
            }
            node.next = curr.next ;
            curr.next = node ;
            
            this.size++ ;
        }
    }
    
    // Removing Node 
    
    removeByValue(value){
        
        if(this.head.value === value){
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
            prev.next = curr.next 
            this.size-- ;
        }
    }
    
    removeByIndex(index){
        
        if(index < 0 || index > this.size ) return ;
        else if(index === 0){
            this.head = this.head.next ;
            this.size-- ;
        }else{
            
            let curr = this.head ;
            
            let prev = null ;
            
            for(let i=0;i< index ; i++){
                prev = curr ;
                curr = curr.next ;
            }
            
            if(curr){
                prev.next = curr.next ;
            }
            
            this.size-- 
        }
    }
    
    // print & modify 
    
     display(){
        let listValues = '';
        
        let curr = this.head ;
        
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next ;
        }
        
        return listValues ;
    }
    
    midElement(){
        
        let slow = this.head ;
        let fast = this.head ;
        
        while(fast!== null && fast.next!== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        
        return slow.value ;
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
    
    toArray(){
        
        let curr = this.head ;
        
        let arr = []
        
        while(curr){
            arr.push(curr.value);
            curr = curr.next ;
        }
        
        return arr ;
    }
    
    // Duplicates 
    
    findDuplicates(){
        
        let set = new Set();
        let arr = []
    
        let curr = this.head ; 
        
        while(curr){
            
            if(set.has(curr.value)){
                arr.push(curr.value)
            }else{
                set.add(curr.value)
            }
            
            curr = curr.next ;
        }
        
        for(let i=0 ; i < arr.length ; i++){
            this.removeByValue(arr[i])
        }
    }
    
    // Remove All Duplicates 
    
      removeDuplicates(){
        
        let set = new Set();
        let duplicates = new Set();
     
    
        let curr = this.head ; 
        
        while(curr){
            
            if(set.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                set.add(curr.value)
            }
            
            curr = curr.next ;
        }
        
        curr = this.head // reassign once
        
        let prev = null ;
        
        while(curr){
            
            if(duplicates.has(curr.value)){
                
                if(prev === null){
                    this.head = this.head.next ;
                    this.size-- ;
                }else{
                    
                    prev.next = curr.next 
                    this.size-- 
                }
                
            }else{
                prev = curr ;
            }
            
            curr = curr.next ;
        }
        
        
    }
    
}


// functions

let str = 'madam'

function isPalindrome(str){
    
    let list = new LinkedList()
    
    for(let i=0;i<str.length ; i++){
        list.prepend(str[i])
    }
    
    let res = list.display()
    
    return str === res ;
}


let arr = [1,2,3,4,5]

function arrToLinkedList(arr){
    
    let list = new LinkedList()
    
    for(let i=0;i< arr.length ; i++){
        list.append(arr[i]);
    }
    
    return list.display()
}



let list = new LinkedList();

list.append(30)
list.append(40)
list.append(50)

list.prepend(20)
list.prepend(10)

list.insert(5 , 0)
list.insert(55 , 6)
list.insert(55 , 7)
list.insert(55 , 8)
list.insert(55 , 9)


console.log(list.midElement())

console.log(list.display())



// console.log(list.toArray())

console.log(isPalindrome(str))
console.log(arrToLinkedList(arr))


// list.findDuplicates()
list.removeDuplicates()

console.log(list.display())



