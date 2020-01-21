{
  /* 
    2.求两个数的最大数
    3.判断一个年份是闰年还是平年
      [注] 能被4整除且不能被100整除, 或者能被400整除
  */

  let num1 = 23, num2 = 32
  if (num1 > num2) {
    console.log(num1)
  } else {
    console.log(num2)
  }

  let year = 1999
  if (year % 4 === 0 && year & 100 != 0 || year % 400 === 0) {
    console.log('闰年')
  } else {
    console.log('平年')
  }

  /* 
    代码规范:
      阅读代码时间要占编写代码时间的10倍
        1.运算符前后
        2.;或者,后面只需要加一个空格
        3.代码缩进
  */
}