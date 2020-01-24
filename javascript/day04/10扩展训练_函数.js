{
  /* 
    1.找出所有的水仙花数，三位数，各位立方和等于该数本身。153 = 1 ^ 3 + 5 ^ 3 + 3 ^ 3
    
    2.输入两个数，求两个数的最大公约数（能够同时整除两个数的最大数）
      思路：先找出两个数中最小的那个数
    
    3.输入两个数，求两个数的最小公倍数 （能够同时被两个数整除的最小数）
      思路：
      1.先找出两个数中的最大数
      2.最大数++，直到找出能被两个数整除的数(退出循环)
      2.最大数++，直到找出能被两个数整除的数(退出循环)
      
    4.输入两个数n，a，如果n==3，a==2；
      输出 2 + 22 + 222 的值。（不用输出式子）
      如果n==4，a==3；
      输出 3 + 33 + 333 + 3333的值。
      思路：
      1.n = 3,相加三次,每次相加比前一次相加的数,多一位
      2.每次多的这个位数的值为a

    5.五位数中，对称的数称为回文数，找出所有的回文数。 如12321
      思路：
      1. 先找出五位数中的第一位和第五位数比较
      2. 在找出五位数中第二位和第四位比较。
  */
  {
    {
      function narcissus() {
        for (let i = 100; i <= 999; i++) {

          let ones = i % 10
          let tens = parseInt(i / 10) % 10
          let hundreds = parseInt(i / 100)
          // console.log(ones,tens,hundreds)
          Math.pow(ones, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3) === i ? console.log(i) : ''
        }
      }

      narcissus()
    }

    {
      function gcd(num1, num2) {
        num1 > num2 ? (num1 = num2, num2 = num1) : null
        let res = 0
        for (let i = 1; i <= num1; i++) {
          if (num1 % i === 0 && num2 % i === 0) {
            res < i ? res = i : null
          }
        }
        return num1 * num2 / res
      }

      console.log(gcd(1234, 5678))

      function lcm(num1, num2) {
        return num1 * num2 / gcd(num1, num2)
      }

      console.log(lcm(1234, 5678))
    }

    {
      function fn(item, value) {
        let sum = 0
        let s = ''
        for (let i = 1; i <= item; i++) {
          s += value
          sum += parseInt(s)
        }

        return sum
      }

      console.log(fn(3, 2))
    }

    {
      function palindromicNumber() {
        for (let i = 10000; i < 100000; i++) {
          const yi = parseInt(i / 10000)
          const wu = i % 10
          if (yi === wu) {
            const er = parseInt(i / 1000) % 10
            const si = parseInt(i % 100 / 10)
            if (er === si) {
              console.log(i)
            }
          }
        }
      }

      palindromicNumber()
    }

  }
}