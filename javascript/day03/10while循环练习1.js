{
  // 1.求 1-100 的和
  let i = 1;
  let sum = null;
  while (i <= 100) {
    sum += i
    i++
  }
  console.log(sum)

  // 5.求出1-1/2+1/3-1/4+...-1/100的和
  let d = 1
  let total = null
  while (d <= 100) {
    if (d % 2 === 1) {
      total += 1 / d
    } else {
      total -= 1 / d
    }
    d++
  }
  console.log(total)

  // 6.打印出1000-2000年中所有的闰年, 并以每行四个数的形式输出
  let y = 1000
  var s = ''
  while (y <= 2000) {
    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
      s = s + y + ' '
    }
    if (s.length === 20) {
      console.log(s)
      s = ''
    }
    if (y === 2000) {
      console.log(s)
      s = null
    }
    y++
  }
}