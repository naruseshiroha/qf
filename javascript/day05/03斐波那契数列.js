{
  /* 
        一月兔    二月兔    三月兔    四月兔
    一月   1       0      0       0
    二月   0       1      0       0
    三月   0       0      1       0
    四月   1       0      0       1
    五月   1       1      0       1
    六月   1       1      1       1
    七月   2       1      1       2
    八月   3       2      1       3
  */
  /* 
    递归:
      方法:
      1.首先去找临界值, 即无需计算, 获得的值
      2.找这一次和上一次的关系
      3.假设当前函数已经可以使用, 调用
  */
  function rabbit(n) {
    if (n < 4) {
      return 1
    }
    return rabbit(n - 1) + rabbit(n - 3)
  }

  console.log(rabbit(10))
}