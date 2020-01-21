// 1.打印100以内7的倍数
{
  let i = 1
  let num = null
  while (I <= 100) {
    if (i % 7 === 0) {
      console.log(num)
    }
    i++
  }
}
// 2.打印100以内的奇数
{
  let i = 1
  while (i <= 100) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}
// 3.打印100以内所有偶数和
{
  let i = 1
  let sum = 0;
  while (i <= 100) {
    if (i % 2 === 0) {
      sum += i
    }
    i++
  }
  console.log(sum)
}
/* 
  4.打印图形
  * * * * * 
  * * * * * 
  * * * * * 
  * * * * * 
*/
{
  let i = 1
  while (i <= 4) {
    console.log('* * * * *')
  }
}