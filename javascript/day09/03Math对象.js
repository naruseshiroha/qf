{
  /* 
    在JS中一切皆对象

    [注] 在JS, 很多关系数学运算的函数, 直接一个Math对象提供

    [注] 查阅文档
    ■Math.random() //返回0-1之间的随机数
    ■Math.max(num1, num2) //返回较大的数
    ■Math.min(num1, num2)  //返回较小的数
    ■Math.abs(num)  //绝对值
    ■Math.round(num)  //四舍五入(成整数,只看小数点后一位)
    ■Math.ceil(19.3)  //向上取整
    ■Math.floor(11.8)  //向下取整
    ■Math.pow(x,y)  //x的y次方
    ■Math.sqrt(num)  //开平方

    传入的参数: 弧度
    ■Math.sin()  //正弦
    ■Math.cos()  //余弦
    ■Math.tan()  //正切

    Math.PI = 180弧度
    1弧度 = Math.PI / 180
  */
  console.log(Math.max(1, 2, 3, 4, 5))
  console.log(Math.min(1, 2, 3, 4, 5))
  console.log(Math.abs(-1))
  console.log(Math.round(1.49))
  console.log(Math.ceil(3.1))
  console.log(Math.floor(3.9))
  console.log(Math.pow(2, 4))
  console.log(Math.sqrt(3))
}