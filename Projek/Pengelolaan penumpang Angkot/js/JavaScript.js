


// -------------> penumpang naik / tambah penmpang
/// 2 parameter
//		+> nama Penumpang
//		+> array Penumpang
/// Rules :
//		+> jika angkot kosong, penumpang naik ke kursi pertama .
//		+> penumpang berikutnya duduk di kursi .
//		   selanjutnya dan seterusnya secara berurutan .
//		+> jika ada kursi kosong (karena penumpang turun), penumpang yang
//		   naik berikutnya duduk di kursi kosong terlebih dahulu .
//		+> Asumsi kursi tidak akan penuh dan akan 
//		   bertambah terus jika ada penumpang naik .
//		+> nama penumpang tidak boleh sama, untuk menghindari kebingungan 
//		   ketika nanti penumpang turun .

// var penumpang = [];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
// 	// tambah penumpang di awal array
// 	if (penumpang.length == 0) {
// 		penumpang.push(namaPenumpang);
		
// 		return penumpang;
// 	} else {
// 		// cek apakah ada yang kosong
// 		for (var i = 0; i < penumpang.length; i++) {
// 			// jika ada maka tambahkan penumpang yang mau naik
// 			if ( penumpang[i] == undefined ) {
// 				penumpang[i] = namaPenumpang;

// 				return penumpang;
// 			} 
// 			// jika nama penumpang sama
// 			else if (penumpang[i] == namaPenumpang) {
// 				console.log(namaPenumpang + ' sudah ada di dalam angkot !!!');
			
// 				return penumpang;
// 			} 
// 			// tambah penumpang
// 			else if (i == penumpang.length - 1) {
// 				penumpang.push(namaPenumpang);

// 				return penumpang;
// 			}
// 		}
// 	}
// }



// // rulees Hapus penumpang
// var hapusPenumpang = function(namaPenumpang, penumpang) {
// 	if ( penumpang.length == 0 ) {
// 		console.log('Angkot masih kosong');

// 		return penumpang;
// 	} else {
// 		for (var i = 0; i < penumpang.length; i++) {
// 			if ( penumpang[i] == namaPenumpang ) {
// 				penumpang[i] = undefined;

// 				return penumpang;
// 			} 
// 			else if ( i == penumpang.length - 1 ) {
// 				console.log(namaPenumpang + ' tidak ada dalam angkot');

// 				return penumpang;
// 			}			
// 		}
// 	}
// }


// ANGKOT ada 2
// angkot 1 ada angkot 2
// di dalam angkot ada supir, penumpang.
// tiap penumpang yang turun membayar kas.


function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;


	this.penumpangNaik = function(namaPenumpang) {
		if ( this.penumpang.length == 0 ) {
			this.penumpang.push (namaPenumpang);

			return this.penumpang;
		} 
		else {
			for (var i = 0; i < this.penumpang.length; i++) {
				if ( this.penumpang[i] == undefined ) {
					this.penumpang[i] = namaPenumpang;

					return this.namaPenumpang;
				}
				else if ( this.penumpang[i] == namaPenumpang ) {
					console.log(namaPenumpang + ' sudah ada di dalam angkot !!');

					return this.penumpang;
				}
				else if ( i == this.penumpang.length -1 ) {
					this.penumpang.push (namaPenumpang);

					return this.penumpang;
				}
			}
		}
	}


	this.penumpangTurun = function(namaPenumpang, bayar) {
		if ( this.penumpang == 0 ) {
			console.log('Angkot masih kosong');

			return false;
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			if ( this.penumpang[i] == namaPenumpang ) {
				this.penumpang[i] = undefined;
				this.kas += bayar;

				return this.penumpang;
			}
			else {
				if ( i == this.penumpang.length - 1 ) {
					console.log('tidak ada ' + namaPenumpang + ' di dalam angkot');

					return this.penumpang;
				}
			}
		}
	}
}

var angkot1 = new Angkot('joseph', ['klaten', 'Jogja'], [], 0);
var angkot2 = new Angkot('Mail', ['Jogja', 'Solo'], [], 0);



// cara nambah penumpang
/// angkot1.penumpangNaik(namaPenumpang);








  













































