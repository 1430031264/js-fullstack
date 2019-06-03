26道题 
[26] 链表 LinkedList 指针 

- 算法 
- 数据结构 链表 
- webpack 跑起来 

题目：
  给定一个(实现一个)链表，和一个特定值x,对链表进行分离，使所有小于x的节点都在大于或者等于x的节点之前  保证原来的顺序
  LinkedList (n)LinkedListNode 组成一个链表
  存储数据可以不连续
  给一个头指针 head -> ..next -> tail -> next=null

  给定一个队列 给头节点就好
    head = 1 -> 4 -> 3 -> 2 -> 5 -> 2  x=3 
  预期结果：
    1 -> 2 -> 2 -> 4 -> 3 -> 5

  1. 一分为二  节点 val后面的 next属性
    分为两个链表 因为有next属性，小的链表 -> 大链表的头结点
    怎么在组成链表的过程中，
    我们的 
          lowerHeader
          lowerTail
          heightHeader
          heightTail
    lowerHeader = head
    4?  跳过 1 -> next 放开，不应该指向4了，因为4不符合条件 1 -> 4的指针应该断开 1是节点，将它的next属性置为null  此时 1 -> lowerHeader -> next 2 -> 2 -> 4-> heightHeader -> ...... ->5
    最后while一下就可以了
    



node源生之支持require 不支持es6写法中的export default
    