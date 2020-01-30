{
  /* 
    3.一下通过循环给数组每个元素赋值, 随机数
    Math.random() 随机(0,1]
    // 0-9随机整数
    parseInt(Math.random() * 10)
  */

  let arr = new Array(10)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(Math.random() * 10)
  }
  console.log(arr)
}