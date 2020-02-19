{
  /* 
    [注] 所有的参照时间点都是1970年
    Date.parse()
      格式: Date.parse(日期对象)
      功能: 可以将日期对象转成毫秒数
 
    d.getTime()/d.setTime()
      格式: 日期对象.getTime/setTime
      功能: 将当前日期转成毫秒数
  */
  let d = new Date()
  console.log(Date.parse(d))
  console.log(d.getTime())

  d.setTime(1000)
}