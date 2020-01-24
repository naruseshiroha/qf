{
  /* 
    1.算术运算符
      + - * / %
  */

  /* 
    let num = 5
    alert(num % 3) 
  */

  /* 
    [注] 将不同数据类型进行算术运算
    自动数据类型转换: 不同数据类型之间是没办法进行运算, 将数据转换成同一数据类型, 再进行计算 
      1.其中有一个操作数必须是字符串, 运算符必须是+号, 别的数据类型转换成字符串, 进行字符串拼接
      2.任何数据和字符串做+号以外的操作, 那么字符串要先转换成数字再去进行运算
        <1>如果字符串是一个纯数字字符组成的字符串, 转成对应的数字
        <2>如果字符串中含有数字以外的别的字符串, 转成NaN, NaN和任何数据运算都是NaN
      3.除字符串以外的数据, 在进行算术运算的时候, 先转成数字, 再进行运算  
  */


  console.log(10 + true) // true => 1
  console.log(10 + false) // false => 0
  console.log(10 - null) // null => 0
  console.log(10 - undefined) // undefined => NaN
  console.log(10 - NaN)

  console.log(100 - '20a')
  console.log(100 - '20')

  console.log('hello' + 100)
  console.log('hello' + true)
  console.log('hello' + null)
  console.log('hello' + undefined)
  console.log('hello' + NaN)

  console.log('hello' + 'world')

}