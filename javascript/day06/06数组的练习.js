{
  /* 
    随机给出一个五位以内的数，然后输出该数共有多少位，每位分别是什么
  */

  function countOfNum(num) {
    let arr = []
    while (num) {
      arr.unshift(num % 10)
      num = parseInt(num / 10)
    }
    console.log(arr)
  }

  countOfNum(43621)
}