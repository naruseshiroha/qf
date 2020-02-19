{
  /* 
    数组存储数据,数组中每一个元素,元素可以是任意的数据类型
    [注] 数组中的元素可以是数组

    二维数组: 人为起的
  */

  /* let arr1 = [1, 12, 321, 1]
  let arr2 = [1, 12, 321, 1, arr1]

  console.log(arr2.length) // 5
  console.log(arr2[4] === arr1)

  console.log(arr2[4][2] === arr2[2]) */

  /* 
    通过循环按行顺序为一个5×5的二维数组a赋1到25的自然数，然后输出该数组的左下半三角。试编程。 
  */
  let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ]

  let str = ''
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i >= j) {
        str += (arr[i][j] + ' ')
      }
    }
    str += '\n'
  }
  console.log(str)
}