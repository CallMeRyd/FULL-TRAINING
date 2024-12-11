/// /// For..of & For..in
// //
//

// Looping baru
	// for..of 
		// Literable Object 
			// tring
			// Array
			// Arguments / NodeList
			// TypedArray
			// Map
			// Set
			// User-defined literables

// Array
		// for..of
			const mhs = ['Ryd', 'dika', 'cangin'];

		// for (biasa)
			for (var i = 0; i < mhs.length; i++) {
				console.log(mhs[i]);
			}

		// forEach
			mhs.forEach((n, i) => console.log(`no.${i + 1} adalah ${n}.`));

		// for..of
			for (const nama of mhs) { // tidak include index-nya
				console.log(nama);
			}

			// ngakalinnya

			for (const [i, m] of mhs.entries()) {
				console.log(`no.${i + 1} adalah ${m}.`);
			}


// Nodelist
		// foEach
			const liNama = document.querySelectorAll('.nama');
			liNama.forEach( n => console.log(n.innerHTML));

		// for..of
			for ( [i, nama] of liNama.entries() ) {
				console.log(`index ke-${i + 1} adalah ${nama.textContent}`);
			}

// Arguments
		// for..of
			function plusAll() {
				let total = 0;
				for ( int of arguments ) {
					total += int;
				}
				return total;
			}

			console.log(plusAll(1, 2, 3, 4, 5));

// For..in ----------------
// Object
		// for..in
			const gugugaga = {
				nama: 'Ryd',
				umur: 18,
				email: 'callmeryd111@gmail.com'
			}

			for ( m in gugugaga ) {
				console.log(m);
			}

			for ( m in gugugaga ) {
				console.log(gugugaga[m]);
			}

		// Contoh lain 
			const agenda = {
				jam1: 'greeting',
				jam2: 'rounddown',
				jam3: 'evaluating'
			}

			for ( n in agenda ) {
				console.log(agenda[n]);
			}