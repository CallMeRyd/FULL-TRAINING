/// /// Filter, Map & Reduce
// //
//


// Contoh lain Higher Order Function
	// Array.prototype.map() --> Membuat array baru
	// Array.prototype.filter() --> mefilter
	// Array.prototype.reduce() --> menggabungkan

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const newAngka = [];

// mencari angka yang lebih >= 3
	//	Cara looping biasa
		for (i = 0; i <= angka.length; i++) {
			if (angka[i] >= 3) {
				newAngka.push(angka[i]);
			}
		}
		console.log(newAngka);

// Filter
	// Cara Menggunakan Filter dan Arrow Function
		const angkaBaru = angka.filter((a) => a >= 3);
		console.log(angkaBaru);

// Map
	// Cara Menggunkan Map dan Arrow Function
	// Kalikan semua angka dengan 2
		const angkaKaliDua = angka.map(a => a * 2);
		console.log(angkaKaliDua);

// Reduce
	// Cara Menggunakan Reduce dan Arrow Function
	// Jumlahkan seluruh element pada array
		const jumlAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // punya 2 argumen
		console.log(jumlAngka);
	// NOTE 	: Pada reduce ada syarat yang harus di penuhi di antara nya 
	//		 	  harus ada 2 argument.
	// PENTING  : pada bagian 'reduce((accu, current) => accu + current, 0)'
	//			  angka '0' pada bagian itu adalah Nilai awal defult, dan
	//			  bisa di ubah sesuai kemmauan !!! 
	// Contoh	:
		const jumlAngka2 = angka.reduce((acc, curr) => acc * curr, 10);
		console.log(jumlAngka2);

// Method Chaining
	// Cari angka yang lebih > 5
	// Kalikan 3
	// Jumlahkan
		const result = angka.filter(a => a > 5) // 8, 9, 9
			.map(a => a * 3) // 24, 27, 27
			.reduce((acc, curr) => acc + curr, 0); // 78
		console.log(result);
