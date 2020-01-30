// 创建Person类
class Person {
  private name = 'zyy'
  protected age = 18
  say() {
    console.log('my name is ' + this.name, + ', age is ' + this.age);
  }
}

// 创建Person的实例
// let p = new Person()
// p.say()
// private属性只能在类的内部进行访问
// console.log(p.name); // 当一个类成员变量没有修饰的时候, 外界是可以进行访问的, 默认就是public进行修饰

// 创建Child子类
// 一旦父类将属性定义成private之后, 子类就不可以进行访问了
// 父类的属性定义成protected之后, 可以在子类里面进行访问
class Child extends Person {
  callParents() {
    console.log(super.age);
    super.say()
  }
  static test(){
    console.log('test');
  }
}

let c = new Child()
c.callParents()
// console.log(c.age); // 子类继承了父类, 但是没有办法直接获取到父类私有的属性或者受保护的属性
console.log(c.say); // 子类继承了父类, 子类就可以访问到父类的公开的方法和属性了

console.log(Child.test()); // 类的静态方法里面, 是不允许使用this
