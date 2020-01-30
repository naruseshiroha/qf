// 使用枚举可以定义一些有名字的数字常量
var Days;
(function (Days) {
    Days[Days["Sun"] = -2] = "Sun";
    Days[Days["Mon"] = -1] = "Mon";
    Days[Days["Tue"] = 0] = "Tue";
    Days[Days["Wed"] = 1] = "Wed";
    Days[Days["Thu"] = 2] = "Thu";
    Days[Days["Fri"] = 3] = "Fri";
    Days[Days["Sat"] = 4] = "Sat";
})(Days || (Days = {}));
console.log(Days.Sun); // 0
console.log(Days.Thu); // 6
console.log(Days); // 枚举类型会被编译成一个双向映射的对象 
console.log(Days[4] === 'Tue');
console.log(Days[0]);
