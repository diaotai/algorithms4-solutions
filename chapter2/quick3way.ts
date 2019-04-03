/**
 * https://algs4.cs.princeton.edu/23quicksort/Quick3way.java.html  in TypeScript
 * split the array into 3 parts, smaller than the one , equat and bigger
 */

import { shuffle, swap, testArraySorted } from './utils';


function quick3Sort(arr: number[]): number[] {
    sort(arr, 0, arr.length - 1);
    return arr;
}

/**
 * i 代表第一个与 value 相等的地方
 * index 当前值
 * 由于从前向后，所以一定能保证所有等于 value 的值被换出来
 * 
 * @param arr 
 * @param low 
 * @param high 
 */
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