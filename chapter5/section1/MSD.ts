class MSDSort {
    public aux: string[];
    public r = 256;
    public n = 16; // 切换排序算法的阙值

    public sort(arr: string[]): string[] {
        this.msdSort(arr, 0, arr.length, 0);
        return this.aux;
    }

    public msdSort(arr: string[], start: number, end: number, pos: number) {
        if (start + this.n > end) {
            this.searchSort(arr, start, end);
            return;
        } 

        // 完成 count 数组的初始化
        const count: number[] = [];
        for (let w = 0; w < this.r + 2; w++) {
            count.push(0);
        }

        // 完成次数统计
        for (let i = start; i < end; i++) {
            const keyCode = Number.isNaN(arr[i].charCodeAt(pos)) ? -1 : arr[i].charCodeAt(pos);
            count[keyCode + 2] ++;
        }

        // 转化为索引
        for (let w = 1; w < count.length; w++) {
            count[w] += count[w - 1];
        }

        // 分类
        for (let i = start; i < end; i++) {
            const keyCode = Number.isNaN(arr[i].charCodeAt(pos)) ? -1 : arr[i].charCodeAt(pos);
            this.aux[start + count[keyCode + 2]] = arr[i];
        }

        // 会写
        for (let i = start; i < end; i++) {
            arr[i] = this.aux[i];
        }

        // 递归处理
        for (let w = 0; w < this.r; w++) {
            this.msdSort(arr, start + count[w], start + count[w + 1], pos + 1);
        }

    }

    // 本该作为插入排序来实现
    private searchSort(arr: string[], start: number, end: number) {

    }
}