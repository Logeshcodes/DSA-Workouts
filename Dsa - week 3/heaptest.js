class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }
    getRightChildIndex(index){
        return 2 * index + 2
    }

    insert(value){

        this.heap.push(value);

        this.heapifyUp(this.heap.length - 1)
    }


    heapifyUp(index){
        let parentIndex = this.getParentIndex(index);

        while( index > 0 && this.heap[index] > this.heap[parentIndex]){
            [this.heap[index] , this.heap[parentIndex]] = [ this.heap[parentIndex] , this.heap[index] ]
        }

        index = parentIndex ;

        parentIndex = this.getParentIndex(index)
    }


    print(){
        console.log(this.heap.join(" "));
        
    }

    remove(value){

        let index = this.heap.indexOf(value)


        if(this.heap.length === 0){
            return null 
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        [ this.heap[index] , this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1] , this.heap[index] ]

        let removed = this.heap.pop()

        this.heapifyDown(index)

        return removed ;
    }

    heapifyDown(index){

        let largest = index ;
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if(leftChildIndex < this.heap.length && this.heap[largest] < this.heap[leftChildIndex]){
            
            leftChildIndex = largest
        }
        if(leftChildIndex < this.heap.length && this.heap[largest] < this.heap[leftChildIndex]){
            
            rightChildIndex = largest
        }

        if(largest !== index){
            [this.heap[largest] , this.heap[index]] = [ this.heap[index] ,  this.heap[largest]]
            this.heapifyDown(largest)
        }
    }
}


let maxHeap = new MaxHeap()

maxHeap.insert(20)
maxHeap.insert(10)
maxHeap.insert(15)
maxHeap.insert(5)
maxHeap.insert(7)

maxHeap.remove(10)

maxHeap.print()