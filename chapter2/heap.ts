/**
 * heapSort
*/

import { swap, testArraySorted } from './utils';

function heapSort(arr: number[]): number[] {
    const result: number[] = [];
    const maxHeap = new MaxHeap(arr);
    for (let i = 0; i < arr.length; i++) {
        result.unshift(maxHeap.pop());
    }
    return result;
}

class MaxHeap {
    private arr: number[] = [0];

    constructor(arr: number[]) {
        for (let num of arr) {
            this.push(num);
        }
    }

    public print() {
        console.log(this.arr);
    }

    public push(value: number) {
        const arr = this.arr;
        arr.push(value);
        this.swim(arr.length - 1); 
    }

    public pop(): number {
        const arr = this.arr;

        if (arr.length <= 1) {
            throw new Error('dont have enough numbers');
        }

        swap(arr, 1, arr.length -1);
        const value = arr.pop();
        this.sink(1);
        return value;
    }

    private sink(key: number) {
        const arr = this.arr;
        let n = key;
        while (2 * n <= arr.length) {
            let childKey = 2 * n;
            if (arr[childKey] < arr[childKey + 1]) {
                childKey++;
            }
            if(arr[n] < arr[childKey]) {
                swap(arr, n, childKey);
                n = childKey;
            } else {
                break;
            }
        }
    }

    private swim(key: number) {
        const arr = this.arr;
        let n = key;
        while (n > 1) {
            const parent = Math.floor(n / 2);
            if (arr[parent] < arr[n]) {
                swap(arr, n, parent);
                n = parent;
            } else {
                break;
            }
        }
    }
}

(function() {
    testArraySorted(heapSort);
})()