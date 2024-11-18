class MaxHeap {
    constructor(array) {
        this.heap = array;
        this.buildHeap();
    }

    buildHeap() {
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
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

        if (largest != index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }

    extractMax() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapSort() {
        const sortedArray = [];
        while (this.heap.length) {
            sortedArray.push(this.extractMax());
        }
        return sortedArray.reverse();  // Reverse to get the sorted array in ascending order
    }
}

// Example usage
let arr = [12, 4, 6, 78, 89, 0];
let maxHeap = new MaxHeap(arr);

let sortedArr = maxHeap.heapSort();
console.log("Sorted array is:", sortedArr);
