var Bounce = function(salary){
  this.salary = salary
}
Bounce.prototype.setStrategy = function (strategy){
  this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
  return this.strategy.calculate(this.salary);
}
//面向对象的世界，敢于创建很多对象，策略对象
// 实现了接口，可以互换使用，这就是策略模式
function PerformanceS(){
}
PerformanceS.prototype.calculate = function(salary){
  return salary * 5
}

function PerformanceA(){
}
PerformanceA.prototype.calculate = function(salary){
  return salary * 3
}

function PerformanceB(){
}
PerformanceB.prototype.calculate = function(salary){
  return salary * 2
}
2345
function PerformanceC(){
}
PerformanceC.prototype.calculate = function(salary){
  return salary * 1
}

function PerformanceD(){
}
PerformanceD.prototype.calculate = function(salary){
  return salary 
}
//面向对象
const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce())

const bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceA);
console.log(bounce2.getBounce())

const bounce3 = new Bounce(5000);
bounce3.setStrategy(new PerformanceB);
console.log(bounce3.getBounce())

const bounce4 = new Bounce(5000);
bounce4.setStrategy(new PerformanceC);
console.log(bounce4.getBounce())

const bounce5 = new Bounce(5000);
bounce5.setStrategy(new PerformanceD);
console.log(bounce5.getBounce())