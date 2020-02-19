{
  /* 
    选择排序(打擂台法)
      规则: 选出一个位置, 这个位置上的数, 和后面所有的数进行比较, 如果比较出大小就交换两个数位置
  */
  let arr = [4, 8, 6, 5, 7]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
}