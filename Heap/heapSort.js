class HeapSort{
    constructor(){
        this.heap = []
    }


    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    swap(index1 , index2){
        [ this.heap[index1] ,  this.heap[index2]] = [ this.heap[index2] ,  this.heap[index1]]
    }


    insert(value){

        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){

        let index =  this.heap.length-1 ;

        while(index > 0 &&  this.heap[this.getParentIndex(index)] <  this.heap[index]){
            this.swap(index , this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    remove(){

        if( this.heap.length===0 ) return null ;
        if( this.heap.length===1 ) return this.heap.pop()

        let root = this.heap[0]

        this.heap[0] =  this.heap.pop()

        this.heapifyDown()
        return root ;
    }

    heapifyDown(){

        let index = 0 ;
        let largest = index ;

        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2

        if(leftChildIndex <  this.heap.length &&  this.heap[leftChildIndex] >  this.heap[largest]){
            largest = leftChildIndex
        }
        if(rightChildIndex <  this.heap.length &&  this.heap[rightChildIndex] >  this.heap[largest]){
            largest = rightChildIndex
        }

        if(largest !== index){
            this.swap(largest , index)
            this.heapifyDown(largest)
        }
    }

    heapSort(){

        let sortedArr = []

        while(this.heap.length > 0){

            sortedArr.push(this.remove())
        }

        return sortedArr.reverse()
    }

    display(){
        console.log( this.heap)
    }
}

let sort = new HeapSort()

sort.insert(10)
sort.insert(100)
sort.insert(104)
sort.insert(101)
sort.insert(1019)
console.log("Noraml heap : ")
sort.display()
sort.remove()
console.log("Removed : ")
sort.display()
console.log("HeapSort : ")
console.log(sort.heapSort())