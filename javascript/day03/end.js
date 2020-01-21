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
    1.找出所有的水仙花数，三位数，各位立方和等于该数本身。153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3
    
    2.输入两个数，求两个数的最大公约数（能够同时整除两个数的最大数）
      思路：先找出两个数中最小的那个数
    
    3.输入两个数，求两个数的最小公倍数 （能够同时被两个数整除的最小数）
      思路：
      1.先找出两个数中的最大数
      2.最大数++，直到找出能被两个数整除的数(退出循环)
      
    4.输入两个数n，a，如果n==3，a==2；
      输出 2 + 22 + 222 的值。（不用输出式子）
      如果n==4，a==3；
      输出 3 + 33 + 333 + 3333的值。
      思路：
      1.n = 3,相加三次,每次相加比前一次相加的数,多一位
      2.每次多的这个位数的值为a

    5.五位数中，对称的数称为回文数，找出所有的回文数。 如12321
      思路：
      1. 先找出五位数中的第一位和第五位数比较
      2. 在找出五位数中第二位和第四位比较。
  */
  {
    {
      for (let i = 100; i <= 999; i++) {

        let ones = i % 10
        let tens = parseInt(i / 10) % 10
        let hundreds = parseInt(i / 100)
        // console.log(ones,tens,hundreds)
        Math.pow(ones, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3) === i ? console.log(i) : ''
      }
    }

    {
      let a = 1234
      let b = 5678
      a > b ? (a = b, b = a) : null
      let res = 0
      for (let i = 1; i <= a; i++) {
        if (a % i === 0 && b % i === 0) {
          res < i ? res = i : null
        }
      }
      console.log(res)

      let ans = a * b / res
      console.log(ans)
    }

    {
      let n = 3
      let a = 2
      let sum = 0
      let s = ''
      for (let i = 1; i <= n; i++) {
        s += a
        sum += parseInt(s)
        // sum += parseInt(s)
      }
      console.log(sum)
    }

    {
      for (let i = 10000; i < 100000; i++) {
        const yi = parseInt(i / 10000)
        const wu = i % 10
        if (yi === wu) {
          const er = parseInt(i / 1000) % 10
          const si = parseInt(i % 100 / 10)
          if (er === si) {
            console.log(i)
          }
        }
      }
    }

  }
}