{
  // let num = 10
  // console.log(num)

  /* 
    内存分配

    准备做菜,先要将菜谱从头到尾看一遍,所有准备材料准备好.才开始工作

    预编译:在所有代码运行之前,计算机将代码从头到尾看一遍.
        将这个程序需要运行的空间一次性分配好

    函数也会声明提升

    声明提升: 在当前作用域, 声明变量和函数, 会直接在整个代码的最前面运行

  */
  /* console.log(num) // undefined
  var num = 1
  console.log(num)

  show()

  function show() {
    console.log('---')
  } */

  /* 
    局部作用域
  */
  function show() {
    console.log(num)
    var num = 10
    console.log(num)
  }
  show()
  console.log(num)
}