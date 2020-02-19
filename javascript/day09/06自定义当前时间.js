{
  function showTime() {
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1 // 0-11
    let day = d.getDate()

    let week = numOfChinese(d.getDay()) // 0-6 0是周日

    let hour = doubleNum(d.getHours())
    let min = doubleNum(d.getMinutes())
    let sec = doubleNum(d.getSeconds())

    // console.log(`${year}/${month}/${day} 周${week} ${hour}:${min}:${sec}`)
    return `${year}年${month}月${day}日 星期${week} ${hour}:${min}:${sec}`
  }

  function numOfChinese(num) {
    let week = ['日', '一', '二', '三', '四', '五', '六']
    return week[num]
  }

  function doubleNum(num) {
    if (num < 10) {
      return '0' + num
    }
    return num
  }

  // showTime()
}