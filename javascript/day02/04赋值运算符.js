{
  /* 
    普通赋值运算符: =
      功能: 将 = 右边的值, 赋值给 = 左边的变量
    复合赋值运算符
      += -= ... %=
  */

  let num = null

  num = 10
  // num = num + 13
  num += 13 // 上述表达式的简写
  console.log(num)


  num = 10 + 13
  num = num + 210
  console.log(num)
}