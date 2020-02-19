{
  /* 
    数组:
      for循环
      for...in快速遍历
      forEach()
  */

  let arr = [1, '2', true, null, undefined]
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
  }
  console.log("----------");
  for (const i in arr) {
    console.log(arr[i], i);
  }
  console.log("----------");
  arr.forEach((value, index, array) => {
    console.log(value, index);
  })
  console.log("----------");
  
  // 对象遍历
  let girl = {
    name: 'zyy',
    age: 20,
    gender: 'female'
  }

  // for...in 遍历对象
  for (const key in girl) {
    if (girl.hasOwnProperty(key)) {
      const element = girl[key];
      console.log(key,element);
    }
  }
}