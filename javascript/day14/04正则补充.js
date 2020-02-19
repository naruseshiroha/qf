{
  /* 
    替代字符 |
  */
  let str = 'google'
  let reg = /google|baidu|bing/
  console.log(reg.test(str));

  /* 
    修饰符
      i   忽略大小写
      g   全局匹配
      m   换行匹配
      [注] 如果在字符串, 遇到换行, 重新开始计算行首
  */

  str = '1.bai23du\n2.goo23gle\n3.bi23ng'
  reg = /^\d/gm
  console.log(str.replace(reg, '*'));

}