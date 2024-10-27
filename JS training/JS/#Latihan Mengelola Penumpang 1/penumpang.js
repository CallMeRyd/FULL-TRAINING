// Latihan Array

// --------- Juragan Angkot ------------


// RULES
	// 1. jika angkot koson, punumpang naik duduk di kursi pertama
	// 2. penumpang berikutnya duduk dikursi selanjutnya secara berurutan
	// 3. jika adakursi kosong (karena penumpang turun), penumpang selanjutnya duduk di kursi kosong terlebih dahulu
	// 4. asumsi kursi tidak akan penuh
	// 5. nama penumpang tidak boleh sama


// ME TIME:: (WEBSITE : ERROR)

	// function tambahPenumpang(nama, penumpang) {
	// 	for (var i = 0; i < penumpang.length; i++) {
	// 		if (penumpang[i] == undefined) {
	// 			penumpang[i] = nama;

				// return penumpang;
	// 		} else if (i == penumpang.length - 1) {
	// 			penumpang.push(nama);

				// return penumpang;
	// 		}
	// 	}
	// }

	// function turun(nama, penumpang) {
	// 	for (var i = 0; i < penumpang.length; i++) {
	// 		if (penumpang[i] == nama) {
	// 			penumpang[i] = undefined;
				// return penumpang;
	// 		}
	// 	}
	// }

	// var penumpang = ['restu', 'arya', 'andhika'];
	// var angkot1 = 'Angkot 1';

	// console.log(penumpang);



// YT Tutor

	// Nama Penumpang : 'arya', 'putri', 'keyla', 'rizky'
		var penumpang = [];

		var tambahPenumpang = function (nama, penumpang) {
			if (penumpang.lenght == 0) {
				penumpang.push(nama);

				return penumpang;
			} else {
				for (var i = 0; i < penumpang.length; i++) {
					if (penumpang[i] == nama) {
						console.log(nama + ' sudah ada di dalam !!');

						return penumpang;
					} else if (penumpang[i] == undefined) {
						penumpang[i] = nama;

						return penumpang;
					} else if (i == penumpang.lenght - 1) {
						penumpang.push(nama);

						return penumpang;
					}
				}
			}
		}


// Rules
	// 1. jika angkot kosong, tampilkan pesan bahwa angkot 
	//    kosong. 
	// 2. Jika ada penumpang yang namanya sesuai, 
	//    hapus nama menjadi Undefined. 
	// 3. Jika tidak ada penumpang yang namanya sesuai, 
	//    tampilkan pesan keasalahan.

		var turun = function (nama, penumpang) {
			if (penumpang.lenght == 0) {
				console.log('Bus ini masih kosong');

				return penumpang;
			} else {
				for (var i = 0; i < penumpang.length; i++) {
					if (penumpang[i] == nama) {
						penumpang[i] = undefined;

						return penumpang;
					} else if (i == penumpang.lenght - 1) {
						console.log('tidak ada ' + '\"' + nama + '\"' + ' di dalam angkot');

						return penumpang;
					}
				}
			}
		}








