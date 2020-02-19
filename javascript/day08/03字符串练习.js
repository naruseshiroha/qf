{
  /* 
    将字符串按照单词进行逆序，空格作为划分单词的唯一条件
      传入:”Welome to Beijing”改为 “Beijing to Welcome”
  */
  function reverseStr(str) {
    let arr = str.split(' ')
    return arr.reverse().join(' ')
  }

  console.log(reverseStr('Welome to Beijing'))

  /* 
    对称数组
      传入一个数组，起元素类型与个数皆未知，返回新数组，由原数组的元素正序反序拼接而成。
      传入
        [“One”, “Two”,”Three”] 
      返回
        [“One”, “Two”, “Three”,”Three”,”Two”, “One”]
  */
  function symmetryArray(arr) {
    let res = arr.concat()
    for (let i = arr.length - 1; i >= 0; i--) {
      res.push(arr[i])
    }
    return res
  }

  console.log(symmetryArray(['One', 'Two', 'Three']))

  /* 
    已知一个字符串对象中,英语单词用各种非字母字符分割，统计单词个数
      传入:”Yes, she*is%my@love.”;
      返回 5
  */
  function countWordOfStr(str) {
    let reg = /[^a-z]/i
    let count = 0
    for (let i = 0; i < str.length - 1; i++) {
      if (reg.test(str[i]) && !reg.test(str[i + 1])) {
        count++
      }
    }
    return count + 1
  }

  console.log(countWordOfStr('Yes, she*is%my@love.'))

  /* 
    实现函数，查找子串出现的次数，返回字符串str中出现substring的次数
      传入:”abcabcabc”, “abc”
      返回:3
  */
  function countOfStr(supStr, subStr) {
    let arr = supStr.split(subStr)
    return arr.length - 1
  }

  console.log(countOfStr('abcabcabc', 'abc'))

  /* 
    已知千锋邮箱的用户名只能由数字字母下划线组成，域名为@1000phone.com,
      判断一个字符串是否是千锋邮箱，是返回true，不是返回false。
        mail@1000phone.com   是
        $mail@1000phone.com  不是
        mail@1000phone.comp  不是
  */
  function isEmail(str) {
    let start = str.indexOf('@')
    let end = str.lastIndexOf('@')
    if (start === -1 || start !== end) {
      return false
    }
    if (str.substr(start + 1, str.length) !== '1000phone.com') {
      return false
    }
    let reg = /[^0-9a-z_]/i
    for (let i = 0; i < start; i++) {
      if (reg.test(str[i])) {
        return false
      }
    }
    return true
  }

  console.log(isEmail('mail@1000phone.com'))

  function sort(arr){
    arr.unshift()
  }
}