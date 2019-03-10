/**
 *  广度优先搜索
 */


import { UndirectedGraph } from './undirectedGraph';
import { generateArrayWithNITems, getRandomInt } from './utils';


class UndirectedGraphBFS {
    private graph: UndirectedGraph;
    private searchTarget: number;
    private marked: boolean[];
    private queue: number[] = [];
    public count = 0;

    constructor(graph: UndirectedGraph, target: number) {
        this.graph = graph;
        this.searchTarget = target;
        this.marked = generateArrayWithNITems(graph.v, false);
        this.queue.push(target);
        this.bfs();
    }

    public bfs() {
        while(this.queue.length) {
            const v = this.queue.shift();
            this.count ++;
            this.marked[v] = true;
            for (let index of this.graph.connected(v)) {
                if (!this.marked[index]) {
                    this.queue.push(index);
                }
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
    const ugbfs = new UndirectedGraphBFS(graph, 0);
    console.log(ugbfs.count);
    ugbfs.print();
})();