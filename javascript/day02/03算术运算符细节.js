{
  /* 
    计算机是不会进行小数运算(天生Bug)

    小彩蛋: 金融账户, 只存储整数, 单位是分
  */

  console.log(0.8 - 0.1)

  /* 
    在JS中除数可以为0
  */
  console.log(10 / 0) // Infinity 无穷大
  console.log(-10 / 0) // -Infinity 无穷小

  console.log(Infinity + 'zyy')
  console.log(Infinity - Infinity)
  console.log(Infinity + (-Infinity))
  console.log(Infinity / Infinity)
  console.log(Infinity + NaN)
  
}