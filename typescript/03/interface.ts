// 定义接口
interface Istate {
  name: string,
  age: number
}

let obj1: Istate

obj1 = { name: '', age: 18 }

// 可选属性
interface Istate2 {
  name: string,
  age?: number // 存疑 可有可无
}

let obj2: Istate2 = { name: 'zyy' }
obj2 = { name: 'llh', age: 18 }

// 属性个数不确定的时候 必须是any类型
interface Istate3 {
  name: string,
  age?: number // 存疑 可有可无
  [propName: string]: any
}

let obj3: Istate3 = { name: 'zyy', age: 18, gender: 'female', isMarrt: true }

// 只读属性
interface Istate4 {
  name: string,
  readonly age: number
}

let obj4: Istate4 = { name: 'llh', age: 19 }
obj4.name = 'zyy'
// obj4.age = 18 // readonly 只读 无法进行修改