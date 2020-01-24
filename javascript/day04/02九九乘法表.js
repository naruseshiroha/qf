{
  let s = ''
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      s += `${j}X${i}=${j * i} `
    }
    s += '\n'
  }
  console.log(s)

}