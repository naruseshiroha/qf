{
  /* 
    1.写个函数计算所有传入参数相乘的
    2.找出0-100之间7的倍数，和包含7的数，封装函数
    3.弄递归实现1-n内的所有数的乘积，n传入的参数，返回值是所有数的乘积。
    4.有一堆桃子不知数目，猴子第一天吃掉一半，觉得不过瘾，又多吃了一只，第二天照此办法，吃掉剩下桃子的一半另加一只，
    天天如此，到第num(num <= 10)天早上，猴子发现只剩一只桃子了，问这堆桃子原来有多少只？ （思路：n为还剩n天吃完的桃子数）
    5.某个公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下：每位数字都加上5,
    然后用除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换，请编写一个函数，传入原文，输出密文
  */

  function multiply() {
    let sum = 1
    for (let i = 0; i < arguments.length; i++) {
      sum *= arguments[i]
    }
    return sum
  }

  console.log(multiply(1, 2, 3, 4))

  function findSeven() {
    let reg = /7+/
    let res = ''
    for (let i = 1; i <= 100; i++) {
      let s = '' + i
      let f = reg.test(s)
      if (i % 7 === 0 || f) {
        res += `${i}\n`
      }
    }
    return res
  }

  console.log(findSeven())

  function factorial(n) {
    if (n === 1) {
      return 1
    }
    return n * factorial(n - 1)
  }

  console.log(factorial(5))

  function peach(n) {
    if (n === 1) {
      return 1
    }
    return (peach(n - 1) + 1) * 2
  }

  console.log(peach(4))

  function encrypt(num) {
    let s = '' + num
    let one = s.charAt(0)
    let two = s.charAt(1)
    let three = s.charAt(2)
    let four = s.charAt(3)

    one = (5 + parseInt(one)) % 10
    two = (5 + parseInt(two)) % 10
    three = (5 + parseInt(three)) % 10
    four = (5 + parseInt(four)) % 10

    s = '' + four + three + two + one
    return s
  }

  console.log(encrypt(1234))
}