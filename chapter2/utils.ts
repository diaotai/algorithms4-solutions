/**
 * 一些排序中常用的工具函数
 */

export function initNumbersWithN(n: number): number[] {
    const results: number[] = [];
    for(let i = 0; i < n; i++) {
        results.push(Math.floor(Math.random() * n));
    }
    return results;
}

export function swap(arr: number[], i: number, j: number): number[] {
    if (i === j) return arr;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

export function isArraySorted(arr: number[]): boolean {
    for(let i = 1;i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
}

export function testArraySorted(sort: (arr: number[]) => number[], n = 10) {
    for (let i = 0; i < n; i++) {
        const arr = initNumbersWithN(n);
        console.log('before sort:' , arr);
        sort(arr);
        console.log('after sort:', arr);
        console.log(isArraySorted(arr));
    }
}
