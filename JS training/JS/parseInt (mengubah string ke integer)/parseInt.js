

// ParseInt 
//
	// parseInt di JavaScript adalah fungsi untuk dalam 
	// mengelola data yang berbentuk teks. Fungsi ini 
	// digunakan untuk mengonversi 
	// string (teks) menjadi angka integer (bilangan bulat).





//		Perbedaan Parameter dan Argument
//			+> Parameter adalah variabel yang di tulis 
//			   di dalam kurung saat function dibuat, 
//			   di gunakan intuk menampung nilai yaang 
//			   dikirimkan saat function dipanggil.

//			+> Argument adalah nilai yang dikirimkan 
//			   ke parameter saat fungsi dipanggil.


function jumlahDuaBil(a, b) { // --------> a, b sebagai Parameter
	return a + b;
}

function kali(a, b) {
	return a * b;
}

var a = parseInt(prompt('Masukkan nilai A = '));
var b = parseInt(prompt('Masukkan nilai B = '));
var result = jumlahDuaBil(a * 2, b - 1); // ------> a, b sebagai Argumen

var result1 = kali(jumlahDuaBil(1, 5), jumlahDuaBil(10, 8));


console.log(result);
console.log(result1);
alert(result);

//		  NOTE :
	//		+>	jika parameter nya lebih sedikit dari argument,
	//			maka argument kelebihannya akan di abaikan.

	//		+>	jika parameter lebih banyak dari argument,
	//			maka parameter kelebihannya akan diisi undefined.