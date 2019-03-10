/**
 *  无向图有两种常见的实现方法——二维矩阵以及一维数组+链表机制，我采用前者作为实现
 */

 import { generateArrayWithNITems } from './utils';


export class UndirectedGraph {

    public v: number;   // 图形中点数
    public e: number = 0;  // 图形中连接数
    public adj: boolean[][] = []; // 标志两个点之间是否有链接

    constructor(v: number) {
        this.v = v;
        for (let i = 0; i < v; i++) {
            this.adj.push(generateArrayWithNITems(v, false));
        }
    }

    public addEdge(x: number, y: number) {
        if (!this.adj[x][y]) {
            this.e ++;
        }
        this.adj[x][y] = true;
        this.adj[y][x] = true;
    }

    public isConnected(x: number, y: number): boolean {
        return this.adj[x][y];
    }

    public connected(x: number): number[] {
        const result: number[] = [];
        this.adj[x].reduce((arr, item: boolean, index: number) => {
            if (item) {
                arr.push(index);
            }
            return arr;
        }, result);
        return result;
    }
}


