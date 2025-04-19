class Node{
    constructor(value ){
        this.value = value ;
        this.next = null ;
    }
}


class LinkedList{
    constructor(){
        this.head = null ;
        this.size = 0; 
    }
    
    isEmpty(){
        return this.size === 0 ;
    }
    
    prepend(value){
        
        let node = new Node(value);
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
            
            node.next = this.head ;
            this.head = node ;
        }
        this.size++ ;
    }
    
    append(value){
        
        let node =  new Node(value);
    
        
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
        if( index < 0 || index > this.size) return ;
        if(index === 0){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }else{
            
            let curr = this.head ;
            let node = new Node(value)
            
            for(let i=0;i< index-1 ;i++){
                curr = curr.next ;
            }
            
            node.next = curr.next ;
            curr.next = node ;
            
            this.size++ ;
        }
    }
    
    
    removeByIndex(index){
        
        if(index < 0 || index > this.size) return ;
        
        if(index === 0){
            this.head = this.head.next ;
            this.size-- ;
            return ;
        }
        
        let curr = this.head ;
        let prev = null ;
        for(let i=0;i< index ; i++ ){
            prev = curr ;
            curr = curr.next ;
        }
        
        if( curr){
            prev.next = curr.next ;
            this.size-- ;
        }
    }
    
    
    removeByValue(value){
        
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return ;
        }
        
        let curr = this.head ;
        let prev = null ;
        
        while( curr && curr.value !== value){
            prev = curr ;
            curr = curr.next ;
        }
        
        if( curr){
            prev.next = curr.next ;
            this.size-- ;
        }
    }
    
    
    
    midElement(){
        
        let slow = this.head ;
        let fast = this.head ;
        
        while( fast && fast.next ){
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
    
    
    print(){
        
        let listValues = '';
        
        let curr = this.head ;
        
        while(curr){
            listValues += `${curr.value} `;
            curr = curr.next ;
        }
        
        return listValues ;
    }
    display(){
        
        let listValues = '';
        
        let curr = this.head ;
        
        while(curr){
            listValues += `${curr.value}`;
            curr = curr.next ;
        }
        
        return listValues ;
    }
    
    
    toArray(){
        
        let curr = this.head;
        let arr = []
        while(curr){
            arr.push(curr.value);
            curr = curr.next ;
        }
        return arr ;
    }
    
    search(value){
        
        if(this.head.value === value ) return true ;
        
        let curr = this.head ;
        
        while(curr){
            if(curr.value === value) return true ;
            curr = curr.next ;
        }
        return false ;
    }
    
    findDuplicates(){
        
        let curr = this.head ;
        let set = new Set();
        let arr = []
        
        while(curr){
            
            if(set.has(curr.value)){
                arr.push(curr.value)
            }else{
                set.add(curr.value)
            }
            
            curr = curr.next ;
        }
        return arr ;
    }
    
    findUnique(){
        
        let curr = this.head ;
        let set = new Set();
        let arr = []
        
        while(curr){
            
            if(set.has(curr.value)){
                arr.push(curr.value)
            }else{
                set.add(curr.value)
            }
            
            curr = curr.next ;
        }
        return [...set];
    }
    
    removeDuplicates(){
        
        let curr = this.head ;
        
        let set = new Set()
        let duplicates = new Set()
        
        while( curr){
            
            if(set.has( curr.value)){
                duplicates.add( curr.value)
            }else{
                set.add( curr.value)
            }
            
            curr =  curr.next ;
        }
        
        curr = this.head ;
        let prev = null ;
        
        while( curr){
            
            if( duplicates.has( curr.value)){
                
                if( prev ===null){
                    this.head = this.head.next ;
                }else{
                    prev.next = curr.next ;
                }
                this.size-- ;
                
            }else{
                prev = curr ;
            }
            
            curr = curr.next ;
        }
    }
    
    
    makeCircular(){
        
        let curr = this.head ;
        
        while(curr.next){
            curr = curr.next ;
        }
        
        curr.next = this.head ;
    }
    
    checkCircular(){
        
        let slow = this.head ;
        let fast = this.head ;
        
        while( fast && fast.next){
            slow = slow.next ;
            fast = fast.next.next ;
            
            if( slow ===fast){
                return true ;
            }
        }
        return false ;
            
    }
    
    sorting(){

        if(!this.head || !this.head.next) return ;
    
        let swapped ;
        
        do{
            
            swapped = false ;
            let curr = this.head ;
            
            while( curr && curr.next){
                  if( curr.value > curr.next.value){
                [ curr.value , curr.next.value] = [ curr.next.value , curr.value]
                swapped = true ;
            }
            
            curr = curr.next ;
            }
            
        }while( swapped)

           

    }
    
    
    
}


let list = new LinkedList();

list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)


list.append(60);
list.append(60);
list.append(60);

list.insert( 25 , 2);

list.removeByValue(10)
list.removeByIndex(2)

console.log(list.print())
console.log(list.midElement())
list.reverse()
console.log(list.print())
console.log(list.toArray())
console.log(list.search(30));

let arr = [ 1, 2, 3, 4, 5]

function arrayToLinkedList(arr){
    
    let list = new LinkedList();
    
    for(let i=0;i< arr.length ; i++){
        list.append(arr[i])
    }
    return list.print()
    
}
console.log( "linked list : " , arrayToLinkedList(arr));

let str = 'madam';

function isPalindrome(str){
    
    let list = new LinkedList();
    
    for(let i=0;i< str.length ; i++){
        list.prepend(str[i])
    }
    
    let res = list.display()
    
    return res === str ;
}
console.log( "palindrome : " , isPalindrome(str))
console.log( "Duplicates : " , list.findDuplicates())
console.log( "Unique : " , list.findUnique())
list.removeDuplicates();

console.log(list.print())



list.sorting()
console.log(list.print())

console.log(list.checkCircular())

list.makeCircular();

console.log(list.checkCircular())



