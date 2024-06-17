
//----------------------> SCOPE <----------------------//

// ----------> scope
// adalah bagaimana sebuah variable di akses dalam program

// Ada 2 jenis scope dalam bahasa pemograman :
//		1. block scope
//		2. function scope

// !!! -- JS menggunakan metode function scope -- !!! //

//---------- contoh :

var i = 2;

if ( i % 2 == 0 ) {
	var genap = true;
}

if ( genap ) {
	console.log ('genap!');
}




//---------- contoh lain -------------------------------------------------------------


var a = 1; // --------> global scope / window scope

function tes () {
	var a = 2; // --------> jika ada 'var' maka akan di sebut sebagai variable lokal.
	console.log (a);
}
tes();

//catatan : maka 'a' yang akan ditampilkan adalh '2' karena berada dalam '{}'.




//---------- contoh lain -------------------------------------------------------------


var a = 1;

function tes () {
	var ba = 2; 
	console.log (a);
}
tes();
console.log (ba);

//catatan : maka 'a' yang akan ditampilkan adalah '1', 
//			tetapi 'ba' error karena 'console.log(ba)' berada di global, sedangkan
//			'var ba' ada di lingkup '{}'.




//---------- contoh lain -------------------------------------------------------------


var a = 1; // -----------> var a global

function tes () {
	// name conflict = terjadi karena ada var yang namanya sama.
	var a = 2; // ------------> var a lokal
	console.log (a); // -------------> yang akan muncul 'var a' lokal / '2'.
}
tes();

//catatan : jika ingin global yang masuk ke lingkup '{}' maka ubah menjadi 'window.a'.

var a = 1;

function tes () {
	// name conflict 
	var a = 2;
	console.log (window.a); // -------------> yang akan muncul 'var a' global / '1'.
}
tes();




//---------- contoh lain -------------------------------------------------------------


var a = 1;

function tes () {
	// name conflict 
	a = 2; // ------------> 'a' global akan tertimpa menjadi '2'.
}
tes();
console.log (a) // -----------> hasilnya '2'.

//catatan : >-HATI-HATI!-< saat melakukan hal ini karena 
//			dapat menimpa variable global yang dapat merusak code.




//---------- contoh lain -------------------------------------------------------------


var a = 1;

function tes (a) {
	// name conflict 
	console.log (a) // -----------> hasilnya '2'.
}
tes(2);
console.log (a); // -----------> hasilnya '1' (mengikuti var global).

//catatan : hasilnya '2' karena function akan membaca argument 
//			lalu memasukkannya ke parameter.























// // // // // // // // // // // // // // // // // // // // // // // // // // // // // //