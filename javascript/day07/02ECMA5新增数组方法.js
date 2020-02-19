{
  /* 
    indexOf()
      格式: 数组.indexOf(item[,start])
      参数: Item 任意的数据
          start 下标 默认为0
      功能: 在数组中查找第一次出现item元素下标, 从start开始查找
      返回值: -1 没有查到
           >= 0 查到的元素的下标

  */

  let arr = [1, 2, 3, 4, 5, 4, 3, 1]
  let index = arr.indexOf(3)
  console.log(index)

  /* 
    数组遍历
      for循环
      for...in
      ECMA5新增 forEach(callback(currentValue [, index [, array]])[, thisArg])
        参数: currentValue 数组中正在处理的当前元素
            index 数组中正在处理的当前元素的索引
            array 正在操作的数组
        返回值; undefined

    小彩蛋: forEach 屏蔽了初学者对于循环的理解
  */
  arr = [1, true, '', undefined, null]
  arr.forEach((value, index, array) => console.log(value, index, array))

  /* 
    map 映射
  */
  arr = [1, 2, 5, 6, 9]
  let map1 = arr.map(value => value + 2)
  console.log(map1)

  /* 
    filter 过滤
  */
  let fil = arr.filter(value => value % 2 === 0)
  console.log(fil)

  /* 
    some 某些
    [注] 在数组中查找是否有符合条件的元素, 有返回true, 没有返回false
      短路操作: 只要找到符合条件的元素, 后面的循环就停止了
  */
  let som = arr.some(value => value % 2 === 1)
  console.log(som)

  /* 
    every 每个
    [注] 在数组中查找每一个元素是否符合条件, 符合返回true, 不符合返回false
      短路操作: 只要找到不符合条件的元素, 后面的循环就停止了
  */
  let eve = arr.every(value => value % 2 === 0)
  console.log(eve)

  /* 
    reduce(accumulator, currentValue[, index[, array]])) 归并
      参数: accumulator 累计器
          currentValue 当前值
          index 索引
          array 源数组
  */
 let red = arr.reduce((prev, next, index, array) => {
   console.log(`prev:${prev} next:${next} index:${index} array:${array}`)
   return prev + next
 })

 console.log(red)
}