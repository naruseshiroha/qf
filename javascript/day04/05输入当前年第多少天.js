{
  // 问题: 输入年 月 日, 计算这一天是该年的第几天
  let y = 1999
  let m = 0
  let d = 12
  let total = null
  switch (m - 1) {
    case 11:
      total += 30
    case 10:
      total += 31
    case 9:
      total += 30
    case 8:
      total += 31
    case 7:
      total += 31
    case 6:
      total += 30
    case 5:
      total += 31
    case 4:
      total += 30
    case 3:
      total += 31
    case 2:
      if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        total += 29
      } else {
        total += 28
      }
    case 1:
      total += 31
    default:
      total += d
      break;
  }

  console.log(total)
  // Math.ceil() 向上取整
  console.log(Math.ceil(total / 7))
}