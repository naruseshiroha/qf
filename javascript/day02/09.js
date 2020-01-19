{
  /* 
    与运算
      格式:
        表达式1 && 表达式2
      规律: 只有当两个表达式都为true的时候, 整个表达式才为true
      短路操作: 当表达式1为false的时候, 表达式2就不执行了, 就直接得出结果为false.

    或运算
      格式:
        表达式1 || 表达式2
      规律: 只有当两个表达式都为false的时候, 整个表达式才为false
      短路操作: 当表达式1为true的时候, 表达式2就不执行了, 就直接得出结果为true.

    非运算
      格式:
        !表达式1
      规律: 先将表达式的值自动数据类型转换成布尔值, 在进行取反操作
      [注] 非0即真, 非空即真

    规律:
      1.操作数是一个空字符串, 返回 true;
      2.操作数是一个非空字符串, 返回 false;
      3.操作数是数值 0, 返回 true;
      4.操作数是任意非 0 数值(包括 Infinity), false;
      5.操作数是 NaN, 返回 true;
      6.操作数是 undefined, 返回 true;
  */

  console.log(!'') // true
  console.log(!' ') // false
  console.log(!0) // true
  console.log(!-1) // false
  console.log(!-Infinity) // false
  console.log(!NaN) // true
  console.log(!null) // true
  console.log(!undefined) // true

  console.log('---------------')

  console.log('NaN' === 'NaN' || console.log(number))
  console.log('123' == 123 && console.log('NaN'))
}