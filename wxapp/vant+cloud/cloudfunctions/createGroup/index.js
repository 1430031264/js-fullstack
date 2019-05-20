// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'ybcloud-7emri'//必须的   加了这个环境ID 才能将数据上传到你的云数据库里

cloud.init()
//获取服务器的句柄  相当于指针
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  //这里要加return ,不然会报错
  return await db.collection('group').add({
    //往服务器上添加数据是add 获取数据是get

    //data里面放的是我们在集合里面将要存放的数据
    data:{
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
  .then(res => {
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid:false
      }
    })
  })
}