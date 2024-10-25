class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {

        let node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {

            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    print() {

        if (this.isEmpty()) {
            console.log("Empty");
        } else {

            let curr = this.head;

            let listValues = '';

            while (curr) {

                listValues += `${curr.value} `
                curr = curr.next;
            }

            console.log(listValues);
        }
    }


    prepend(value) {

        let node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {

            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }

        this.size++;
    }

    insert(value, index) {

        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            return this.append(value)
        }
        if (this.size === index) {
            return this.prepend(value)
        } else {

            let node = new Node(value)

            let curr = this.head;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }

            node.next = curr.next;
            curr.next = node;

            this.size++;
        }
    }

    removeIndex(index) {

        if (this.isEmpty()) {
            return
        } else {

            let curr = this.head;

            let removeElement;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }

            removeElement = curr.next;
            curr.next = removeElement.next;

            this.size--

            return removeElement.value;
        }
    }

    midElement(){
        
        let slow = this.head ;
        let fast = this.head ;
        
        while(fast!== null  && fast.next!==null ){
            slow = slow.next;
            fast = fast.next.next ;
        }
        
        return slow.value ;
        
    }

    reverse() {

        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }


    search(value) {

        if (this.isEmpty()) {
            return -1;
        } else {

            let i = 0;

            let curr = this.head;

            while (curr) {
                if (curr.value === value) {
                    return i;
                }

                curr = curr.next
                i++;
            }
            return -1;
        }
    }

    linkedListToArray() {

        let curr = this.head;

        let arr = []

        while (curr) {
            arr.push(curr.value)
            curr = curr.next
        }

        console.log(arr)
    }
}

function arrayToLinkedList(arr) {

    let linkedlist = new LinkedList()

    for (let i = 0; i < arr.length; i++) {
        linkedlist.append(arr[i]);
    }
    return linkedlist;

}

function isPalindrome(str){
    
    let list = new Linkedlist();
    
    for(let i=0 ;i< str.length ;i++){
        list.prepend(str[i])
    }
    let res = list.print()
    
    return res === str ;
}


let list = new LinkedList();

console.log(list.getSize());

list.append(30)
list.append(20)
list.append(10)


list.prepend(40)
list.prepend(50)


list.insert(5, 0)
list.insert(5, 6)
list.insert(15, 2)

console.log(list.removeIndex(2));

list.midElement()


list.print()

console.log(list.search(40));



console.log(list.getSize());

list.reverse()

list.print()

list.linkedListToArray()

let arr = [9,8,7,6,5]

let list2 = arrayToLinkedList(arr)

list2.print()

