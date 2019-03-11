# 有向图
* 当且仅当两条边端点相同且方向一致时才为平行
* 我们说 点v 和 点w 强连通时，是说 v 有一条有向路径到 w，而 w 也有一条到 v
* 如果一个有向图中的每一个点都可以连接到其它任意一个点，那我们说它是强连通的。
* 一个 DAG 是指一个没有环的有向图
* 有向图点深度优先、广度优先、路径查询、最短路径查询和无向图并没有本质的区别
* 在环方面因为存在方向上的区别，所以只靠 marked 是无法完成判断。因此需要 onStack 数组来将目前还在环中的元素扔进去（不过依旧上使用深度优先遍历）
* 深度优先队列顺序；
    * Preorder: Put the vertex on a queue before the recursive calls.
    * Postorder: Put the vertex on a queue after the recursive calls.
    * Reverse postorder: Put the vertex on a stack after the recursive calls.
* 拓扑排序指的是在强连通有向图中的 Reverse postorder
* 汉密尔顿路径（一笔画完）： 检查拓扑排序中每相连两点之间是否连接

