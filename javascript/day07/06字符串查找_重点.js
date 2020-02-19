{
  /* 
    indexOf()
      格式: supStr.indexOf(subStr, start)
      参数; 第一个参数, 查找的字符串
          start 从哪个下标开始去查找, 如果不传入, 默认下标从0开始
      功能: 在supStr中查找subStr第一次出现的位置, 从start这个位置开始查找
      返回值: -1 说明没有查找到
  */
  /* let supStr = 'abcdabc'
  let subStr = 'abc'
  let index = supStr.indexOf(subStr, 1)
  console.log(index) */

  /* 
    lastIndexOf()
      格式: supStr.lastIndexOf(subStr, start)
      功能: 在supStr中查找subStr最后一次出现的位置
      参数: 第二个参数时开始查找的位置, 查找的下标是从右往左数
      返回值: -1 说明没有查找到
  */
  /* let supStr = 'abcdabc'
  let subStr = 'abc'
  let index = supStr.lastIndexOf(subStr)
  console.log(index) */

  /* 
    search()
      格式: supStr.search(subStr)
      参数: 字符串/正则表达式
      功能: 在supStr中查找subStr最后一次出现的位置
      返回值: -1 说明没有查找到

    正则表达式:
      修饰符: i 忽略大小写 g 全局匹配
  */
  let supStr = 'Abcdabc'
  let subStr = /abc/i

  let index = supStr.search(subStr)
  console.log(index)

  /* 
    concat() 字符串拼接
  */
  let s1 = 'uoaini'
  let s2 = ' lly'
  let s3 = s1.concat(s2)
  let s4 = s1 + s2
  console.log(s3, s4, '\n', s3 === s4)

}