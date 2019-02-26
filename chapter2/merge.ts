/**
 * merge sort
 * O(N lgN)
 */

import { testArraySorted } from './utils';

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));
    return merge(leftArray, rightArray);
}

function merge(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i++]);
    }

    while(j < arr2.length) {
        result.push(arr2[j++]);
    }

    return result;
}

(function() {
    testArraySorted(mergeSort);
})()