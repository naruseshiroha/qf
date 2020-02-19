{
  /* 
    match()
      格式: str.match(RegExp)
      功能: 在字符串匹配是否有符合正则
      返回值: 匹配成功, 返回装有匹配到子串的数组
           匹配失败, 返回null
    replace()
      格式: str.replace(oldStr/RegExp, newStr)
      功能: 用newStr替换oldStr
      返回值: 替换成功的新字符串
    split()
      格式: str.split(分割符/RegExp)
      功能: 用分割符将原字符串进行分割
      返回值: 分割剩下的子串组成的数组
    search()
      格式: str.search(子串/RegExp)
      功能: 找到符合条件的子串第一次出现的位置
      返回值:
          找到, 返回下标
          否则, 返回-1
  */
  let str = 'how are aRe Are you!!'
  let reg = /are/ig
  console.log(str.match(reg));


  reStr = str.replace(reg, 'new')
  console.log(reStr);

  srr = str.split(/are/i)
  console.log(srr);

  srr = str.split('')
  console.log(srr);

  sindex = str.search('Are')
  sindex = str.search(/are/i)
  console.log(sindex);
}