# 字符串排序
* 字符串排序有着非常特殊的地方——其字符集是相当小的，这就让我们可以在某些特定情况下使用一些算法来突破 O（NLogN）的下界

## 键索引计数法
### 特征
* 适用于小整数键
* 之所以能突破运行下界是因为不需要比较

### 步骤
1. 频率统计（用一个数组来记录每个键出现的次数）
2. 将频率转化为索引（通过将数组中的键值不断相加来判断该键值将要出现的位置）
3. 数据分类（遍历数据集，不断将数据放在应有的位置）
4. 回写（将排序好的结果写回去）


## 低位优先的字符串排序（LSD）
### 特征
* 适合处理固定长度的小字符集数据
* 该排序是稳定的（这一条是建立于键索引计数法的稳定性上的）
* 该排序会将每个字符为键从右向左进行一次排序
* 运行时间为 NW（W为字符串长度）

### 步骤
从右向左，对每一位都进行一次键索引计数法排序


## 高位优先的字符串排序（MSD）
### 特征
* 基本思路为从字符串串首将每一种键值做一个排序和分类，然后不断向后一位一位递归
* 当处理小型数组时，递归的效率很会比插入排序等方法低下（最坏的结果是每一个字符串都会维持一个只有一个元素的数组）
* 适用于大量长度不一致，整体而言分布随机（最好不要含大量的相同前缀或相同字符串）
* 并不需要完成对所有字符的检索，只需要检查开头若干个就可以了
* 对于随机输入，性能是亚线性的，对于非随机输入，是接近线性的。在最坏情况下（即所有元素都相等），是线性的
* 最大的挑战在于处理非随机因素（可能会产生大量的空数组）
* 性能在 8N + 3R ~ 7wR + 3wR 之间（ N 为字符串个数， R 为字符集大小， w 为字符串平均长度）



## 三向字符串快速排序
### 特征
* 基本思路为从左向右，在每一位都将选择排第一的字符 v，然后将字符串分为 该位 大于v、等于v、小于v 的，然后再处理下一位。=
* 该排序属于 MSD 和 快排的结合
* 由于该排序只将数据分为三个部分，因此数据一栋梁可能非常大
* 对小型数组，可以做出对前几个字符相同的数据进行插入排序
* 和快排一眼，该排序最好也要进行随机化

## 总结
稳定性： 以上三种排序，只有三向随机字符串快速排序是不稳定的
原地排序： 只有 三向随机字符串快速排序 是原地排序
适用范围： LSD（较短的定长字符串）；MSD（随机字符串）；三向随机字符串快速排序（统一排序，特别适用于含有较长公共前缀的字符串）
运行时间： LSD（NW）； MSD（N～NW）；三向随机字符串快速排序（N～NW）
额外空间：LSD（N）；MSD（N+WR）； 三向随机字符串快速排序（W+logN）