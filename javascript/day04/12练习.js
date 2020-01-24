{
  /* 
  1.编写一个函数，计算两个数字的和、差、积、商
    要求：使用传参的形式
  2.编写一个函数，计算三个数字的大小，按从小到大顺序输出
  3.编写一个函数，输入n为偶数时，调用函数求1/2+1/4+...+1/n,当输入n为奇数时，调用函数求/1+1/3+...+1/n 
  */

  {
    function operation(num1, operator, num2) {
      let sum = 0
      switch (operator) {
        case '+':
          sum = num1 + num2
          break;
        case '-':
          sum = num1 - num2
          break;
        case '*':
          sum = num1 * num2
          break;
        case '/':
          sum = num1 / num2
          break;
        default:
          sum = new Error(`${operator} is invalid`).message
          break;
      }
      return sum
    }
    console.log(operation(1, '*', 3))

    function sort(num1, num2, num3) {
      let min = Math.min(num1, num2, num3)
      let max = Math.max(num1, num2, num3)
      let mid = num1 + num2 + num3 - min - max
      console.log(min, mid, max)
    }
    sort(2, 3, 1)

    function sumByOddOrEven(num) {
      console.log(num)
      let sum = 0
      if (num % 2 === 1) {
        for (let i = 1; i <= num; i += 2) {
          sum += 1 / i
        }
      } else {
        for (let i = 2; i <= num; i += 2) {
          sum += 1 / i
        }
      }
      return sum
    }
    console.log(sumByOddOrEven(3 * 5))
  }
}