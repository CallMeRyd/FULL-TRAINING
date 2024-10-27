// Array
//

//	Array 	adalah Tipe data yang digunakan 
//			untuk mendeskripsikan kumpulan elemen (nilai / variabel), 
//			yang tiap-tiap elemennya memiliki Index.

//  Array	adalah variabel yang bisa memuat banyak nilai.		

var hh = ['array', 'selasa', 'rabu', 12, 'Manipulasi'];

console.log(hh[4] + ' ' + hh[0] + '\n\n');


// Manipulasi array

// 1. Menambah isi array

		var arr = [];
		arr[0] = 'Call';
		arr[1] = 'Me';
		arr[2] = 'Ryd'; // jika melewati Index maka Index tersebut menjadi undefined. 
		arr[4] = '^_^'; // dalam kasus ini arr melewati / mengkosongkan array index ke-3.

		console.log(arr);

// 2. Menghapus isi array

		var arr1 = ['Call', 'Me', 'Ryd', '^_^'];
		arr1[1] = undefined;

		console.log(arr1);
		console.log('\n');

// 3. Menampilkan isi array

		var arr2 = ['Restu', 'Arya', 'Andhika', 'Putri'];

		for (var i = 0; i < arr2.length; i++) {
			console.log('Nama Mahasiswa ke-' + (i+1) + ' adalah ' + arr2[i]);
		}
		console.log('\n');

// Array method
	// 1) .length
		var arr3 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		console.log(arr3.length);
		console.log('\n');

	// 2) .join
		var arr4 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		console.log(arr4.join(', '));
		console.log(arr4.join(' - '));
		console.log(arr4.join(' > '));
		console.log('\n');

	// 3) .push & .pop
		var arr5 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		var arr6 = ['Restu', 'Arya', 'Andhika', 'Putri'];

		arr5.push('(keyla)', '(angel)'); // menambah bagian terakhir
		arr6.pop() // menghapus bagian terakhir
		arr6.pop()

		console.log(arr5.join(', '));
		console.log(arr6.join(', '));
		console.log('\n');

	// 4) .unshift & .shift
		var arr7 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		var arr8 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		
		arr7.unshift('(angel)', '(keyla)'); // menambah bagian terakhir
		arr8.shift(); // menghapus bagian terakhir
		arr8.shift();

		console.log(arr7.join(', '));
		console.log(arr8.join(', '));
		console.log('\n');

	// 5) .splice
		// splice (IndexAwal, mauDihapusBerapa, elementBaru, elementBaru2, ...)
		var arr9 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		var arr10 = ['Restu', 'Arya', 'Andhika', 'Putri'];
		
		arr9.splice(2, 0, '(keyla)');
		arr10.splice(1, 2, '(keyla)', '(angel)'); // menghapus 2 bagian di mulai dari index 1 dan menambahkan 2 bagian baru
		
		console.log(arr9.join(', '));
		console.log(arr10.join(', '));
		console.log('\n');

	// 6) .slice
		// slice(awal, akhir);
		var arr11 = ['Restu', 'Arya', 'Andhika', 'Putri'];

		var arr12 = arr11.slice(1, 3); // slice menghasilkan array baru

		console.log(arr11.join(', '));
		console.log(arr12.join(', '));
		console.log('\n');

	// 7) .forEach
		// .forEach(a, b, c);
		var arr12 = ['Restu', 'Arya', 'Andhika', 'Putri'];

		arr12.forEach(function (a, i) { // forEach digunakan untuk mengulang sama seperti for tetapi forEach codingannya lebih rapi.
			console.log('Mahsiswa ke-' + (i+1) + ' adalah : ' + a);
		});
		console.log('\n');

	// 8) .map
		var arr13 = [1, 9, 3, 7, 5, 2, 4];

		var result = arr13.map(function (e) { // sama seperti forEach tetapi bisa mengembalikan array dan lebih sakti.
						return e * 2;
					 });

		console.log(result.join(' - '));
		console.log('\n');

	// 9) .sort
		var arr14 = [1, 9, 3, 7, 5, 2, 4, 10, 21];
		var arr15 = [1, 9, 3, 7, 5, 2, 4, 10, 21];

		arr14.sort(); // mengurutkan
		arr15.sort(function (a, b) { // mengurutkan puluhan juga
			return a - b;
		}); 

		console.log(arr14.join(' > '));
		console.log(arr15.join(' - '));
		console.log('\n');

	// 10) .filter
		var arr16 = [1, 9, 3, 7, 5, 2, 4, 10, 21];
		var arr18 = [1, 9, 3, 7, 5, 2, 4, 10, 21];

		var arr17 = arr15.filter(function (x) { // mencari angka 5 pada array dan menghasilkan array
			return x == 5;
		});
		var arr19 = arr15.filter(function (x) { // mencari angka yang > 5 dan menghasilkan array
			return x > 5;
		});

		console.log(arr17.join(' ~ '));
		console.log(arr19.join(' ~ '));
		console.log('\n');

	// 11) .find
		var arr20 = [1, 9, 3, 7, 5, 2, 4, 10, 21];

		var arr21 = arr20.find(function (x) { // mencari angka yang > 5 tetapi akan menghasilkan 1 nilai bukan array
			return x > 5;
		});

		console.log(arr21);
		console.log('\n');





