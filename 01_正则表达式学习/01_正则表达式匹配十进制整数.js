// 十进制整数
let decimalReg = /^[-]{0,1}[1-9][0-9]{0,}$|^0$/

console.log(decimalReg.test('1'))

// javascript遵循Unicode字符集
// console.log('我'.charCodeAt(0))
for(let i = 0; i <= 127; i++) {
  // 前128个与ASCII是对应的
  // console.log(String.fromCharCode(i))
}