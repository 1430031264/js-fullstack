function Animal(name) {
  this.name = name
  this.sleep = function() {
    return this.name + '睡着了'
  }
}

Animal.prototype.eat = function(food) {
  return this.name + '正在吃' + food
}

/*
// 原型链的继承
function Cat() {}
Cat.prototype = new Animal() // 将Animal 的实例放到Cat 的原型链上，就能让cat 继承animal 的属性和方法
Cat.prototype.name = 'cat'
var cat = new Cat()
console.log(cat.name)
console.log(cat.eat('fish'))
console.log(cat.sleep())
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
*/

/*
// ----  构造函数的继承
function Cat2(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
var cat2 = new Cat2('vn')
console.log(cat2.name) //vn
console.log(cat2.sleep()) // vn睡着了
console.log(cat2 instanceof Cat2) // true
console.log(cat2 instanceof Animal) // false 
// 原因： 因为Cat 只是吧作用域指向了animal的作用域里面，
// 让Cat 的实例能访问animal里面的方法，但是，Cat 的原型链并没有继承
// 了animal的属性和方法，所以Cat 的实例 不是 Animal的实例
console.log(cat.__proto__)
console.log(Animal.prototype)*/

/*
// ----   组合继承（让上文的console.log(cat2 instanceof Animal)为true）
function Cat3(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
// 组合继承其实就是 原型链继承 + 构造函数继承
Cat3.prototype = new Animal()
var cat3 = new Cat3()
console.log(cat3.name) // tom
console.log(cat3.sleep()) // tom睡着了
console.log(cat3 instanceof Cat3) // true
console.log(cat3 instanceof Animal) // true */


// -----  寄生组合继承
function Cat4(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
// 一个没有实例方法的类，如何继承？

(function () {
  // 创建一个没有实例方法的类
  var Super = function () {}
  Super.prototype = Animal.prototype
  Cat4.prototype = new Super()
})()
var cat4 = new Cat4()
console.log(cat4.name) // tom
console.log(cat4.sleep()) // tom睡着了
console.log(cat4 instanceof Cat4) // true
console.log(cat4 instanceof Animal) // true