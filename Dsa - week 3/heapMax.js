class MaxHeap{
    constructor(){
        this.heap = []
    }
    
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    
    getLeftChildIndex(index){
        return 2 * index + 1;
    }
    
    getRightChildIndex(index){
        return 2 * index + 2;
    }
    
    insert(value){
        this.heap.push(value)
        
        this.heapifyUp(this.heap.length-1)
    }
    
    heapifyUp(index){
        let parentIndex = this.getParentIndex(index);
        
        while(index > 0 && this.heap[parentIndex] < this.heap[index]){
            [ this.heap[index] , this.heap[parentIndex]] = [this.heap[parentIndex] ,  this.heap[index]]
        }
        
        index = parentIndex ;
        parentIndex = this.getParentIndex(index)
    }
    
    
    remove(value){
        const index = this.heap.indexOf(value);
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        
        [this.heap[index], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]];
        const removedValue = this.heap.pop();

        
        this.heapifyDown(index);

        return removedValue;
    }

    // heapDown
    
    heapifyDown(index){
    let largest = index
    let leftChildIndex = this.getLeftChildIndex(index)
    let rightChildIndex  = this.getRightChildIndex(index)

    if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest] ){
        largest = leftChildIndex
    }

    if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
        largest = rightChildIndex
    }

    if(largest != index){
        [this.heap[index] , this.heap[largest]] = [this.heap[largest] , this.heap[index]]
        this.heapifyDown(largest)
    }
  }

    getMax(){
        return this.heap[0]
    }
    
    print(){
        console.log(this.heap.join(" "))
    }
}


let heap = new MaxHeap()

heap.insert(20)
heap.insert(15)
heap.insert(10)
heap.insert(7)
heap.insert(3)

heap.remove(10)

console.log(heap.getMax())

heap.print()