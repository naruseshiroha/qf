{
  /* 
    有一堆桃子不知数目，猴子第一天吃掉一半，觉得不过瘾，又多吃了一只，第二天照此办法，吃掉剩下桃子的一半另加一只，
    天天如此，到第num(num <= 10)天早上，猴子发现只剩一只桃子了，问这堆桃子原来有多少只？ （思路：n为还剩n天吃完的桃子数）
  */
  function peach(n) {
    if (n === 1) {
      return 1
    }
    return (peach(n - 1) + 1) * 2
  }

  console.log(peach(4))

  /* 
    输入一个n, 打印n个hello world的运行结果
  */
  function print(n) {
    if (n === 0) {
      return
    }
    console.log('hello world')
    print(n - 1)
  }

  console.log(print(5))
}