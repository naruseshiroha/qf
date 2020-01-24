{
  /* 
    输出n个hello world
    [注] 不确定的值

    有参数无返回值的函数
    形参: 形式上的参数 [注] 使用起来和普通变量没有区别

    格式:
      function 函数名(形参1, 形参2...) {
        函数体
      }

    调用函数:
      格式: 函数名(实参1, 实参2...)

    传参: 用实参给形参赋值
  */

  function print(n) {
    for(let i = 0; i < n; i++) {
      console.log('hello world!')
    }
  }
}