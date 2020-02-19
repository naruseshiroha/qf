{
  /* 
    冒泡排序:
      规则: 前后两个数两两进行比较, 如果符合条件就交换连个数位置
      规则: 冒泡排序每一轮排序, 都可以找出一个较大的数, 放在正确的位置

    分析:
      比较轮数 = 数组长度 - 1
      每一轮比较的次数 = 数组长度 - 当前轮数
  */
  let arr = [9, 8, 7, 6, 5,]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if(arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  console.log(arr)
}