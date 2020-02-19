{
  /* 
    1.通过new运算符
    2.通过省略new
    3.对象常量赋值

    对象属性    普通变量
     婚后      婚前
  */
  let obj1 = new Object()
  let obj2 = Object()
  let obj3 = {}

  // 新增属性 使用起来和普通的变量没有任何区别
  /* obj3.name = 'zyy'
  obj3.age = 18 */
  obj3['name'] = 'zyy'
  obj3['age'] = 18

  console.log(obj3)

  // 新增方法 使用起来和普通的函数没有任何区别
  // obj3.sayName = () => console.log(obj3.name)
  obj3['sayName'] = () => console.log(obj3.name)

  // obj3.sayName()
  obj3['sayName']()

  console.log('-----------------')

  // 通过对象常量赋值
  obj3 = {
    'name': 'zyy',
    'age': 18,
    sayName() {
      console.log(this.name)
    }
  }
  obj3.sayName()

  /* 
    delete 对象的属性或方法
  */
  delete obj3.name
  delete obj3.sayName

  // obj3.sayName()
  console.log(obj3)
}
