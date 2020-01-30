// let num:string|number = '10'
// nu = 10
// console.log(num.length);

// 类型断言 只能断言联合类型中存在的类型
function getAssert(name: string | number) {
  // return (<string>name).length
  return (name as string).length
}