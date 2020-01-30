{
  /* 
    栈结构:
      栈: 木盆
      结构: 从同一头进, 从同一头出
      特点: 先进后出
  */

  /* 
    数组的两个方法形成栈结构:
      push
        格式: 数组.push(参数1, 参数2...)
        功能: 给数组的末尾添加元素
        返回值: 插完元素后数组的长度
      pop
        格式: 数组.pop()
        参数: 无
        返回值: 取下一个元素
        功能: 从数组末尾取下一个元素
  */

  let arr = [1, null, '', undefined, false]
  let pushRes = arr.push({ 1: '1' }, { 2: 2 }, null)
  console.log(arr)
  console.log(pushRes)

  arr = [1, null, '', undefined, false]
  let popRes = arr.pop()
  console.log(arr)
  console.log(popRes)

  /* 
    队列结构:
      结构: 从末尾进, 从头部出
      特点: 先进后厨

      push

      shift()
        格式: 数组.shift()
        参数: 没有参数
        功能: 从数组的头部取下一个元素
        返回值: 取下的元素

      unshift()
        格式: 数组.unshift(参数1, 参数2...)
        功能: 从数组的头部插入元素
        返回值; 插完元素以后数组的长度
  */
  arr = [1, 2, 3, 4]
  let shiftRes = arr.shift()
  console.log(arr)
  console.log(shiftRes)

  let unshiftRes = arr.unshift({1:4})
  console.log(unshiftRes)
  console.log(arr)

}