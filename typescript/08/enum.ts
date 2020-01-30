// 使用枚举可以定义一些有名字的数字常量
enum Days {
  Sun = -2,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Days.Sun); // 0
console.log(Days.Thu); // 6

console.log(Days); // 枚举类型会被编译成一个双向映射的对象 
console.log(Days[4] === 'Tue');
console.log(Days[0]);
