小游戏的架构
/js  == page 
  负责游戏的一部分 main.js 入口
  支持es6 模块化
  每个模块都是一个类  最新的，
  require  module.exports  es5  commonJS node

  /libs/  game engine
    - adapter.js 适配
    canvas 
    小游戏中不支持DOM BOM 