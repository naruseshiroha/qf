{
  /* 
    [注] 什么时候用判断语句, 我们就编写if语句
  */

  let score = 96.96
  if (score > 85) {
    console.log('优秀')
    if (score > 95 && score <= 100) {
      console.log('奖励1000块')
    } else if (score >= 90 && score <= 95) {
      console.log('奖励800块')
    } else {
      console.log('奖励500块')
    }
  } else if (score >= 75 && score <= 85) {
    console.log('良好')
  } else if (score >= 60 && score < 75) {
    console.log('及格')
  } else {
    console.log('不及格')
  }
}