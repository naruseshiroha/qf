{
  /* 
    join([separator])
    如果一个元素为 undefined 或 null，它会被转换为空字符串。
      参数: 默认','
      返回值: 所有数组元素连接的字符串。如果 arr.length 为0,则返回空字符串。
    
  */
  let arr = [1, true, ' ', undefined, null, new Function()]
  let res = arr.join()
  console.log(res)

  /* 
    reverse() 逆序
      返回值: 颠倒后的数组。
  */
  let revArr = arr.reverse()
  console.log(revArr)

  /* 
    sort([compareFunction]) 数组排序 // 默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
  */
  // let sortArr = arr.sort()
  // console.log(arr)
  arr = [1, 11, 21, 2, 3]
  arr.sort((a, b) => b - a)
  console.log(arr)
}