/// /// Tamplate Literal
// //
//

// DEFINISI : "Tamplate Literal adalah 'string literal' 
//			   yang memungkinkan adanya expression di dalamnya."
//			   - Source = 'MDN Web Docs'

// String Literal adalah string yang biasa di gunakan 
// Tamplate Literal 
	// Menggunakan `` back tick
	// Multi-line String
	// Embedded Expression
	// HTML Fragments
	// Expression Interpolation
	// Tagged Tamplate

// Contoh
	// Tamplate Literals
		const nama = 'ryd';
		const umur = 18;
		console.log(`Hello, nama saya ${nama}, saya berumur ${umur} tahun.`);

	// Embedded Expression
		console.log(`${1 + 1}`);
		console.log(`${alert(`Hello ${nama} !!!`)} Sebuah Alert Muncul Tadi.`);

		const x = prompt('Masukkan angka :');
		console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

	// HTML Fragment
		const mhs = {
			nama: 'Restu Arya Andhika',
			umur: 18,
			nim: '2413010718',
			email: 'callmeryd111@gmail.com'
		};

const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="nim"${mhs.nim}></span>
</div>`;


console.log(el);