const trendings = () => {
  return new Promise((resolve,reject) =>{
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);//请求之中没有做到就reject掉，会调用catch
      }
    })
  })
}

module.exports = {
  trendings,
}