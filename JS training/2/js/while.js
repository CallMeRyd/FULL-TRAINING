// alert('kami ingin tahu pendapatmu tentang perjuangan...')

// var ulang = true
// while( ulang === true )  {
// 	var userinput = prompt('apa itu perjuangan yang hakiki ?');
// 	console.log('perjuangan yang hakiki adalah ' + userinput);
// 	ulang = confirm('ada asumsi lain??');
// } 

var jumlahangkot = 10;
var noangkot = 1;
var beroprasi = 7;
var tdkberoprasi = 8;

// angkot yang beroprasi

while( noangkot <= beroprasi ) {
	console.log('Angkot No. ' + noangkot + ' beroprasi dengan baik.' );
noangkot++;
}

// angkot yang tidak beroprasi

for( var tdkberoprasi; tdkberoprasi <= jumlahangkot; tdkberoprasi++ ) {
	console.log('Angkot No. ' + tdkberoprasi + ' sedang rusak' );
}