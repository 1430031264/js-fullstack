const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const local = 'guangxi/gangbei-district';
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getWeatherTips = function(){
  return new Promise((resolve,reject) => {
    superagent.get(weatherUrl)
    .end((err,res) => {
      if(err){
        reject(err);
      }
      const $ = cheerio.load(res.text);
      const $weatherTip = $('.wea_tips');
      //查找某某元素下面的节点  什么节点就在find里面填入响应的节点 加了$这个符号的单词表示一个节点，不单纯是一个普通的变量
      const weatherTip = $weatherTip.find('em').text();
      let threeDaysData = [];
      $('.forecast .days').each((index,dayNode) => {
        const $singleDay = $(dayNode).find('li');
        const day = $singleDay.eq(0).text().trim();
        const weatherText = $singleDay.eq(1).text().trim();
        const temperature = $singleDay.eq(2).text().trim();
        threeDaysData.push({
          day,weatherText,temperature
        })
      })
      resolve({weatherTip,threeDaysData});
    })
  })
}
const getOneData = function(){
  return new Promise((resolve,reject) => {
    superagent.get('http://wufazhuce.com/')
    .end((err,res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)
    })
  })
}
// getWeatherTips()
// .then(tip => {
//   console.log(tip);
// })
//把所有的数据聚合在一起
function getSpiderData(){
  const htmlData = [];
  Promise.all([getWeatherTips(),getOneData()])
  .then(spiderArr => {
    // spiderArr 数组 由promise resolve 出来的数组组成 顺序由all里面的顺序决定
    const [weatherData,oneData] = spiderArr;
    htmlData['weatherTip'] = weatherData.weatherTip;
    console.log(weatherData,oneData);
    sendEmail(htmlData);
  })
}

function sendEmail(htmlData){
  const template=ejs.compile(
      fs.readFileSync(path.resolve(__dirname,'email.ejs'),'utf8',)
  )  
  const html=template(htmlData)
  //发送邮件
  let transporter=nodemailer.createTransport({
      service:'qq',
      port:465,//stmp端口
      secureConnection:true,
      auth:{
          user:'540262639@qq.com',
          pass:'siaiqjmcgnvfbchj'
      }
  })
  transporter.sendMail({
      from:'皮卡丘<540262639@qq.com>',
      to:'540262639@qq.com',
      subject:'邮件',
      html:html
  },
  (err,info)=>{
      if(err){
          console.log(err)
          return false
      }
      console.log('info',info)
  }
  )
}

getSpiderData();
