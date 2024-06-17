


// -------------------------------> REKURSIF <---------------------------------------------------//

// ----------> Rekursif
// rekursif adalah sebuah kondisi yang memanggil dirinya sendiri

// ---------- contoh -----------------------------------------------------------------------------
// // // contoh biasa menggunakan looping 'for'.

for ( var i = 10; i > 0; i-- ) {
	console.log (i);
}

// // // contoh menggunakan rekursif 'function'.

function tampilAngka (n) {
	console.log (n);
	return tampilAngka (n-1);
}
tampilAngka(1);

//// // // // // // //  !!   // // // // // // // // //
// PERINGATAN CODE DI ATAS AKAN LOOPING TANPA HENTI //
// // // // // // // // // // // // // // // // // //

//catatan = untuk menghindari looping infinity adalah dengan cara 'Base Case'

// -------------------------------> BASE CASE <---------------------------------------------------//

//----------> Base case
// base case adalah kondisi akhir yang menghasilkan nilai.

// // // contoh menggunakan rekursif 'function'.

function tampilAngka (n) {
	if ( n === 0 ) return; // -----------> maka ketika n === 0 maka looping berhenti.
	console.log (n);
	return tampilAngka (n-1);
}
tampilAngka(10);

//catatan = biasanya rekursif dipakai untuk faktorial.

// ---------- contoh lain -----------------------------------------------------------------------------

function faktorial (n) {
	if ( n === 0) return 1;
	return n * faktorial ( n-1 );
}

alert ( faktorial(5) );



















