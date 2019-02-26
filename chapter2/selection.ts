/**
 * selectionSort
 * O(n^2)
 */

 import { swap, testArraySorted  } from './utils';

function selectionSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    return arr;
}

(function () {
    testArraySorted(selectionSort);
})()