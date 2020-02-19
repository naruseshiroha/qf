{
  /* 
    1.通过new去声明正则表达式
      第一个参数: 正则表达式的主体 字符串
      第二个参数: 修饰符
      i / g
      [注] 修饰符没有顺序

    2.省略new运算符去声明正则表达式

    3.通过常量赋值
  */
  let reg = new RegExp('hello', 'ig')
  reg = RegExp('world', 'i')

  reg = /hello world/ig
  console.log(reg);

  /* 
    只有两个方法
      test
        格式: reg.test(str)
        功能: 在字符串中匹配这个正则是否存在
        返回值: 成功返回true, 否则返回false

      exec
        格式: reg.exec(str)
        功能: 在字符串中匹配这个正则是否存在
        返回值: 返回匹配到的串, 匹配成功, 返回一个装有字符串的数组
                     匹配失败, 返回null
  */
  let str = 'how Are are You?'
  reg = /are/ig
  // console.log(reg.test(str));
  console.log(reg.exec(str), reg.exec(str).length);
  console.log(Object.prototype.toString.call(reg.exec(str)));


}