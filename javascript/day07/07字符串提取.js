{
  /* 
    subString
      格式: 字符串.subString(start, end)
      功能: 将字符串中 [start,end) 提取这部分字符, 生成一个新字符串
      返回值: 新生成的字符串

    subStr
      格式: 字符串.subStr(start, length)
      返回值: 新生成的字符串

    slice(数组的)
      格式: 字符串.slice(start, end)
  */
  let str = 'uoaini zyy'
  let s1 = str.substring(7, 10)
  let s2 = str.substr(7, 3)
  let s3 = str.slice(7, 10)
  console.log(s1, s2, s3, s1 === s2, s2 === s3)
}