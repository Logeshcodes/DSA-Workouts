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
    
    
    isEmpty(){
        return this.size === 0 ;
    }
    
    prepend(value){
        let node = new Node(value) ;
        
        if(this.isEmpty()){
            this.head = node 
        }else{
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
            
            curr.next = node ;
        }
        
        this.size++ ;
    }
    
    insert(value , index){
        
        if(index < 0 || index > this.size ) return null ;
        
        if(index === 0 ){
            this.prepend(value)
        }else if(index === this.size){
            this.append(value)
        }else{
             
             let node = new Node(value);
             let curr = this.head 
             
             for(let i=0;i< index-1 ; i++){
                 curr = curr.next ;
             }
             
             node.next = curr.next ;
             curr.next = node ;
             
             this.size++ ;
        }
    }
    
    
    display(){
        
        let curr = this.head ;
        
        let listValues = ''
        
        while(curr){
            
            listValues += `${curr.value} `
            curr = curr.next ;
        }
        return listValues ;
    }
    
    
    midElement(){
        let slow = this.head  ;
        let fast = this.head  ;
        
        while(fast !== null  && fast.next !== null){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        
        return slow.value ;
    }
    
    removeByValue(value){
        
        if(this.head.value === value){
            this.head  = this.head.next();
            this.size-- ;
        }
        
        let curr = this.head  ;
        let prev = null ;
        
        while(curr && curr.value!== value){
            prev = curr ;
            curr = curr.next ;
        }
        
        if(curr){
            prev.next = curr.next;
            this.size-- ;
        }
        
        return curr.value ;
    }
    
    
    removeByIndex(index){
        
        if(index < 0 || index > this.size ) return null ;
        
        if(index === 0){
            this.head  = this.head.next;
            this.size-- ;
        }
        
        let curr = this.head  ;
        let prev = null ;
        
        for(let i=0 ; i< index ;i++){
            prev = curr ;
            curr = curr.next ;
        }
        
        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
        
        return curr.value ;
    }
    
    reverse(){
        let curr = this.head  ;
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
        
        let arr = [];
        
        let curr = this.head 
        
        while(curr){
            arr.push(curr.value);
            curr = curr.next ;
        }
        
        return arr;
    }
    
    
}


let list = new LinkedList();

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.append(40)
list.append(50)

list.insert(5 , 0)
list.insert(55 , 6)
list.insert(25 , 3)

// list.removeByValue(20)
console.log('Removed index value : ' , list.removeByIndex(2))

console.log(list.display())

console.log('MidElement : ' , list.midElement())

list.reverse()
console.log(list.display())
console.log(list.toArray())


function isPalindrome(str){
    
    let list = new LinkedList();
    
    for(let i=0;i< str.length ;i++ ){
        list.prepend(str[i])
    }
    
    let res = list.display() // remove space in display method
    
    return res === str ;
}


let str = 'madam';

console.log(isPalindrome(str))





let arr = [1,2,3,4,5]


function linkedListToArr(arr){
    
    let list = new LinkedList()
    
    for(let i=0 ;i< arr.length ; i++){
        list.append(arr[i])
    }
    
    return list.display() ;
}

console.log(linkedListToArr(arr))
