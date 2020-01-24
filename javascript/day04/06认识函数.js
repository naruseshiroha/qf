{
  /* 
    忍术 => JS的函数(程序员写的)
    结印发动忍术 => 调用函数(函数才会执行)
  */

  /* for (let i = 0; i < 10; i++) {
    console.log('hello world!')
  }
  for (let i = 0; i < 10; i++) {
    console.log('hello world!')
  } */

  print()

  /* 
    函数的语法:
    函数声明: (无参数, 无返回值)
      function 函数名(){
        函数体(具体要执行的代码)
      }
    [注] 见名思意, 函数名必须体现其功能

    函数调用:
      格式: 函数名()

    作用:
      * 使程序变得简短而清晰
      * 有利于程序维护
      * 可以提高程序开发效率
      * 提高了代码的重用性(复用性)
  */
  function print() {
    for (let i = 0; i < 10; i++) {
      console.log('hello world!')
    }
  }
}