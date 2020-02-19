{
  /* 
    验证码: 验证你是否是机器人

      纯数字组成的验证: 非常容易破解 6位数字验证码
      数字和字符组成的验证码:
        0-9 
        A-Z 65-90
        a-z 97-122
      方法:
        1.生成一个数组, 装有所有单个字符, 长度62
          随机0-61下标
        2.随机ASCII码值
  */

  function numTestCode(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
      let num = parseInt(Math.random() * 10)
      // arr.push(num)
      arr[i] = num
    }
    return arr.join('')
  }

  // console.log(numTestCode(6))

  function testCode(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
      let num = parseInt(Math.random() * 123)
      if (num >= 0 && num <= 9) {
        arr[i] = num
      } else if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
        arr[i] = String.fromCharCode(num)
      } else {
        i--
      }
    }
    return arr.join('')
  }

  // console.log(testCode(6))

}