//LOOPING ASTERTIKS

//1.Menyusun barisan bintang

var tinggi = 5;
var deret = 0;
while (deret < tinggi) {
  var bintang = ''; {
    bintang = bintang + '*'
  }
  deret += 1
  console.log(bintang)
}

//2.Menyusun barisan bintang denga nested loop

var tinggi = 5;
var deret = 0;
while (deret < tinggi) {
  var bintang = ''
  var deretluas = 0
  while (deretluas < tinggi) {
    bintang = bintang + '*'
    deretluas = deretluas + 1
  }
  deret = deret + 1
  console.log(bintang);
}

//3.Menyusun barisan tangga bintang dengan nested loop

var rows = 0;
var tinggi = 5;
var bintang = '';
while (rows < tinggi) {
  bintang = bintang + '*'
  console.log(bintang)
  rows = rows + 1
}
