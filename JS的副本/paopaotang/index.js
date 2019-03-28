// 玩家1 玩家2.....
// object 类
// JSON object 难以完成次job
// 玩家类 es5 没有class 关键字
//大写首字母的函数  构造函数
// 函数可以用来构建类？JSON就可以
// 一个函数首字母大写约束，区别于普通函数，运行的方式 new，这个函数就被称为构造函数
//函数是js里的一等对象，在js里除了基本数据类型之外都是对象，函数是被可以运行的对象
function Player(name){
    // js 函数和其他语言不一样，每个函数内部一定会存在一个this指针，总会指向点什么
    //我们可以吧this想象成为皇帝身边的常在或者答应
    // this 指向实例化后的对象
    // console.log(this);
    this.name=name;
    this.enemy=null;
}
Player.prototype.win = function(){
    console.log(this.name + "win");
    console.log("赢了，真舒服");
}
Player.prototype.lose = function(){
    console.log(this.name + "lose");
    console.log("输了，很不爽")
}
// 将类实例化 类抽象的概念  对象可以被NEW出来
//孕育爱情 new可以想象成为new的对象是另一个对象的孩子 如player1，player2是Player的孩子

// 上线的过程
var player1 = new Player("皮蛋");
console.log(player1.name + "我上线了，过来嗨");
var player2 = new Player("养乐多");
console.log(player2.name + "我也上线了，一起嗨");
//成为对手的过程,来一把
player1.enemy = player2;
player2.enemy = player1;
// 游戏过程及结果
player1.win();
player2.lose();
// console.log(player1.name);

// console.log(player2.name);