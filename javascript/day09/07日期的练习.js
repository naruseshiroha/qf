{
  /* 
    获取两个日期之间相差的天数 
  */

  /* 
    规定,传入日期格式
    '2000-12-12'
    '2000/12/12'
  */
  function countOfDate(d1, d2) {
    let dd1 = new Date(d1)
    let dd2 = new Date(d2)

    let time1 = dd1.getTime()
    let time2 = dd2.getTime()

    let time = Math.abs(time1 - time2)
    return parseInt(time / 1000 / 3600 / 24)
  }

  console.log(countOfDate('2008/08/08', '2019-10-09'))

  /* 
    输入n, 输出n天后的时间
  */
  function afterOfDate(n) {
    let d = new Date()
    let day = d.getDate()
    d.setDate(day + n)
    return d.toLocaleDateString()
    /* let time = d.getTime() + (n * 24 * 60 * 60 * 1000)
    console.log(new Date(time).toLocaleDateString()) */
  }

  console.log(afterOfDate(2))
  console.log(afterOfDate(5))
}