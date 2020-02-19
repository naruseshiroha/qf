{
  /* 
    严格模式: 写在哪个作用域下,在哪个作用域下生效
      'uss strict'
    [注] 尽量注意严格模式不要写在全局

    用了严格模式,会有什么变化:
      1.全局变量声明时,必须加var
      2.函数内重名属性
      3.arguments对象不允许被动态改变
      4..新增保留字：implements, interface, let, package, private, protected, public, static, yield
  */

  /* 'use strict'
  var interface = 'interface'
  console.log(interface) */

  /* function show(a,b){
    'use strict'
    a = 10
    console.log(a,b)
    console.log(arguments[0],arguments[1])
  }

  show(1,2) */

  /* function show(){
    'use strict'
    var num = 10 // 强制声明成全局变量
  }

  show()
  console.log(globalThis.num) */

  /* function show(a,a,b){
    'use strict'
    console.log(a,b)
  }

  show() */
  
}