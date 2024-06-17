// // ANGKOT

// var nilaiawal = 1;
// while( nilaiawal <= beroprasi ) {
// 	console.log('Angkot no. ' + nilaiawal + ' beroprasi dengan baik.')
	
// nilaiawal++;
// }

// for( var nilaiawal = beroprasi + 1; nilaiawal <= jumlahangkot; nilaiawal++ ) {
// 	console.log('Angkot no. ' + nilaiawal + ' sedang rusak.')
// }

// // PEMAIN

// var nopemain = 1;
// var bermain = 6;
// var jmlhpemain = 15;

// for( var nopemain; nopemain <= bermain; nopemain++ ) {
// 	console.log('Pemain no. ' + nopemain + ' sedang bermain.')
// }

// for( var nopemain = bermain + 1; nopemain <= jmlhpemain; nopemain++) {
// 	console.log('Pemain no. ' + nopemain + ' kosong.')
// }

// // console data yang beroprasi 

// var jumlahangkot = 10;
// var beroprasi = 6;
// var lembur1 = 8;
// var lembur2 = 10;
// var lembur3 = 5;


// for( var noangkot = 1; noangkot <= jumlahangkot; noangkot++ ) {
	
// 	if( noangkot <= beroprasi && noangkot !== 5 ) {
// 		console.log('Angkot no. ' + noangkot + ' beroprasi dengan baik.')
// 	} else if ( noangkot === lembur1 || noangkot === lembur2 || noangkot === lembur3 ) {
// 		console.log('angkot no. ' + noangkot + ' sedang lembur.')
// 	} else {
// 		console.log('Angkot no. ' + noangkot + ' sedang tidak beroprasi (rusak).')
// 	}

// }


var beroprasi = 6;
var jmlhangkot = 10;
var lembur1 = 7;
var lembur2 = 5;
var lembur3 = 4;
var lembur4 = 3;

for ( var noangkot = 1; noangkot <= jmlhangkot; noangkot++ ) {

	if( noangkot <= beroprasi && noangkot !== lembur1 && noangkot !== lembur2 && noangkot !== lembur3 && noangkot !== lembur4 ) {
		console.log('Mobil no. ' + noangkot + ' sedang beroprasi.');
	} else if ( noangkot === lembur1 || noangkot === lembur2 || noangkot === lembur3 || noangkot === lembur4 ) {
		console.log('Mobil no. ' + noangkot +' Sedang Lembur.')
	} else {
		console.log('Mobil no. ' + noangkot + ' sedang tidak beroprasi (rusak)');
	}


}




