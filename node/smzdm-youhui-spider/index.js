
const request = require('request');//发送请求
const cheerio = require('cheerio');//快速选中节点
cheerio.prototype.removeTagText = function() {
  const html = this.html();//this是我们选择器选择的节点
  //<span>13548</spam>
  return html.replace(/<.*>.*<\/.*>/g,'')  // 正则表达式 /<.*>.*<\/.*>/g  //表示正则表达式 .*表示所有东西 g为全局
}

request('https://www.smzdm.com/youhui/',(err,res)=>{
  if(!err){
    const body = res.body;
    const $ = cheerio.load(body,{
      decodeEntities:false//要不要对entity解码
    })
    $('.list.list_preferential').each(function(){
      const price = $('.itemName .red',this).text().trim();

      //js innerHTml
      //<span></span>
      //</></i>
      let title = $('.itemName a',this).removeTagText();
      const img = $('img',this).attr('src');
      const desc = $('.lrInfo',this).text().trim();
      console.log({
        title,
        price,
        img,
        desc
      })
    });
  }
})
