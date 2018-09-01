function xo(str) {
  var tampungX = ''
  var tampungO = ''

  for ( var i = 0; i < str.length ; i++){

    //untuk mengetahui jumlah 'x' dan 'o'
    if (str[i] === 'x' ){
      tampungX++
    } else {
      tampungO++
    }
  }
  // untuk membandingkan
  if (tampungX === tampungO) {
    return true
  }else{
    return false
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
