/**
 * insertion sort
 * O(n^2)
 */

import { swap, testArraySorted } from './utils';

function insertionSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if (arr[j] < arr[j -1]) {
                swap(arr, j, j - 1);
            }
        }
    }
    return arr;
}

testArraySorted(insertionSort);