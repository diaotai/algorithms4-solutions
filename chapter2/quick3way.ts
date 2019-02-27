/**
 * https://algs4.cs.princeton.edu/23quicksort/Quick3way.java.html  in TypeScript
 * split the array into 3 parts, smaller than the one , equat and bigger
 */

import { shuffle, swap, testArraySorted } from './utils';


function quick3Sort(arr: number[]): number[] {
    sort(arr, 0, arr.length - 1);
    return arr;
}

function sort(arr: number[], low: number, high: number) {
    if (low >= high) return;

    shuffle(arr, low, high);

    const value = arr[low];
    let i = low, j = high;
    let index = i + 1;
    while(index <= j) {
        if(arr[index] > value) {
            swap(arr, j--, index) 
        } else if (arr[index] < value) {
            swap(arr, i++,  index++);
        } else {
            index++;
        }
    }

    sort(arr, low, i - 1);
    sort(arr, j + 1, high);

}

(function() {
    testArraySorted(quick3Sort);
})()