{
  /* 
    1.编写一个函数, 计算两个数字的和 差 积 商
      要求: 使用传参的形式
  */
  function operation(num1, operator, num2) {
    let res = 0
    console.log(res)
    switch (operator) {
      case '+':
        res = num1 + num2
        break;
      case '-':
        res = num1 - num2
        break;
      case '*':
        res = num1 * num2
        break;
      case '/':
        res = num1 / num2
        break;
      default:
        res = new Error('operator not found')
        break;
    }
    console.log(res)
    return res
  }

  console.log(operation(2, '+', 3))
  console.log(operation(2, '+a', 3))
}