/**
 * 用于实现无向图中深度优先搜索
*/

import { UndirectedGraph } from './undirectedGraph';
import { generateArrayWithNITems, getRandomInt } from './utils';


class UndirectedGraphDFS {
    private graph: UndirectedGraph;
    private searchTarget: number;
    private marked: boolean[];
    public count = 0;

    constructor(graph: UndirectedGraph, target: number) {
        this.graph = graph;
        this.searchTarget = target;
        this.marked = generateArrayWithNITems(graph.v, false);
        this.dfs(target);
    }

    public dfs(v: number) {
        this.count ++;
        this.marked[v] = true;
        for (let index of this.graph.connected(v)) {
            if (!this.marked[index]) {
                this.dfs(index);
            }
        }
    }

    public print() {
        if (this.count <= 1) {
            console.log('没有任何链接')
        };
        for (let i = 0; i < this.marked.length; i++ ) {
            if (this.marked[i]) {
                console.log(i, '-----');
            }
        }
        console.log(this.graph.adj);
    }
}

(function(){
    const graph = new UndirectedGraph(10);
    for (let i = 0; i < 7; i++) {
        graph.addEdge(i, getRandomInt(i, 10));
    }
    const ugdfs = new UndirectedGraphDFS(graph, 0);
    console.log(ugdfs.count);
    ugdfs.print();
})();