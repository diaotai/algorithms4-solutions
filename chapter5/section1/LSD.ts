/**
 * 
 * @param arr 将要排序到字符串数组
 * @param w 每个字符串的长度
 */
function LSDSort(arr: string[], w: number): string[] {
    const n = arr.length;
    const r = 256;
    const aux: string[] = new Array[n];
    for (let i = w -1; i >= 0; i--) {
        // 初始化 count 数组
        const count: number[] = [];
        for (let j = 0; j < r + 1; j++) {
            count.push(0);
        }

        // 统计出现次数
        for (let str of arr) {
            count[str.charCodeAt(i)]++;
        }

        // 将统计次数转化为索引
        for (let j = 1; j < count.length; j++) {
            count[j] += count[j - 1];
        }

        // 放到相应位置
        for (let str of arr) {
            aux[count[str.charCodeAt(i)]++] = str[i];
        }

        // 回写
        for (let index = 0; index < n; index++) {
            arr[index] = aux[index];
        }

    }


    return arr;
}