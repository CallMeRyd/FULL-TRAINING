// Rekursif
//

// Rekursif (Menurut Google) -> Rekursi adalah pola programming 
//								yang sangat berguna didalam 
//								situasi dimana sebuah task bisa 
//								secara natural dibagi menjadi
//								beberapa task yang memiliki 
//								jenis yang sama, tapi lebih 
//								sederhana.

// Rekursif (Menurut Pribadi) -> adalah fungsi yang memanggil 
//								 dirinya sendiri.

//		  NOTE:
//		  	Rekursif harus memiliki Base Case (Kondisi berhenti)
//		  	 + Base Case -> Kondisi akhir dari rekursif
//		  				 	yang menghasilkan nilai.

//		  ex:
		  	function cetakAngka(n) {
		  		if (n === 0) return;
		  		console.log(n);
		  		cetakAngka(n-1);
		  	}

		  	cetakAngka(10);
		  	console.log('\n\n');

//		  ex (FAKTORIAL):
			function faktorial(n) {
				if (n === 0) return 1;
				return n * faktorial(n-1);
			}

			console.log(faktorial(5));