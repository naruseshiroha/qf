{
  // 2.定义一个含有30个整型元素的数组，按顺序分别赋予从2开始的偶数；
  // 然后按顺序每五个数求出一个平均值，放在另一个数组中并输出。试编程。
  let arr = []
  for (let i = 0; i < 30; i++) {
    arr[i] = (i + 1) * 2
  }
  console.log(arr)

  let res = []
  let avg = 0
  for (let i = 0, j = 0; i < arr.length; i++) {
    avg += arr[i]
    if (i % 5 === 4) {
      res[j] = avg / 5
      avg = 0
      j++
    }
  }
  console.log(res)
}