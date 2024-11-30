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
        return this.size
    }
    
    isEmpty(){
        return this.size === 0 ;
    }
    
    prepend(value){
        let node = new Node(value) ;
        
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
        
        let curr = this.head ;
        
        if(this.isEmpty()){
            this.head = node ;
        }else{
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
        }else if(index === this.size){
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
    
    midElement(){
        let slow = this.head ;
        let fast = this.head ;
        
        while(fast !== null && fast.next!== null ){
            slow = slow.next ;
            fast = fast.next.next ;
        }
        
        return slow.value ;
    }
    
    removeValue(value){
        
        if(this.head.value === value){
            this.head = this.head.next
            this.size-- ;
        }
        
        let curr = this.head ;
        
        let prev = null ;
        
        while(curr && curr.value!== value){
            prev = curr ;
            curr = curr.next ;
        }
        
        if(curr){
            prev.next = curr.next ;
            this.size-- ;
        }
        
        return curr.value ;
    }
    
    
    display(){
        
        let curr = this.head ;
        
        let listValues = '' ;
        
        while(curr){
            listValues+= `${curr.value} ` ;
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
        this.head = prev ;
    }
    
    linkedListToArray(){
        let arr = []
        
        let curr = this.head ;
        
        while(curr){
            arr.push(curr.value)
            curr = curr.next ;
        }
        
        return arr ;
    }
    
    
    
    findDuplicateAndUnique(){
        let curr = this.head ;
        let elementCount = {} ;
        
        while(curr){
            
            if(elementCount[curr.value]){
                elementCount[curr.value]++ ;
            }else{
                elementCount[curr.value] = 1 ;
            }
            
            curr = curr.next ;
        }
        
        
        let duplicate = [];
        let unique = [];
        
        for(let value in elementCount){
            if(elementCount[value] > 1){
                duplicate.push(Number(value))
            }else{
                unique.push(Number(value))
            }
        }
        
        return {duplicate , unique }
    }

    removeDuplicate(){
        let curr = this.head ;
        let prev = null ;

        let set = new Set()

        while(curr){
            if(set.has(curr.value)){
                prev.next = curr.next ;
            }else{
                set.add(curr.value)
                prev = curr
            }

            curr = curr.next ;
        }
    }
}


const list = new LinkedList() 

list.prepend(30)
list.prepend(20)
list.prepend(10)

list.prepend(10)
list.append(40)
list.append(50)

list.insert(5 , 0)
list.insert(35 , 4)
list.insert(55 , 6)

console.log('Removed : ' , list.removeValue(list.midElement()))
console.log('\n')

console.log('Display : ',list.display())
console.log('\n')

list.reverse()
console.log('Reversed : ', list.display())
console.log('\n')
console.log('midElement : ',list.midElement())
console.log('\n')
console.log('convert linkedListToArray : ',list.linkedListToArray())

console.log('\n')

let arr = [1,2,3,4,5] ;

function arrayToLinkedList(arr){
    
    let list2 = new LinkedList()
    
    for(let i=0 ;i< arr.length ; i++){
        list2.append(arr[i])
    }
    
    return list2.display()
}


console.log('convert arrayToLinkedList : ',arrayToLinkedList(arr))


// check the linkedList is an Palindrome - refer full code


let str = 'madam'  // => remove space in the display method 

function isPalindrome(str){
    
    let list3 = new LinkedList();
    
    for(let i=0;i< str.length ; i++){
        list3.prepend(str[i])
    }
    
    let res = list3.display()
    
    return res === str ;
}

console.log('Palindrome : ',isPalindrome(str))

let {duplicate , unique } = list.findDuplicateAndUnique()

console.log('Duplicate Elements : ',duplicate)
console.log('Unique Elements : ' ,unique)


list.removeDuplicate()



console.log('Remove Duplication : ', list.display())
