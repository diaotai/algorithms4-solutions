# 字符串查找

## 单词查找树
### 特征
* 命中所需的时间与被查找的键的长度成正比
* 未命中只需要检查若干个字符（不超过键的长度）
* 整体结构与键的插入删除顺序无关，给定一组键，无论顺序如何树结构都是唯一的
* 在字母表大小为R，一颗由N个随机键构造的单词查找树中，未命中的平均查找所需检查的节点数为 ~logR(N)
* 一颗单词查找树所需的空间再 RN～ RWN 之间
* 在空间允许的情况下，单词查找树是效率最高的，但是，绝对不能用它来查询来自大字母表的长链

### 实现思路
* 基本结构为一个 Node 包含一个值 value，然后是 R 个链接，每个链接都可以连接其它节点
* 一个键的值存于最后一个节点
* 当删除操作时，有以下几种情况：
    无论出现什么情况，都应该找到相应键的最后一个节点，将 value 设置为 null，随后，看以下几点：
    * 当前节点没有任何子节点且不存在value，那直接删除（如果删除将导致其父节点也没有子节点，那么继续删除）
    * 若还存在子节点，那么不作处理


## 三向单词查找树
### 特征
* N 个 平均长度为 w 的字符串构造的三向单词查找树中的链接总数再 3N ～ 3NW 之间
* 再一颗由 N 个随机字符串构造的三向单词查找树中，查找未命中平均需要比较字符 ～ lnN 次。除 ～ lnN 此外，一次插入或命中的查找会比较一次被查找的键中的每个字符
* 三向单词查找树更接近于二叉查找树，在删除这一点上尤其相像（因此插入顺序实际上会影响树的结构）
* 三向单词查找树很适合那些字母表中各字母出现频率相差很大的情况
* 只有中间才是代表查找中了元素，左右两支都不是


## 总结
| 算法  | 未命中查找字符数量  | 适用场景   |
|---   |---               |---        ·|
| 二叉查找树  |  C1（lgN）^2  |   适用于随机排列的键 |
| 2-3查找树（红黑树）  | c2(lgN)^2  |  有性能保证（避免出现极端情况）  | 
| 线性探测法（并行数组）  | w   | 缓存散列值  |
| 字典树查找（R向单词查找树）| logR(N)   | 适用于较短的键和较小的字母表
| 字典树查找（三向单词查找树）| 1.39lgN   | 适用于非随机的键