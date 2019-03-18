import { test } from './utils';

function kmp(text: string, pattern: string): number {
    const m = text.length;
    const n = pattern.length;
    const R = 256;
    const dfa: number[][] = [];
    // dfa[i][j] 就代表这 当 ascii 码 为 i 当字符出现在 pattern 中第 j 个位置时（之前的全对），应当如何处理

    // 初始化 dfa 数组
    for(let i = 0; i < R; i++) {
        const arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(0);
        }
        dfa.push(arr);
    }
    
    /*
        dfa数组对生成分为三种情况:
        1.匹配失败，将dfa[i][x] 复制到 dfa[i][j]
        2.匹配成功,则 dfa[pattern.charCodeAt(j)][j] = j + 1;
        随后更新 x（x为回退点）
    */

    dfa[pattern.charCodeAt(0)][0] = 1;
    for (let x = 0, j = 1; j < n; j++) {
        for (let c = 0; c < R; c++) {
            dfa[c][j] = dfa[c][x];
        }
        dfa[pattern.charCodeAt(j)][j] = j + 1;
        x = dfa[pattern.charCodeAt(j)][x];
    }


    // 根据 dfa 数组进行搜索
    let i = 0, j = 0;
    for (; i < m && j < n; i++) {
        j = dfa[text.charCodeAt(i)][j];
    }

    if (j === n) {
        return i - n;
    }


    return -1;
}

test(kmp);


