// Node class representing each element in the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Linked List class
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Method to add a new node at the end
    add(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode; // Set as head if the list is empty
      } else {
        let current = this.head;
        // Traverse to the end of the list
        while (current.next) {
          current = current.next;
        }
        current.next = newNode; // Add new node at the end
      }
  
      this.size++;
    }

    linkedListToArray(){

        let arr = []
    
    
        let curr = this.head ;
    
        while(curr){
            arr.push(curr.value);
            curr = curr.next ;
        }
    
        return arr ;
    
        
      }
  
    // Method to print the entire list
    print() {
      let current = this.head;
      let result = "";
      while (current) {


        if(current.value )

        result += `${current.value} -> `;
        current = current.next;
      }
      console.log(result + "null");
    }
  }
  
  // Create a linked list with duplicate elements
  const list = new LinkedList();
  
  // Adding elements with duplicates
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(20);
  list.add(40);
  list.add(10);
  
  // Print the linked list
  list.print();
  
  



  let arr2 = list.linkedListToArray()

