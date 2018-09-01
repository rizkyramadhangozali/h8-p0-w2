//1. Melakukan Looping Menggunakan While

//LOOPING PERTAMA

var word = 2;
console.log('LOOPING PERTAMA');
while(word < 22) {
  console.log(word + ' - I love coding');
  word = word + 2;
}

//LOOPNG KEDUA

var word = 22;
console.log('LOOPING KEDUA');
while(word > 0) {
  console.log(word + ' - I will become fullstack');
  word = word - 2;
}

//2. Melakukan Looping Menggunakan For

//LOOPING PERTAMA

console.log('LOOPING PERTAMA');
for(var word = 1; word < 21; word++) {
  console.log(word + ' - I love coding');
}

//LOOPING KEDUA

console.log('LOOPING KEDUA');
for(var word = 20; word > 0; word--) {
  console.log(word + ' - I will become fullstack developer');
}

//3.Angka Ganjil dan Genap

// 1-2

for(angka = 1; angka < 100; angka++) {
  if(angka % 2 == 1) {
    console.log(angka + 'GANJIL');
  } else {
    console.log(angka + 'GENAP');
  }
}

// 3-4

for(angka = 1; angka < 100; angka = angka + 2) {
  if(angka % 3 == 0) {
    console.log(angka + ' 3 KELIPATAN 3')
  } else {
    console.log(angka + '');
  }
}

for(angka = 1; angka < 100; angka = angka + 5) {
  if(angka % 6 == 0) {
    console.log(angka + ' 6 KELIPATAN 6')
  } else {
    console.log(angka + '');
  }
}

for(angka = 1; angka < 100; angka = angka + 9) {
  if(angka % 10 == 0) {
    console.log(angka + ' 10 KELIPATAN 10')
  } else {
    console.log(angka + '');
  }
}
