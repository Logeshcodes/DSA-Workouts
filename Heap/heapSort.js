class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        let largest = index;

        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            this.swap(largest, index);
            this.heapifyDown(largest);
        }
    }

    display() {
        console.log(this.heap);
    }

    
    heapSort() {
        const sortedArray = [];
        const tempHeap = [...this.heap]; 

        while (this.heap.length > 0) {
            sortedArray.push(this.remove());
        }

        this.heap = tempHeap; 
        return sortedArray.reverse(); 
    }
}

let maxHeap = new MaxHeap();

maxHeap.insert(100);
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(104);
maxHeap.insert(114);

console.log("Heap:");
maxHeap.display();

console.log("Sorted Array:");
console.log(maxHeap.heapSort());
