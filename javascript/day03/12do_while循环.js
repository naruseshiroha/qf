{
  /* 
    do...while循环(了解即可)
      语法:
        do{
          循环语句;
        }while(循环条件);
      [注] do...while循环后面
  */
  // 1-100的和
  let i = 1
  let sum = 0
  do {
    sum += i
    i++
  } while (i <= 100);
  console.log(sum)

  /* 
    while循环和do_while循环的区别
    1.while循环
      先判断循环条件
    2.do_while循环
      先运行一次循环语句, 再去判断循环条件
  */
 let num = 5
 {
   while (num > 10) {
     console.log('hello')
   }
 }
 {
   do {
     console.log('hello')
   } while (num > 10);
 }
}