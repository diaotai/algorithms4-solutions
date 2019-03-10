/**
 *  利用深度优先搜索来寻找路径
*/

import { UndirectedGraph } from './undirectedGraph';
import { generateArrayWithNITems } from './utils';

class UndirectedGraphDFSPath {
    private graph: UndirectedGraph;
    private marked: boolean[];
    private eadgeTo: number[];
    private source: number;

    constructor(graph: UndirectedGraph, source: number) {
        this.graph = graph;
        this.source = source;
        this.marked = generateArrayWithNITems(this.graph.v, false);
        this.eadgeTo = generateArrayWithNITems(this.graph.v, -1);
        this.dfs(source);
    }

    private dfs(source: number) {
        for (let i of this.graph.connected(source)) {
            if (!this.marked[i]) {
                this.marked[i] = true;
                this.eadgeTo[i] = source;
                this.dfs(i);
            }
        }
    }

    public hasPathTo(target: number): boolean {
        return this.marked[target];
    }

    public getPathTo(target: number): number[] {
        const path: number[] = [];
        if (!this.hasPathTo(target)) {
            return path;
        }
        let point = target;
        while (point != this.source) {
            path.unshift(point);
            point = this.eadgeTo[point];
        }
        path.unshift(this.source);

        return path;
    }
}