{
  /* 
    7. 编写函数norepeat(arr) 将数组的重复元素去掉，并返回新的数组（拓展）
  */

  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 2, 2, 1];

  noRepeat(arr);
  console.log(arr); // 1,2,3,4,5


  /* 
    2、系统提供数组去重，固定写法
  */
  arr = [...new Set(arr)];
  console.log(arr);
}