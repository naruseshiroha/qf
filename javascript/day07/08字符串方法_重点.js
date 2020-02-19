{
  /* 
    replace()
      格式: supStr.replace(oldStr, newStr)
      功能: 用newStr将oldStr替换掉, 生成新字符串
      参数:
        第一个参数传入的是字符串只能替换一次
        第一个参数 正则表达式
          /xxx/ i/g   i 忽略大小写  g 全局匹配
      返回值: 替换成的新字符串
  */
  let str = 'how are Are you'
  let s1 = str.replace('are', 'old are')
  let s2 = str.replace(/are/ig, 'old are')
  console.log(s1, '-', s2, '\n' + str)

  /* 
    split() 字符串分割
      格式: 字符串.split(分割符, length)
      参数: 
        第一个参数, 用这个分割符对原字符串进行分割
        第二个参数, 控制返回的数组的元素格式, 一般情况下不用
      功能: 用分割符对原字符串, 进行字符串分割, 将分割完毕以后的子串, 放在数组中返回
      返回值: 数组

    注意:
      1.相邻的两个分割符, 会产生空字符串 ''
      2.分割符是空字符串'', 直接将每一个字符, 单独分割成子串, 放在数组中返回
  */
  str = 'how ARE  you'
  s1 = str.split(' ', 2)
  s2 = str.split('')
  let s3 = str.split()
  console.log(s1, '-', s2)
  console.log(s3)

  /* 
    toLowerCase() 字符串转小写
    toUpperCase() 字符串转大写
  */
  s1 = str.toLowerCase()
  s2 = str.toUpperCase()
  console.log(s1, '\n', s2)
}