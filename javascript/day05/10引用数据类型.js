{
  /* 
    基本数据类型
  */
  let num1 = 10
  let num2 = num1
  num2 = 20
  console.log(num1, num2) // 10 20

  /* 
    做饭:
      1.原料准备好
      2.开始做饭
    
    运行程序:
      1.准备运行程序需要用的空间(一旦分配好以后,内存大小没法进行改变了)
      2.开始运行程序
  */

  /* 
    [引用]数据类型
      数组,数组的变量存储的是数组的地址
  */
  let arr1 = [1, 2, 3]
  let arr2 = arr1
  arr2.push('1', '2')
  console.log(arr2, arr1)
  console.log(arr2 === arr1)

  /* 
    concat() 拷贝原数组生成一个新数组
  */
  arr1 = [1, 2, 3, 4]
  arr2 = arr1.concat()
  arr2.push(3, 2)
  console.log(arr2, arr1)
  console.log(arr1 === arr2)
}