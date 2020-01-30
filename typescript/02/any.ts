let num: any = 1
num = true
num = null

let num2; // 没有赋值操作 就会被认为任意值类型 等价于 let num: any 
num2 = 1
num2 = undefined

let b = 1 // 给变量赋初始值的时候 如果没有指定类型 根据初始值推断类型
// b = '2' 

let x // 没有给b赋初始值 就是any => let b: any
x = 1
x = '1'
x = false