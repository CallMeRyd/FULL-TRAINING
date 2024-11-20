/// /// Higher Order Function
// //
//

//	  DEFINISI : Function yang beroprasi pada function yang lain.
//				 baik itu digunakan dalam argument, maupun sebagai return value.
//				 (First Class Function)
//				 "Javascript memperlakukan function sebagai object."



// Contoh_I
	const kerjakanTugas = (matakuliah, selesai) => {
		console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
		selesai(matakuliah);
	}
//		  NOTE : --> function 'kerjakanTugas' menjadi "Higher Order Function"
//				 --> 'argument selesai sebagai function' menjadi "Callback"

	const selesai = (matakuliah) => {
		alert(`Selesai mengerjakan tugas ${matakuliah}.`);
	}

	kerjakanTugas('Web Dev', selesai);

// Contoh_II
	// Function untuk menyembunyikan kompleksitas
	// Function yang Absatraksi

	function repeat(n, action) {
		for (let i = 0; i < n; i++) {
			action(i);
		}
	}

	// Lebih ringkas
	repeat(10, console.log);
	repeat(3, alert);

// Contoh lain Higher Order Function
	// Array.prototype.map() --> Membuat array baru
	// Array.prototype.filter() --> mefilter
	// Array.prototype.reduce() --> menggabungkan
