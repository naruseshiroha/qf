{
  /* 
    1.一个新入职，月工资为2000元的员工，每年涨上一年年工资5%，到20年时的月工资是多少？
    2.山上有一口缸可以装50升水，现在有15升水。老和尚叫小和尚下山挑水，每次可以挑5升。问：小和尚要挑几次水才可以把水缸挑满？通过编程解决这个问题。
    3.打印100–200之间所有能被3或者7整除的数
    4.计算10的阶乘   (1*2*3*4*5*6*7*8*9*10   n的阶乘1*2……*n)
    5.计算1+3+5+...+99的和
    6.99乘法表 *
    7.判断一个数是不是合数。(指自然数中除了能被1和本身整除外，还能被其他的数整除（不包括0的数。)
    8.判断一个数是不是质数。(除了1和它本身以外不再有其他的除数整除。)
    9.求出1-1/2+1/3-1/4…..1/100的和
  */
  {
    let salary = 2000
    for (let i = 0; i < 20; i++) {
      salary = salary + salary * 0.05
    }
    console.log(1, salary)

    let water = 15
    let time = null
    while ((water += 5) <= 50) {
      time++
    }
    console.log(2, time)

    for (let i = 100; i <= 200; i++) {
      if (i % 3 === 0 || i % 7 === 0) {
        console.log(i)
      }
    }

    let sum = 1
    for (let i = 1; i <= 10; i++) {
      sum *= i
    }
    console.log(4, sum)

    sum = null
    for (let i = 1; i <= 100; i += 2) {
      sum += i
    }
    console.log(5, sum)

    let str = ''
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= i; j++) {
        str += `${j}*${i}=${i * j} `
      }
      str += '\n'
    }
    console.log(str)

    let n = 4
    let flag = false
    console.log(Math.sqrt(121))
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n !== 2 && n % i === 0) {
        flag = true
        break
      }
    }
    flag ? console.log('合数') : console.log('非合数')

    let m = 233
    flag = true
    for (let i = 2; i <= Math.sqrt(m); i++) {
      if (m % 2 === 0) {
        flag = false
        break
      }
    }
    flag ? console.log('质数') : console.log('非质数')

    sum = 0
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 1) {
        sum += 1 / i
      } else {
        sum -= 1 / i
      }
    }
    console.log(sum)
  }

  /* 
    国王, 奖励发明国际象棋的大师, 大师说, 我们要麦子, 国际象棋一共有64格,
    第一个放一粒麦子, 后面的格放前面格的双倍, 当棋盘被放满的时候, 要这么多粮食
  */

  let num = 1
  let sum = 0
  for (let i = 1; i <= 64; i++) {
    sum += num
    num *= 2
  }
  console.log(sum)
}