// 声明式类型的函数
function funcType(name: string, age: number): number {
  return age
}

let ageNum: number = funcType('llx', 19)

// 函数参数不确定
function funcType2(name: string, age: number, gender?: string): number {
  return age
}
let ageNum2: number = funcType2('llx', 19, 'female')

// 函数参数的默认值
function funcType3(name: string = 'zyy', age: number = 19): number {
  return age
}

// 表达式类型的函数
let funcType4 = function (name: string, age: number): number {
  return age
}

let funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
  return age
}

interface IFuncType {
  (name: string, age: number): number
}
let funcType6: IFuncType = function (name: string, age: number): number {
  return age
}

// 对于联合类型的函数, 可以采用重载的方式
function getValue(value: number): number;
function getValue(value: string): string;
function getValue(value: string | number): string | number {
  return value
}
let a: string = getValue('1')
let b: number = getValue(2)