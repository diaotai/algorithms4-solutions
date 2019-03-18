import { test } from './utils';

function boyerMooreSort(text: string, pattern: string): number {
    const m = text.length;
    const n = pattern.length;
    const R = 256;
    const right: number[] = [];
    for (let i = 0; i < R; i++) {
        const index = pattern.lastIndexOf(String.fromCharCode(i))
        right.push(index);
    }

    let skip: number;
    for (let i = 0; i <= m - n; i += skip) {
        skip = 0;
        for (let j = n - 1; j >= 0; j--) {
            if(text[i+j] !== pattern[j]) {
                skip = j - right[text.charCodeAt(i+j)];
                if (skip < 1) {
                    skip = 1;
                }
                break;
            }
        }
        if (skip === 0) {
            return i;        
        }
    }
    
    return -1;
}

test(boyerMooreSort);