{
  /* 
    概念:
      数组: 用一个变量存储一堆数据的数据结构

    数据类型:
      基本数据类型
      特殊数据类型
      复合/引用数据类型
        数组 
  */

  /* 
    声明数组:
      1.通过new创建数组
        参数: 传入任意的数据, 存储到数组中
      2.省略new运算符创建数组

      [注] 上述两种方法, 传入参数只有一个, 并且是数字的时候, 直接声明这么长的一个数组

      3.数组常量进行赋值(JS一般使用中括号[])
  */
  /* let arr = new Array(undefined, null)
  arr = Array(null, 123, undefined)
  arr = [null] */

  // 声明长度为10的数组
  /* let arr = new Array(10)
  arr = Array(10)
  console.log(arr)

  arr = [10]
  console.log(arr) */

  /* 
    数组的属性:
      数组, length 返回数组中元素的个数
      元素: 将数组存储的每一个数据, 叫做数组的元素
      访问数组的元素:
        数组[下标] 下标是从0开始
  */
  let arr = [undefined, null, '', true, 0]
  /* console.log(arr.length)
  console.log(arr[2]) */

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}