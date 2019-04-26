'use strict';
const env = 'dev'

const defaultAlertMessage = '这个页面崩了，你还看个鬼哟，赶紧走开吧，这里不需要你逛该了'

const defaultShareText = {
  en: "iKcamp英语-学英语口语听力四六级"
}

const defalutBarTitle = {
  en:'Kcamp英语学习'
}

const defaultImg = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

var core = {
  env: env ,
  defaultAlertMessage: defaultAlertMessage,
  defaultImg: defaultImg,
  defaultShareText: defaultShareText['en'],
  defalutBarTitle: defalutBarTitle,
  isDev: env === 'dev',//判断当前环境是不是开发环境
  isProduction: env === 'production'//生产环境
}

export default core;