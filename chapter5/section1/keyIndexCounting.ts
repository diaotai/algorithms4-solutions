function keyIndexCounting(arr: number[]) {
    const n = 5; // 字符集大小
    const count: number[] = new Array(n+1);
    const aux: number[] = new Array(n);
    count[0] = 0;

    // 统计出现频率
    for (let a of arr) {
        if(!count[a]) {
            count[a] = 0;
        }
        count[a]++;
    }

    // 将频率转坏索

    for (let i = 1; i < n + 1; i++) {
        if(!count[i]) {
            count[i] = 0;
        }
        count[i] += count[i - 1];
    }

    // 将数据对应到相应位置上
    for (let a of arr) {
        aux[count[a]++] = a;
    }

    // 回写
    for (let i = 0; i < arr.length; i++) {
        arr[i] = aux[i];
    }

}