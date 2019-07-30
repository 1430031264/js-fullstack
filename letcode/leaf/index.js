
function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

let a1 = new TreeNode(4);
let a2 = new TreeNode(9);
let a3 = new TreeNode(0)
let a4 = new TreeNode(5)
let a5 = new TreeNode(1)
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5

var sumNumbers = function(root) {
  return helper(root, 0)
}
function helper(node,cur) {
  if (node === null) return 0;
  const next = node.val + cur * 10;
  if (node.left ===null && node.right === null) {
    return next; // 叶子结点
  }
  const l = helper(node.left,next);
  const r = helper(node.right,next)
  return l + r
}
console.log(sumNumbers(a1))