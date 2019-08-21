const Schedule = require('node-schedule')
// 指定固定时间运行
// const date = new Date(2019,07,21,16,39,20)
// Schedule.scheduleJob(date, () => {
//   console.log('执行了')
// })

// 每天固定时间运行
// let rule = new Schedule.RecurrenceRule();
// rule.dayOfWeek = [0,1,2,3,4,5,6]
// rule.hour = 16
// rule.minute = 29
// let j = Schedule.scheduleJob(rule,function(){
//   console.log('执行了')
// })