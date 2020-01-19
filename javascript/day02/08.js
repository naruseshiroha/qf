{
  /* 
    赋值运算符: =

    关系运算符:
      > < >= <= == != === !==
      [注] 值,绝对是布尔值

    自动数据类型转换:
      一.和其他运算符一样, 当关系运算符操作非数值时要遵循一下规则:
        <1>两个操作数都是数值, 则数值比较;
        <2>两个操作数都是字符串, 则比较两个字符串对应的字符编码值;
          ASCII码表: 是电脑内部, 每一个字符和字符对应编码的一张表
          (1)如果是两个单字符进行比较, 直接比较字符的ASCII码值
          (2)逐位, 进行比较
        <3>两个操作数有一个是数值, 则将另一个转换为数值, 再进行数值比较;
      二.在相等和不等的比较上, 如果操作数是非数值, 则遵循一下规则:
        <1>一个操作数是布尔值, 则比较之前将其转换为数值, false 转成 0, true 转成 1;
        <2>一个操作数是字符串, 则比较之前将其转成为数值再比较;
        <3>一个操作数是 NaN, 则==返回 false, !=返回 true; 并且 NaN 和自身不等;
        <4>===恒等, 必须数字和数据类型都相等, 返回 true, 否则返回 false;
  */

  /* 
    小彩蛋
  */
  console.log(null == undefined) // true
  console.log(null === undefined) // true
  console.log(Number(null), Number(undefined)) // 0 NaN

  console.log(10 === Number('10')) // true

  console.log(null == undefined)
  console.log(NaN == NaN)

  console.log(10 == '10')
  // console.log(10 === '10') // false   

  console.log(1 == true)
  // console.log(1 === true) // false
  console.log(0 == false)

  console.log('a' > 'A')
  console.log('abc' > 'adb')
}