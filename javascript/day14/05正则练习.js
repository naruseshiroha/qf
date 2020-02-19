{
  /* 
    文件是否是压缩包
  */
  // rar zip 7z

  let reg = /^\w+\.(zip|rar|7z)$/
  console.log(reg.test('7z.7z'));

}