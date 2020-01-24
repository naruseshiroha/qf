{
  /* 
    强制类型转换:
      Boolean() 将其他的数据类型强制转换成布尔值
        非0即真
        非''即真

      Number() 将其他的数据类型强制转换成数字
        [注] 只有纯数字字符组成的字符串转数字, 才能转换为数字, 其他都为NaN

      parseInt() 
        1.取整
        2.将别的进制转成十进制, 必须传入字符串

      parseFloat() 取浮点数
  */

  /* 
    52
    二进制 110100
    八进制 64
    十六进制 34
  */
  console.log(parseInt('110100', 2))
  console.log(parseInt('64', 8))
  console.log(parseInt('34', 16))

  console.log(parseFloat('a2.a3.3.a'))
  console.log(parseFloat('2.3.3.a'))

  console.log(parseInt('a23a3a'))
  console.log(parseInt('23.33'))

  console.log(Number('23.3'))
  console.log(Number('23a'))

  // 其他
  console.log(Boolean(NaN))
  console.log(Boolean(null))
  console.log(Boolean(undefined))

  // 字符串
  console.log(Boolean('zyy'))
  console.log(Boolean('23.3'))
  console.log(Boolean(''))

  // 数字
  console.log(Boolean(-2.3)) // true
  console.log(Boolean(0)) // false
  console.log(Boolean(2.3)) // true
  console.log(Boolean(Infinity))
}