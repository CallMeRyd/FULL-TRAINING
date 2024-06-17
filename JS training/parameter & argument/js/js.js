

// 						PARAMETER & ARGUMENT

// parameter 
// // parameter = 	variabel yang di tulis di dalam kurung pada saat function di buat, 
//					digunakan untuk menampung nilai yang di kirim saat function di panggil.

//------------------------------------------------------------------------------------------------------//---//----------------------//

// argument
// // argument =	nilai yang dikirimkan ke parameter saatfungsi di panggil.

// jadi parameter ketika fungsinya di buat sedangkan argument ketika fungsinya di panggil.

// ------------- sebagai contoh :

function tambah (a, b) { // a, b adalah parameter
	return a + b;
}

var a = parseInt ( prompt ('masukkan angka nilai 1 :') ); // catatan '"parseInt"' membuat nilai menjadi integer bukan string
var b = parseInt ( prompt ('masukkan angka nilai 2 :') );
var coba = tambah (a*2, b*2) ; // 2, 3 adalah argument
alert ( coba );

// ------------- sebagai contoh lain :

// Sudo Variable arguments 

function tambah () {
	var hasil = 0;
	for ( i = 0; i < arguments.length; i++ ) {
		hasil += arguments[i];
	}
	return hasil;
}

var coba = tambah (1, 2, 3, 4, 5); // bisa menjumlah banyak angka tanpa batasan 
console.log ( coba );



