{
  /* 
    例题: 按照考试成绩的等级, 输出百分制数段
  */

  let grade = 'B' 
  switch (grade) {
    case 'A':
      console.log('80-100')
      break;
    case 'B':
      console.log('70-79')
      break;
    case 'C':
      console.log('60-69')
      break;
    case 'D':
      console.log('0-59')
      break;
    default:
      console.log('error')
      break;
  }

  /* 
    注意:
      1.一般情况下不要省略break;
        break代表的是终止当前的switch语句
      2.一般情况下不要省略default;
  */

  /* 
    if的多分支语句和switch语句的编写
      1.如果是匹配确定的结果, 优先使用switch
      2.需要判断的题目, 只能用if语句
  */
}