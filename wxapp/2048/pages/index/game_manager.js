const Grid = require('./grids.js');

function GameManager(size,startTiles = 2){
  this.size = size;
  this.startTiles = startTiles;
}

GameManager.prototype = {
  //负责游戏的启动
  setup(){
    this.grid = new Grid(this.size);
    this.addStartTiles();//在游戏开始的时候先自动填入两个方块
    return this.grid.cells;
  },
  //增加初始的方块的方法
  addStartTiles(){
    for(let tile = 0; tile < this.startTiles; tile++){
      this.addRandomTiles();
    }
  },
  //随机增加方块  
  addRandomTiles(){
    if(this.grid.cellAvailable()){
      const value = Math.random() < 0.6 ? 2:4;
      //随机找 一个位置
      //会得到一个x y 坐标
      const cell = this.grid.randomAvailableCell();
      const tile = {
        x:cell.x,
        y:cell.y,
        value:value
      }
      //插入新的模块
      this.grid.insertTile(tile);
    }
    
  }
  
}

module.exports = GameManager;