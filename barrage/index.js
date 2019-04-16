let data = [
  {value:'你唱歌的样子好像...',time:20,color:'blue',speed:1,fontsize:22},
  {value:'你怎么那么像...',time:21,color:'black',speed:1,fontsize:22},
  {value:'鸡你太美',time:22,color:'red',speed:1,fontsize:25},
  {value:'wait,wait,wait.....wait,wait,wait',time:23,color:'green',speed:1,fontsize:30}
]

//获取到所有的dom元素
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

class CanvasBarrage{
  constructor(canvas,video,opts = {}){
    if(!canvas || !video){
      return;
    }
    console.log(this)

    //挂载我们需要的东西到this上
    this.video = video;
    this.canvas = canvas;
    this.canvas.width = video.width;
    this.canvas.height = video.height;

    this.ctx = canvas.getContext('2d');/*创建一个2D的画布 */

    //设置默认值,作用是如果没有传入参数的话，就使用该值
    let defOpts = {
      color:'#e91e63',
      speed:1.5,
      opacity:0.5,
      fontsize:20,
      data:[]
    }
    //合并对象，全部挂载到this实例上
    Object.assign(this,defOpts,opts)/*合并对象 */

    //定义一个开关变量，用来判断播放状态，ture是默认暂停
    this.isPaused = true;
    //得到所有弹幕消息
    this.barrages = this.data.map(item => new Barrage(item,this));
    //渲染
    this.rander()
  }
  //function rander(){}
  rander(){
    this.clear()
    //渲染弹幕
    this.randerBarrage()
    //如果没有暂停的话，就继续渲染
    if(this.isPaused === false){
      //通过raf渲染动画,递归进行渲染
      requestAnimationFrame(this.rander.bind(this))
    }
  }
  clear(){
    //清除整个页面
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
  }
  randerBarrage (){
    //根据事件和弹幕展示的事件比较，判断是否展示弹幕
    let time = this.video.currentTime

    //遍历所有弹幕，每一个barrage都是Barrage的实例
    this.barrages.forEach(barrage => {
      //只有在视频播放的时间大于等于当前弹幕的展示时间才做处理
      if(!barrage.flag && time >= barrage.time){
        //判断当前弹幕是否已经初始化了
        if(!barrage.isInit){
          barrage.init();
          barrage.isInit = true;
        }
        //弹幕需要右往左渲染，所以只需要将X轴左边减去当前弹幕的speed即可
        barrage.x -= barrage.speed
        barrage.rander()
        //如果弹幕的X轴坐标小于自身的宽度，代表渲染结束了
        if(barrage.x < -barrage.width){
          barrage.flag = true;
        }
      } 
    });
  }
}

//只针对于弹幕    创建Barrage类，用来实例化每一个弹幕元素
class Barrage {
  constructor (obj,ctx){
    this.value = obj.value;/**弹幕的内容 */
    this.time = obj.time;/**弹幕出现的时间 */

    //把obj ctx 这两个参数够挂载到this上，目的是方便获取
    this.obj = obj;
    this.context = ctx;
  }

  //定义 初始化弹幕
  init(){
    //如果数据没有涉及到下面的四种参数，就直接取默认参数
    this.color = this.obj.color || this.context.color;
    this.speed = this.obj.speed || this.context.speed;
    this.opacity = this.obj.opacity || this.context.opacity;
    this.fontsize = this.obj.fontsize || this.context.fontsize;

    //为了计算每个弹幕的宽度 我们来创建一个元素p  然后计算文字的宽度
    let p = document.createElement('p');
    p.style.fontsize = this.fontsize + 'px';
    p.innerHTML = this.value;
    document.body.appendChild(p);

    this.width = p.clientWidth;/*一个获取元素自身宽度的API */
    document.body.removeChild(p);

    //设置弹幕出现的位置
    this.x = this.context.canvas.width;
    this.y = this.context.canvas.height * Math.random();

    //弹幕超出范围的处理
    if(this.y < this.fontsize){
      this.y = this.fontsize;
    }else if(this.y > this.context.canvas.height - this.fontsize){
      this.y = this.context.canvas.height - this.fontsize;
    }
  }
  //渲染每一条弹幕
  rander(){
    //设置画布文字的字号和字体
    this.context.ctx.font = `${this.fontsize}px Arial`;
    //设置画布文字颜色
    this.context.ctx.fillStyle = this.color;
    //绘制文字
    this.context.ctx.fillText(this.value,this.x,this.y)
  }
}

//创建CanvasBarrage的实例
let canvasBarrage = new CanvasBarrage(canvas,video,{data});
//设置video的play事件来调用anvasBarrage里面的render 当视频开始播放的时候，执行
video.addEventListener('play',() => {
  canvasBarrage.isPaused = false;
  canvasBarrage.rander();//触发弹幕

})