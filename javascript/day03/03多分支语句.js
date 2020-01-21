{
  /* 
    多分支语句:
      语法:
        if(判断条件1){
          执行语句1;
        } else if(判断条件2){
          执行语句2;
        } else if(...){
          ...;
        }else{
          执行语句;(上述所有条件都不成立, 执行这里)
        }
  */

  let y = null;
  let x = 23.3;
  if (x < 1) {
    y = x
  } else if (x >= 10) {
    y = 5 * x - 17
  } else {
    x = 2 * x + 1
  }
  console.log(`x=${x},y=${y}`)
}