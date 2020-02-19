{
  /* 
    将字符串str = “When I was young, I love a girl in neighbor class.”中,
    从young提取到girl生成新字符串。但是不许数
  */
  /* let str = 'When I was young, I love a girl in neighbor class.'
  let start = str.indexOf('young')
  let end = str.indexOf('girl', start) + 'girl'.length
  let res = str.substring(start, end)
  console.log(res) */

  /* 
    将字符中单词用空格隔开
      已知传入的字符串中只有字母,每个单词的首字母大写，请将每个单词用空格隔开，只保留一个单词的首字母大写
        传入:”HelloMyWorld”
        返回:”Hello my world”
  */
  function wordOfStr(str) {
    let arr = str.split('')
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= 'A' && arr[i] <= 'Z') {
        arr[i] = arr[i].toLowerCase()
        arr.splice(i, 0, ' ')
      }
    }
    return arr.join('')
  }

  let res = wordOfStr('HelloMyWorld')
  console.log(res)

}