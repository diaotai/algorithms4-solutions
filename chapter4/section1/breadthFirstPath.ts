/**
 *   通过广度优先搜索来寻找最短路径 
*/

import { UndirectedGraph } from './undirectedGraph';
import { generateArrayWithNITems } from './utils';


class UndirectedGraphBFSPath {
    private graph: UndirectedGraph;
    private source: number;
    private marked: boolean[];
    private edageTo: number[];
    private queue: number[] = [];

    constructor(graph: UndirectedGraph, source: number) {
        this.graph = graph;
        this.source = source;
        this.marked = generateArrayWithNITems(this.graph.v, false);
        this.edageTo = generateArrayWithNITems(this.graph.v, -1);
        this.queue.push(source);
    }

    private bfs() {
        while(this.queue.length) {
            const v = this.queue.shift();
            this.marked[v] = true;
            for (let i of this.graph.connected(v)) {
                if (!this.marked[i]) {
                    this.edageTo[i] = v;
                    this.queue.push(i);
                }
            }
        }
    }
}