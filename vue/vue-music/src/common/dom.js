let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  //let in 对象   let on 数组
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
}) ()



export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  //chatAt() 返回字符串的第几个字符  toUpperCase 把字符串转为大写   substr(start,length) 抽取从start开始指定数量的字符
  return vendor + style.charAt(0).toUpperCase().substr(1)
}