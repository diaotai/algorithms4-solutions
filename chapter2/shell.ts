/**
 * sheelSort
 * O(n^(3/2))
 * 先进行相隔 n 个的排序，然后尺度不断向下
 */

import { swap, testArraySorted } from './utils';

function sheelSort(arr: number[]): number[] {
    const n = arr.length;
    let h = 1;

    while (h < Math.floor(n / 3)) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for(let i = h; i < n; i++) {
            for (let j = i; j >= h && arr[j] < arr[j -h]; j-= h) {
                swap(arr, j, j - h);
            }
        }
        h = Math.floor(h /3);
    }

    return arr;
}

(function() {
    testArraySorted(sheelSort);
})()