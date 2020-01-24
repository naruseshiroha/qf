{
  /* 
    [注] 每一个函数内部都有一个arguments, 系统内置的

    [注] arguments是用来存储实际传入的参数

      属性:
        arguments.length 输出当前里面存储的参数个数
      访问某一个数据:
        arguments[下标]
        [注] 下标是从0开始
      
    [注] 优先使用形参, 除非特殊情况
  */

  {
    /* function show() {
      console.log(arguments.length)
      console.log(arguments[1])
    }

    show(null, '', undefined) */

    /* 
      例子: 求传入任意个数的和?
    */
    function sum() {
      console.log(arguments.length)
      let res = 0
      for (let i = 0; i < arguments.length; i++) {
        res += arguments[i]
      }
      return res
    }

    console.log(sum(1, 2, 3, 4))
  }
}