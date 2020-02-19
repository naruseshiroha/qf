{
  /* 
    concat()
    1.拷贝原数组, 生成新数组
    2.合并数组
      格式:数组.concat(数组,数据...)
      返回值:合并成的新数组.原数组不会改变
  */
  let arr1 = [1, 2, 3, 2, 1]
  let arr2 = [4, 5, 6, 5, 4]
  let newArr = arr1.concat(arr2, 'true', false)
  console.log(newArr)
  console.log(newArr.length)
  console.log(arr1)

  /* 
    slice()
      格式:数组.slice(start,end) [start,end)
      功能:可以基于当前数组获取指定区域元素[start,end),提取出元素生成新数组
      返回值:生成的新数组,原数组不会改变
  */
  newArr = arr1.slice(1, -1)
  console.log(newArr)
  console.log(arr1)

  /* 
    splice()
      格式:数组.splice(start,length,data...)
      参数:
        start:开始截取的位置
        length:截取的元素的长度
        data...:在start位置,插入的元素
      返回值:截取下来的元素组成的数组

      增加
      删除
      修改(先删除,后增加)
  */
  let arr = [1, 2, '3', '4', false, true, null, undefined]
  /* let addArr = arr.splice(0, 0, 'uoaini', 'zyy')
  console.log(arr)
  console.log(addArr) */
  /* let delArr = arr.splice(-4)
  console.log(arr)
  console.log(delArr) */
  let updArr = arr.splice(-1, 1, 'uoaini', 'llh')
  console.log(arr)
  console.log(updArr)
}