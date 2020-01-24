{
  /* 
    循环嵌套: 不是语法
      [注] 代码规范
  */
  let s = ''
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      s += '⭐'
    }
    s += '\n'
  }
  console.log(s)

  /* 
    输出空格 = 5 - 当前行数的⭐数
    &nbsp; 空格 半角空格 一个字符
    &ensp; 空格 半角空格 一个字符

    循环中用于计数的数 下标(index)
    命名: i j k l m ...
  */
  s = ''
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5-i; j++) {
      s += ' '
    }
    for(let k = 1; k <= i; k++) {
      s += '⭐'
    }
    s += '\n'
  } 
  console.log(s)
}