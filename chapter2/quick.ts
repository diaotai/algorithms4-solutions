/**
 * quicksort
 * 快排的关键在于将数据分为两半（一半大于等于A，一半小于等于A）
 * 之所以要进行随机，是因为快排希望被选中的那个数是中间的，这样可以将两边分成两个相等大小的数组，=
 */

import { swap, shuffle, testArraySorted } from './utils';

function quickSort(arr: number[]): number[] {
    sort(arr, 0, arr.length - 1);
    return arr;
}

function sort(arr: number[], low: number, high: number) {
    if (high <= low) {
        return;
    }

    shuffle(arr, low, high);

    let i = low , j = high + 1;
    while (true) {
        while(arr[++i] < arr[low]) {
            if(i >= high) {
                break;
            }
        }
        
        while(arr[--j] > arr[low]) {
            if(j <= low) {
                break;
            }
        }

        if (i >= j) {
            break;
        }

        swap(arr, i, j);
    }
    
    swap(arr, low, j);

    sort(arr, low, j - 1);
    sort(arr, j + 1, high);
}

(function() {
    testArraySorted(quickSort);
}())