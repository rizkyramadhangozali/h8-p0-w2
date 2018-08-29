var nama = 'rizky'
var peran = 'ksatria'

if ( nama === '' && peran === '') {
  console.log('Nama harus diisi!')
}
else if( nama !== '' && peran === '' ) {
  console.log('Halo ' + nama + ' pilih peranmu untuk memulai game!')
}
else if ( nama !== '' && peran === 'ksatria' ) {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log( 'Halo ' + peran + ' ' + nama + ', ' + ' kamu dapat menyerang dengan senjatamu!')
}
else if ( nama !== '' && peran === 'tabib' ) {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log( 'Halo ' + peran + ' ' + nama + ', ' + ' kamu akan membantu temanmu yang terluka!')
}
else if ( nama !== '' && peran === 'penyihir' ) {
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    console.log( 'Halo ' + peran + ' ' + nama + ', ' + ' ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
  console.log ('Nama harus diisi!')
}
