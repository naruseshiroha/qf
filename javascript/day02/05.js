{
  /* 
    一元运算符
      ++
      a++
        值: ++后置, 先取a的值作为a++表达式的值, 然后再对a进行+1
        功能: 对原有的变量进行+1操作
      ++a
        值: ++前置, 先对a进行+1操作, 再a的值作为++a表达式的值
        功能: 对原有的变量进行+1操作
      a--
        值: --后置, 先取a的值作为a--表达式的值, 然后再对a进行-1
        功能: 对原有的变量进行-1操作
      --a
        值: --前置, 先对a进行-1操作, 再a的值作为--a表达式的值
        功能: 对原有的变量进行-1操作
        
  */

  let a = 5
  // a = a + 1
  // a += 1
  // console.log(a++) // 5
  // console.log(++a) // 6
  console.log(a)

  { // 例子
    let a = 10
    // console.log(a++ + ++a + a + ++a + a++ + a) // 10 + 12 + 12 + 13 + 13 + 14 = 74
    console.log(a-- + --a + a + --a + a-- + a) // 10 + 8 + 8 + 7 + 7 + 6 = 46
  }
}