class QuickStringSort {
    private arr: string[];
    
    constructor(arr: string[]) {
        this.arr = arr;
        this.sort(0, arr.length - 1, 0);
    }

    private sort(start: number, end: number, pos: number) {
        const arr = this.arr;
        if (start <= end) return;
        let low = start, high = end;
        let i = start + 1;
        const v = this.chatAt(arr[low], pos);

        while (i <= high) {
            const t = this.chatAt(arr[i], pos);
            if (t < v) {
                this.exch(low++, i++);
            } else if (t === v) {
                i++;
            } else {
                this.exch(i, high--);  // 本处不动 i 的原因是无法判断位于 high 处数值情况，这个和 low 处的并不相同（因为之前我们的 v 取得就是 low处的值）
            }
        }

        this.sort(start, low - 1 , pos);
        if (v >= 0) {
            this.sort(low, high, pos + 1);
        }
        this.sort(high + 1, end, pos);
    }

    private chatAt(str: string, index: number): number {
        if (index >= str.length) {
            return -1;
        }
        return str.charCodeAt(index);
    }

    private exch(i: number, j: number) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }


}