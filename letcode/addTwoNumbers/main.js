//线性表，也叫链表，带有指针的链表 
function LinkeNode(val) {
  this.val = val;
  this.next = null; //定义初始的下一个结点为null
}

function addTwoNumbers(l1,l2){

}

console.log(addTwoNumbers(a1,b1))

//529
let a1 = new LinkeNode(5); //头结点
console.log(a1);
let a2 = new LinkeNode(2);
let a3 = new LinkeNode(9); //尾结点
a1.next = a2;   //让a1的下一个结点为a2
a2.next = a3;

let b1 = new LinkeNode(7);
let b2 = new LinkeNode(5);
let b3 = new LinkeNode(3);
let b4 = new LinkeNode(1);
b1.next = b2;
b2.next = b3;
b3.next = b4;


let node = a1;//表头
while (node) {
  console.log(node.val);
  node = node.next;
}
 
