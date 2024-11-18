class HeapSort{
    constructor(arr){
        this.heap = arr;
        this.buildHeap();
    }
    
    buildHeap(){
        
        for(let i= this.heap.length-1 ; i>= 0 ; i--){
            this.heapifyDown(i)
        }
    }
        
        heapifyDown(index){
            
            let largest = index ;
            
            let leftChildIndex = 2 * index + 1 ;
            let rightChildIndex = 2 * index + 2 ;
            
            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
                largest = leftChildIndex
            }
            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
                
                largest = rightChildIndex
            }
            
            if(largest !== index){
                [this.heap[largest] , this.heap[index]] = [ this.heap[index] , this.heap[largest]] ;
                
                this.heapifyDown(largest);
            }
        }
        
        
        extractMax(){
            
            if(this.heap.length === 0) return 0 ;
            if(this.heap.length === 1) this.heap.pop() ;
            
            let max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
            return max ;
        }
        
        heapSort(){
            let sortedArr = [];
            
            while(this.heap.length){
                sortedArr.push(this.extractMax())
            }
            
            return sortedArr.reverse()
        }
        
    
    
}

let arr = [34 , 12 , 0 , -9 , 67]

let sort = new HeapSort(arr);

console.log(sort.heapSort())


