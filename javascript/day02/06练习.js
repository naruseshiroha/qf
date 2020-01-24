{
  // 1.入职薪水10K，每年涨幅入职薪水的5%，50年后工资多少？
  let money = 10000
  money = money + money * 0.05 * 50
  console.log(money)
  // 2.为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
  let total = 89
  let day = parseInt(total / 24)
  let hour = total % 24
  console.log(`${day}天零${hour}小时`)
  // 3.小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。它需要一个程序将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度。\u2028提示：摄氏度与华氏度的转换公式为：摄氏度 = 5/9.0*(华氏度-32)
  let Fahrenheit = 80
  let centigrade = parseFloat(5 / 9 * (Fahrenheit - 32), 2)
  console.log(centigrade, '℃')
  // 4.给定一个三位数，分别把这个数字的百位、十位、个位算出来并显示。
  let num = 233
  let ones = num % 10
  let tens = parseInt(num / 10) % 10
  let hundreds = parseInt(num / 100)
  console.log(hundreds, tens, ones)
}