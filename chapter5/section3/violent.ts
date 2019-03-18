import { test } from './utils';

function violentSearch(text: string, pattern: string): number {
    const m = text.length;
    const n = pattern.length;
    for(let i = 0; i < m; i++) {
        let j = 0;
        for (j = 0; j < n; j++) {
            if(text[i+j] !== pattern[j]) {
                break;
            }
        }
        if (j === n) {
            return i;
        }
    }
    return -1;
}

(function() {
    test(violentSearch);
})()