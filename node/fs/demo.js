// js 的后端用核心模块打理起服务器端开发
// 读文件，先引入js
const fs = require('fs');
// 读一个文件有几步？ js运行在服务器命令行上 找到文件 代码由CPU 内存 a.txt在磁盘文件里
// IO 花时间找文件，打开文件，读取文件，输出到命令行中
// 耗时 callback(回调函数)

// fs.readFile('./a.txt', 'utf-8',(err,data)=>{
//   console.log(data);
//   fs.readFile('./b.txt', 'utf-8',(err,data)=>{
//     console.log(data);
//   })
// })

// 当出现耗时问题时找promise，这是一类问题,
// promise 是耗时问题的包裹
const fileAPromise = new Promise((resolve,reject)=>{
    fs.readFile('./a.txt', 'utf-8',(err,data)=>{
        if(err){
          reject(err);
          return;
        }
         resolve(data);
       })
});
const fileBPromise = new Promise((resolve,reject)=>{
  fs.readFile('./b.txt','utf-8',(err,data)=>{
    if(err){
      reject(err);
      return;
    }
     resolve(data);
  })
})
fileAPromise
  .then(data=>{
    console.log(data);
    return fileBPromise;
  })
  .then(data=>{
    console.log(data);
  })
  .catch(err =>{
    console.log(err);
  })
