{
  /* 
    编写函数has(arr , 60) 判断数组中是否存在60这个元素，返回布尔类型
  */
  function has(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return true
      }
    }
    return false
  }

  console.log(has([1, 2, 3, 4], 3))
}