// 数组表示法
// 类型+方括号
let arr: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']
let arr3: any[] = [1, '2', false]

// 可以采用数组泛型 Array<elelType> 表示法
let arrType: Array<number> = [1, 2, 3]
let arrType2: Array<string> = ['1', '2', '3']
let arrType3: Array<any> = [1, '2', false]

// 可采用接口表示法
interface IState {
  username: string,
  age: number
}

interface IArr {
  [index: number]: IState
}

let arrType4: IArr = [{ username: 'zyy', age: 19 }]
let arrType5: Array<IState> = [{ username: 'zyy', age: 19 }]
let arrType6: IState[] = [{ username: 'zyy', age: 19 }]
