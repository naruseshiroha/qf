function reverseStr(str: string): string {
  let arr: Array<string> = str.split('')
  return arr.reverse().join(" ")
}

function symmetryArray(arr: string[]): string[] {
  let newArr: string[] = arr.concat()
  newArr.pop()
  arr.forEach(element => {
    newArr.splice(arr.length - 1, 0, element)
  });
  return newArr
}

console.log(symmetryArray(['1', '2', '3']));
