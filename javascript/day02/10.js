{
  /* 
    流程控制语句:
      顺序结构: 代码自上而下顺序执行
      分支结构/选择结构/条件构造: 要根据不同的条件, 执行不同的操作
      循环结构: 重复去做一件事情
  */

  /* 
    顺序结构:
      题目: 输入两个数, 然后交换这两个数, 再输出他们交换后的结果
  */

  let num1 = 11
  let num2 = 12
  console.log(num1, num2)
  num1 = num1 + num2
  num2 = num1 - num2
  num1 = num1 - num2
  console.log(num1, num2)
}