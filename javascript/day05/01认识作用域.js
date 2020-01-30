{
  /* 
    任何程序在执行的时候都要占用内存空间内, 函数调用的时候也要占用内存空间

    垃圾回收机制: 调用函数的时候, 系统会分配对应的空间给这个函数使用(空间大小一般情况由这个函数里声明的变量和形参决定)
            当函数使用完毕以后, 这个内存空间要释放, 还给系统

    [注] 在函数内部声明的变量和形参是属于当前函数的内存空间里的

    内存管理机制: 在函数中声明的变量和形参, 会随着函数的调用被创建, 随着函数的调用结束而被销毁
            在函数中声明的变量和形参, 有效范围是当前函数(当前函数的大括号), 作用域, 局部作用域
  */
  /* let a = 2
  function show() {
    a++
    console.log(new Date(), a)
  }

  show()
  show()
  console.log(a) */

  /* function show() {
    let a = 2
    a++
    console.log(new Date(), a)
  }

  show()
  show()
  console.log(new Date(), a) */

  var a = 10, b = 20
  function show(a) {
    var b = 100
    a += 5
    console.log(new Date(), a, b)
  }

  show(a) // 15 100

  console.log(new Date(), a, b) // 10 20
}