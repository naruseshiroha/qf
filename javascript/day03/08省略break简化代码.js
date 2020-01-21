{
  /* 
    输入月份, 显示当月的天数
      要求: 1.利用case穿透简化代码
  */

  let year = 2000
  let month = 2
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log('31')
      break
    case 4:
    case 6:
    case 9:
    case 11:
      console.log('30')
      break
    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log('29')
      } else {
        console.log('28')
      }
    default:
      break;
  }

  /* 
    问题: 输入年 月 日, 计算这一天是该年的第几天
  */
  let y = 2001
  let m = 12
  let d = 31
  let total = null
  switch (m-1) {
    case 11:
      total += 30
      // break;
    case 10:
      total += 31
      // break;
    case 9:
      total += 30
      // break;
    case 8:
      total += 31
      // break;
    case 7:
      total += 31
      // break;
    case 6:
      total += 30
      // break;
    case 5:
      total += 31
      // break;
    case 4:
      total += 30
      // break;
    case 3:
      total += 31
      // break;
    case 2:
      if(y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        total += 29
      } else {
        total += 28
      }
      // break;
    case 1:
      total += 31
      // break;
    default:
      total += d
      break;
  }

  console.log(total)
}