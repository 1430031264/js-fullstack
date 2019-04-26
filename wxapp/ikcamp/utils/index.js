import config from './config'
import * as Mock from './mock'

let util = {
  idDev: config.idDev,
  log() {
    this.idDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    c
    if ('object' === typeof content) {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.show({
      title: title,
      content: content,
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorageData({
      key: key,
      data: value,
      success() {
        cb && cb()
      }
    })
  },
  getStorageData(key, cb) {
    wx.getStorageData({
      key: key,
      success(res) {
        cb && cb(res.data);
      }
    })
  },
  request(opt) {
    let { url, data, header, method, dataType, mock = false } = opt;//相当与let url = opt.url..
    let self = this;
    return new Promise((resolve, reject) => {
      if (mock) {//开发环境使用的方法
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data);
        } else {
          self.alert('提示', res);
          reject(res);
        }
      } else { //生产环境使用的方法
        wx.request({
          url: url,
          data: data,
          header: header,
          method: method,
          dataType: dataType,
          success(res) {
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data);
            } else {
              self.alert('提示', res);
              reject(res);
            }
          },
          fail(err){
            self.log(err);
            self.alert('提示',err);
            reject(err);
          }
        })
      }
    })
  }
}

export default util