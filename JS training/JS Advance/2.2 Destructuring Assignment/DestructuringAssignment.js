/// /// Destructuring Assignment
// //
//

// Array
// Destruction Array -----------------------------------
		const buah = ['appel', 'mangga', 'jeruk', 'alpukat', 'kedondong'];
		const [satu, dua, tiga, alpukat, kukocok] = buah;

		console.log(satu);
		console.log(tiga);
		console.log(kukocok);
// =====================================================


// Skipping items --------------------------------------
		const namas = ['aak', 'iik', 'uuk', 'eek'];
		const [first, , , forth] = namas;

		console.log(first);
		console.log(forth);
// =====================================================


// Swap Items ------------------------------------------
		let angka = [1, 2];
		let [dd, ff] = angka;

		console.log(dd);
		console.log(ff);

		[dd, ff] = [angka[1], angka[0]];

		console.log(dd);
		console.log(ff);
// =====================================================


// return values pada function -------------------------
		function show() {
			return [1, 2];
		}

		const [aoka1, aoka2] = show();

		console.log(aoka2);
// =====================================================


// Rest Parameter --------------------------------------
		const [ree, ...values] = [1, 2, 3, 4, 5, 6]; // ...values berbentuk array

		console.log(ree);
		console.log(values);

		const valuesKaliDua = values.map(a => a * 2);

		console.log(valuesKaliDua);
// =====================================================










// Object
// Destructuring Object --------------------------------
		const mhs1 = {
			nama: 'Arya',
			umur: 18
		}

		const {nama, umur} = mhs1;

		console.log(nama);
		console.log(umur);
// =====================================================



// Assignment tanpa deklarasi object -------------------
		({nama1, umur1} = {nama1: 'Ryd', umur1: 18});

		console.log(nama1);
		console.log(umur1);
// =====================================================



// Assignment ke variabel baru -------------------------
		const mhs2 = {
			nama2: '(gani-gani',
			umur2: 999
		}

		const {nama2: n, umur2: u} = mhs2;

		console.log(u);
		console.log(n);
// =====================================================



// Memberikan Nilai Defult Value -----------------------
		const mhs3 = {
			nama3: 'hujan-badai-angin-ribut',
			umur3: 999,
			email3: 'la-la-la-la-la-laaa | la-la-la-laa | la-la-laa)'
		}

		const {nama3, umur3, email3 = 'emailDefult@gmail.com'} = mhs3;

		console.log(nama3);
		console.log(email3);
// =====================================================



// Memberikan Nilai Defult Value + assign ke variabel baru
		const mhs4 = {
			nama4: '2x',
			umur4: 999,
			email4: 'palpalepappasipana@gmail.com'
		}

		const {nama4: n4, umur4: u4, email4: e4 = 'DefultEmail@gmail.com'} = mhs4;
		
		console.log(n4);
		console.log(e4);
// =====================================================



// Rest Parameter --------------------------------------
		const mhs5 = {
			nama5: 'Dimas Kanjeng Pramata',
			umur5: 200,
			email5: 'pramartaKolbi@gmail.com'
		}

		const {nama5, ...lainnya} = mhs5; // ...lainnya berbentuk object
		console.log(lainnya);
// =====================================================



// Mengirim field pada object, setelah dikirim sebagai parameter untuk function
		const mhs6 = {
			id: 123,
			nama6: 'opkol',
			umur6: 24,
			email6: 'opkll@gmail.com'
		}

		function getIdMhs({ id, nama6 }) { // sama seperti mhs.id
			return `'${nama6}' dengan ID ${id}`;
		}

		console.log(getIdMhs(mhs6));
// =====================================================
