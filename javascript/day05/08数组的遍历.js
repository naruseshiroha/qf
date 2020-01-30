{
  /* 
    for循环
    for...in 遍历   快速遍历/快速枚举
  */
 let arr = [1,true,undefined,null]
 // 遍历
 for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
 }

 for (const i in arr) {
   console.log(arr[i])
 }
}