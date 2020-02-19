function reverseStr(str) {
    var arr = str.split('');
    return arr.reverse().join(" ");
}
function symmetryArray(arr) {
    var newArr = arr.concat();
    newArr.pop();
    arr.forEach(function (element) {
        newArr.splice(newArr.length, 0, element);
    });
    return newArr;
}
// console.log(symmetryArray(['1', '2', '3']));

let str = 'as@fz_2135'

let reg = /\W/
console.log(reg.test(str))
