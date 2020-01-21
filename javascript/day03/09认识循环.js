{
  /* 
    输出5个hello world
  */
  /* console.log('hello world')
  console.log('hello world')
  console.log('hello world')
  console.log('hello world')
  console.log('hello world') */

  /* 
    认识循环: 重复去做一件事情

    三种语法:
      while循环
      do_while循环
      for循环
    
    while循环:
      格式:
        while(循环条件){
          循环语句;
        }
      执行: 如果循环条件成立就执行循环语句, 直到循环条件不成立为止

      使用循环的好处:
        1.代码整洁
        2.代码没有冗余
        3.后期维护方便
      
      写循环的步骤:
        1.确定循环的次数
          [注] 循环条件, while()可以写任意的表达式, 最后都会自动数据类型转换成布尔值
          [注] 不能让循环条件永远成立, 会造成死循环
        2.确定每一次循环要执行的代码
  */
 let i = 0
 while (i < 10) {
   console.log('hello world!')
   i++
 }
}