{
  /* 
    生成13位条形码(对之前的知识综合练习)
      Ean-13码规则：第十三位数字是前十二位数字经过计算得到的校验码。
    例如：690123456789
    第三位计算其校验码的过程为：
    @前十二位的奇数位和6+0+2+4+6+8=26
    @前十二位的偶数位和9+1+3+5+7+9=34
    @将奇数和与偶数和的三倍相加26+34*3=128
    @取结果的个位数：128的个位数为8
    @用10减去这个个位数10-8=2
    所以校验码为2（注：如果取结果的个位数为0，那么校验码不是（10-0=10），而是0）实现方法ean13（）计算验证码，输入12位条码，返回带验证码的条码。
    例如：输入：692223361219输出：6922233612192
  */

  function ean13(num) {
    let arr = []
    while (num) {
      arr.unshift(num % 10)
      num = parseInt(num / 10)
    }
    let odd = 0
    let even = 0
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        odd += arr[i]
      } else {
        even += arr[i]
      }
    }
    let sum = odd + even * 3
    let end = 10 - sum % 10
    end === 10 ? end = 0 : null
    arr.push(end)
    return (Number(arr.join('')))
  }

  console.log(ean13(692223361219))
}