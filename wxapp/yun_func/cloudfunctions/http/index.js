// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')//引用一个库，用于发送http请求

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get');
  let postResponse = await got('httpbin.org/post',
  {
    method: 'POST',/* 秘密 */
    header: {
      'Content-Type':'application/json' /*内容类型 header  http请求的头返回值为json*/
    },
    body: JSON.stringify({
      title:'带个朋友回家',
      value:'梦梦'
    })
  })
  return postResponse.body
}