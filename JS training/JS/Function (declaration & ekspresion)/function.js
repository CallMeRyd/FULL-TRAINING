
// ------------------- Function ---------------------
//

//	Function
		// 1. Blok kode yang di buat untuk melKUKn tugas spesifik
		// 2. Dapat di panggil berulang kali
		// 3. Memudahkan penelusuran
		// 4. Reusability


// Structur Function
//
//		function function_name(parameter) {
			// body...

			// return value..
//		}

//		  NOTE : 
//			Perbedaan Parameter dan Argumen
//				+> Parameter adalah variabel yang di tulis 
//				   di dalam kurung saat function dibuat, 
//				   di gunakan intuk menampung nilai yaang 
//				   dikirimkan saat function dipanggil.

//				+> Argumen adalah nilai yang dikirimkan 
//				   ke parameter saat fungsi dipanggil.



// Ada 2 macam Function: 
//
	// Function Declaration
		function jumlahDuaBilangan (a, b) {
			var total;
			total = a + b;

			return total;
		}


	// Function Expression
		var jumlahDuaBilangan1 = function (a, b) {
			var total1;
			total1 = a + b;

			return total1;
		}


// Function Declaration 
		// +> Lebih Fleksibel (dapat ditulis di manapun)
		// 	  -> karena konsep -Hoisting-
		// +> Mudah dipahami pemula

// Function Expression
		// +> Harus didefinisaikan terlebih dahulu
		//    sebelum dipanggil
		// +> Lebih Powerfull:
		// 	  -> Sebagai closure
		// 	  -> Sebagai argumen untuk function lain
		// 	  -> IIFE (Immediately Invoked Function Expression)




// Memanggil / Menjalankan Function
//
	// alert(jumlahDuaBilangan(3, 10));
	// alert(jumlahDuaBilangan1(12, 10));
	// alert(jumlahDuaBilangan(985, 121));

	console.log(jumlahDuaBilangan(3, 10));
	console.log(jumlahDuaBilangan1(12, 10));
	console.log(jumlahDuaBilangan(985, 121));
	console.log('\n\n');


// ME TIME ::
//
	var volum1 = 8;
	var volum2 = 3;

	function volKubus(a) {
		return a * a * a;
	}

	var result = volKubus(volum1) + volKubus(volum2);

	console.log('ME TIME ::');
	console.log(volKubus(volum1));
	console.log(volKubus(volum2));
	console.log(result);
	console.log('\n');

/// ___-----------________-------------___________--------------

	function JumlahDuaVolKubus(a, b) {
		// var kubA = a * a * a;
		// var kubB = b * b * b;
		// return kubA + kubB;
		return (a * a * a) + (b * b * b);
	}

	console.log('------- Atau -------');
	console.log('\n');
	console.log(JumlahDuaVolKubus(8, 3));

