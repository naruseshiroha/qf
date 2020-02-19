{
  /* 
    var
    省略var
      直接去强制给一个变量赋值,这个变量会被JS强制声明成全局变量

      [注] 不建议,这属于语法错误 
  */
  function show(){
    // var num = 10
    num = 10 // 
    console.log(num)
  }

  show()
  console.log(num)
}