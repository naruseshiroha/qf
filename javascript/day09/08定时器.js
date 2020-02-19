{
  /* 
    定时器
      格式: let timer = setInterval(Function, 毫秒数)
      功能: 每隔对应的毫秒数, 执行一次传入的函数
      返回值: 启动定时器的,系统分配的编号

      clearInterval(timer) 取消定时器

      没有名字的函数叫做匿名函数
      setInterval(() => {
        // ...
      }, 毫秒数)
  */

  let i = 0
  let timer = setInterval(() => {
    if (i === 7) {
      clearInterval(timer)
    }
    console.log(i++)
  }, 1000)
}