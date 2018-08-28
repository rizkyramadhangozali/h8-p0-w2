var nama = 'kyo';
var peran = 'Tabib';

if (nama === 'kyo' || peran) {
  console.log('\"Selamat datang di dunia proxytia, kyoo\"') ;
} else if (nama === 'kyo') {
  console.log('\"Halo kyo, Pilih peranmu untuk memulai game]"') ;
} else if (nama === '') {
  console.log('\"Nama harus diisi!\"') ;
} else {
  console.log('\"Nama sudah dipakai\"') ;
}
if (peran === 'Ksatria') {
  console.log('\"Halo Ksatria kyo, kamu dapat menyrang denga senjatamu!\"') ;
} else if (peran === '') {
  console.log('\"Peran harus diisi!\"') ;
} else if (peran === 'Tabib') {
  console.log('\"Halo Tabib kyo, kamu akan membantu temanmu yang terluka\"') ;
} else if (peran === 'Penyihir') {
  console.log('\"Halo Penyihir kyo, Ciptakan keajaiban yang membantu kemenanganmu!\"') ;
} else {
  console.log('\"Pilihlah salah satu peranmu!\"') ;
}
