/**
 *  求无向图的割点和桥
 *   https://www.cnblogs.com/c1299401227/p/5402747.html
 *   dfn[i] 代表着 i 被遍历到的顺序
 *   而 low[i] 代表着与它相连的一组中最先被遍历的那个
 *   再图中（视为树），只会有两种点为割点——拥有多个子树的根结点以及 low[i] >= dfn[father] 的点（这代表上至某个点是与以下一大堆只有单个点相连）
 *   仅当无向边（u，v）是树枝边的时候，需要满足dfn(u)<low(v)，也就是v向上翻不到u及其以上的点，那么u--v之间一定能够有1条或者多条边不能删去，因为他们之间有一部分无环，是桥。
*/
import { UndirectedGraph } from './undirectedGraph';
import { generateArrayWithNITems } from './utils';

class UndirectedGraphBridge {
    private graph: UndirectedGraph;
    private low: number[];
    private dfn: number[];
    private father: number[];
    private isCut: boolean[]; // 统计割点
    private order = 0;

    constructor(graph: UndirectedGraph) {
        this.graph = graph;
        this.low = generateArrayWithNITems(graph.v, -1);
        this.dfn = generateArrayWithNITems(graph.v, -1);
        this.father = generateArrayWithNITems(graph.v, -1);
        this.isCut = generateArrayWithNITems(graph.v, false);
    }

    private dfs(v: number, father: number) {
        this.father[v] = father;
        this.dfn[v] = this.order;
        this.low[v] = this.order;
        this.order++;
        for (let i of this.graph.connected(v)) {
            if(this.dfn[i] === -1) {
                this.dfs(i, v);
                this.low[v] = Math.min(this.low[i], this.low[v]);
            } else if(i !== father){
                this.low[v] = Math.min(this.low[v], this.dfn[i]);
            }
        }
    }

    private count() {
        let rootSon = 0;
        for (let i = 0; i < this.graph.v; i++) {
            let v = this.father[i];
            if (v === 0) {
                rootSon++;
            } else if (this.low[i] >= this.dfn[v]){
                this.isCut[i] = true;
            }
        }

        if (rootSon > 1) {
            this.isCut[0] = true;
        }

        for(let i = 0; i < this.isCut.length; i++) {
            if (this.isCut[i]) {
                console.log('割点 ----', i);
            }
        }

        for (let i = 0; i < this.father.length; i++) {
            const father = this.father[i];
            if (father >= 0 && this.low[i] > this.dfn[father]) {
                console.log(i, father, 'is a bridge');
            }
        }
    }
}

