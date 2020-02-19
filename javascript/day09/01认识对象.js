{
  /* 
    1.发展历史
      编程语言: 汇编 C语言  面向过程语言
      编程语言: Java C++ JavaScript Object-C pyython 面向对象语言

    2.思想
      面向过程编程思想: 只考虑数学逻辑
      面向对象编程思想: 直接将生活逻辑映射到我们的程序
        (1).分析有哪些实体
        (2).设计实体属性和功能
        (3).实体之间相互作用

      车
        属性:
          speed:60km/h

      路
        属性:
          length:1000km

      例子:
        有一辆车速度60km, 一条路1000km, 问题: 如果让这辆车跑完这条路, 需要多长事件?

      贪吃蛇

    3.语法
      类: 一类具有相同特征事物的抽象概念
      对象: 具体某一个个体, 唯一的实例

      类    对象
      狗    你遇到的那只
      电脑   你桌上的那台

    4.代码
      对象的代码

    5.数据结构
      基本数据类型(只能存储一个值) => 数组(处理批量的数据) => 对象(既可以存储数据也可以存储函数)
  */
  // 面向过程编程思想
  /* let hours = 1000 / 60
  console.log(hours) */

  // 面向对象编程思想
  let car = {
    speed: 60,
    run(road) {
      return road.length / car.speed
    }
  }

  let bridge = {
    length: 1000
  }

  let hours = car.run(bridge)
  console.log(hours.toFixed(2))
}