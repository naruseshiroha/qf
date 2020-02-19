{
  /* 
    字符串概念: 所有带单引号双引号
    字符串声明:
      1.通过new运算符去声明字符串
      2.省略new声明字符串
      3.字符串常量赋值
  */
  let str1 = new String(100)
  console.log(str1 + 100)
  console.log(typeof str1)
  let str2 = String(200)
  console.log(str2 + 200)
  console.log(typeof str2)
  let str3 = '123'
  console.log(str3)
  console.log(typeof str3)

  /* 
    访问字符串中的字符:
      字符串.length 访问字符串中字符的个数
      [注] 中文 utf-8(三个字符标识一个汉字) gbk(两个字符标识一个汉字) 在计数时都是当作一个汉字计数

    访问字符串中单个字符:
      字符串.charAt(index) [注] 从0开始
      字符串[index]

    [注] 字符串是只读的, 字符串一旦被声明就没办法修改, 如果非要声明字符串, 我们只能将原字符串销毁, 重新生成新的字符串
    [注] 在JS中, 字符串既是基本数据类型, 有时复合数据类型
  */
  let str = 'hello 京都'
  /* console.log(str.length)
  // console.log(str.charAt(6))
  console.log(str[6])
  str[5] = '爱'
  console.log(str) */

  /* 
    字符串中的字符进行遍历也可以通过循环遍历
  */
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
  }
}