// 类型别名
// let str:string|number = '10'

type typeStr = string | number | boolean
let str: typeStr = '1'
str = 1
str = false

// 可以对于接口也采用类型别名
interface muchType1 {
  name: string
}
interface muchType2 {
  age: number
}

type muchType = muchType1 | muchType2
let obj: muchType = { name: 'zyy' }
obj = { age: 18 }
obj = { name: 'zyy', age: 19 }

type gender = '男'|'女'
function getGender(gender:gender):string {
  return gender
}

getGender('女')