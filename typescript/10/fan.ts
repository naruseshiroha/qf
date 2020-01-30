// 没有确切定义返回值类型, 运行的数组每一项都可以是任意类型
/* function createArray(length: number, value: any): Array<any> {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = value
  }
  return arr
}

let a: Array<number> = createArray(5, 1) */

// 使用泛型将其改造
// 不传的时候根据类型进行倒推
// 泛型可以用来帮助我们
function createArray<T>(length: number, value: T): Array<T> {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = value
  }
  return arr
}

let strArr: string[] = createArray<string>(5, '1')
let numArr: number[] = createArray(5, 1)

// 接口当中采用泛型
interface ICreate {
  <T>(name: string, value: T): Array<T>
}

let func: ICreate = function <T>(name: string, value: T): Array<T> {
  return []
}

let strArr2: string[] = func('zyy', 'uoaini')
let numArr2: number[] = func('zyy', 520)