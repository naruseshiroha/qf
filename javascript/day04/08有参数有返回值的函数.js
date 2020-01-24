{
  /* 
    求两个数的和

    封装函数步骤:
      1.分析不确定值
      2.将不确定值声明成形参
      3.函数名和形参名都要见名思意
  */

  /* 
    程序员可能对函数运行的结果有不同的处理方式
    [注] 我们不嫩将函数运行的结果写在函数里面
  */

  /* 
    return 关键字
    有参数有返回值的函数:
      格式:
        function 函数名(形参1, 形参2...) {
          函数体
          return 表达式
        }
    [注] return 后面写什么的表达式, 函数调用的结果就是return后面表达式的值
    [注] 函数运行的时候, 如果遇到return关键字, 整个函数会终止
  */
  function add(num1, num2) {
    // 复杂的代码
    return num1 + num2
  }

  let ans = add(123,210)
  console.log(ans)

  function fn() {
    console.log(1)
    return
    // 
    console.log(2)
  }
}