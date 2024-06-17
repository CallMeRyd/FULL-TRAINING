

// ----------------------------> ARRAY <-------------------------------------------------------------------------//


// [1] ---------> array
/// array adalah variable jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama,
/// atau array adalah pasangan key dan nilai / (key and value pair).
/// key adalah index pada array dengan tipe integer yang dimulai dari 0.
/// array pada javascript bertipe objek.
/// array pada javascript memiliki fungsi / method lenght untuk menghitung jumlah elemen di dalamnya.
/// elemen pada array boleh memiliki tipe data yang berbeda.

//catatan : perbedaan 'array' dan 'variable' terletak pada seberapa banyak yang dapat di tampung.

// ------------------- contoh 'variable' --------------------------------------------------

var x = 2;
var x1 = 3;
var x2 = 4;

var hari1 = 'senin';
var hari2 = 'selasa';
var hari3 = 'rabu';
var hari4 = 'kamis';


//catatan : dengan menggunakan 'var' maka hanya bisa menampung 1 element.
//			sedangkan array bisa menampung lebih dari 1.



// ------------------- contoh 'array' ------------------------------------------------

var x = [2,3,4];

var hari = ['senin','selasa','rabu','kamis']; // -------> array dimulai dari 0 

//------///--------> IMPORTANT <---------///---------// 

// karena array dimulai dari 0, maka (senin berada di urutan 0),
// jadi urutannya [ senin = 0 , selasa = 1 , rabu = 3 , kamis = 4 ]

console.log('tampil array urutan ke-3 ---> ' + hari[3]); // --> cara menampilkan array pada urutan 3



///-----// ATAU 

var x = [];
x = [2,3,4];

var hari = [];
hari = ['senin','selasa','rabu','kamis'];

console.log ( hari[3] );


/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///


// [2] -----------> ELEMENT PADA ARRAY BOLEH BEDA TIPE .
/// bisa ada string, integer, bolean, function, array lagi (array bersarang)

var hari = ['senin','selasa','rabu','kamis']; 

var angka = [2, 30, 400, 5000];

var myArr = ['teks', 2, false];

var myfunc = function () {
	alert ('Hello World!');
}

var myArr2 = ['teks', 2, false, myfunc];

var myArr3 = ['teks', 2, false, myfunc, [4, 5, 6]]; // ----> disebut sebagai array multi dimensi / array bersarang.




// -------------> CARA MEMUNCULKAN ARRAY MULTI DIMENSI / ARRAY BERSARANG .

var myArr3 = ['teks', 2, false, myfunc, [4, 5, 6]];

console.log('array bersarang / array multi dimensi ---> ' + myArr3[4][1]); // akan muncul 5






// -------------------> Kenapa Pakai Array ?? <---------------------------------------------------

//		1. mempermudah pengelolaan nilai / value / data
//				+> penulusauran dan pencarian
//
//		2. manejemen memori


/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///


// [3] -------------> MANIPULASI ARRAY .


// -- Menampilkan seluruh isi array -- //

var arr = ['satu',1,true];
console.log (arr);

// -- Menambahkan isi array -- //

var arr1 = [];
arr1[0] = "januari";
arr1[1] = "februari";
arr1[2] = "maret";
// PERINGATAN // ------> indexnya harus berurutan jika tidak berurutan maka
//						 Javasrcipt akan secara otomatis membuat index baru dengan
//						 nama 'undefined' .

console.log(arr);


/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///



// [4] -------------> MENGHAPUS ISI ARRAY .

// note : jika ingin menghapus "tiga" maka bisa dengan cara ini

var arr2 = ["satu","dua","tiga","empat"];
arr2[2] = undefined;


/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///



// [5] -------------> MENAMPILKAN ISI ARRAY .

var arr3 = ["satu","dua","tiga"];

for ( i = 0; i < arr3.length; i++ ) {
	console.log('nomer : ' + (i + 1) + ' (' + arr3[i] + ')' );
}


/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///












// [6] -------------> ARRAY METHOD .

/// ada beberapa method dalam array Javascript :
//		(1) length (panjang array / banyak element pada array)
//		(2) join (digunakan untuk mengubah objek dalam array menjadi string)
//		(3) push, pop, shift, unshift (digunakan untuk menghapus dan menambahkan)
//		(4) slice, splice (menghapus, menambahkan, memotong array)
//		(5) forEach, map (pengulangan / looping)
//		(6) sort (mengurutkan)
//		(7) filter, find (find mengembalikan satu nilai sedangkan filter banyak nilai)

/// untuk lebih banyak lagi bisa kunjungi :
// 	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array











/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///





// ----	(1) Length

// ------------------- contoh 'join' pada 'array' ---------------------------------------------

var arr3 = ["satu","dua","tiga","empat","lima"];

for ( i = 0; i < arr3.length; i++ ) {
	console.log('nomer yang ke-' + (i + 1) + ' (' + arr3[i] + ')' );
}


// ----	(2) Join

// ------------------- contoh 'join' pada 'array' ---------------------------------------------

var arr4 = ["satu","dua","tiga","empat"];
console.log(arr4); // ------> ini akan menampilkan seluruh isi array dengan tidak rapi
//							  oleh user maka harus ditambahkan '.join()' agar 
//							  berubah menjadi string .

// Jadi -----\/

var arr5 = ["satu","dua","tiga","empat"];
console.log(arr5.join()); // -----> di dalam tanda kurung '()' bisa diganti menjadi apa
//									apa saja yang diinginkan .
// semisal -----\/

var arr6 = ["satu","dua","tiga","empat"];
console.log(arr6.join(' - ')); // ------> maka tanda koma ',' akan diganti menjadi ' - ' .



// ----	(3) Push
/// push = menambahkan beberapa elemnt pada array dari belakang .

var arr7 = ["aaa","bbb","ccc"];
arr7.push('(ddd)','(eee)','(fff)');

console.log(arr7.join(' > '));




// ----	(4) Pop
/// pop = menghapus element di bagian belakang array satu per satu .

var arr8 = ["ayam","bebek","singa","gajah"];
arr8.pop(); // -------> maka element 'gajah' akan menghilang .
arr8.pop(); // ----> menghapus element setelah 'gajah' .
arr8.pop(); // --> dan sseterusnya .

console.log(arr8.join(' - '));




// ----	(5) UnShift
/// Unshift = menambahkan array sama seperti push tetapi dari depan .

var arr9 = ['dodi','dimas','jaka','ibnu'];
arr9.unshift('(hulwa)','(angel)');

console.log (arr9.join(' - '));





// ----	(6) Shift
/// shift = menghapus array sama seperti pop tetapi dari depan .

var arr10 = ['dodi','dimas','ibnu','jaka'];
arr10.shift();
arr10.shift();
arr10.shift();

console.log (arr10.join(' - '));





// ----	(7) Splice
/// splice = menyisipkan element array di tengah-tengah .

var arr11 = ['Restu','Arya','Andhika'];
arr11.splice(2, 0, '(Joseph)','(Mail)');
//		Keterangan = +> 2 : IndexAwal
//					 +> 0 : mauDihapusBerapa
//					 +> '(Joseph)','(Mail)' : lementBaru1, lementBaru2

console.log(arr11.join(' - '));



// contoh lain ++++++
var arr12 = ['Restu','Arya','Andhika'];
arr12.splice(1, 2, '(Shidqi)','(Aziz)'); // ----> menambahkan dan menghapus 2 element
//												  setelah index ke-1 .

console.log(arr12.join(' - '));
console.log('\n\n\n\n');



// contoh lain ++++++
var arr14 = ['Restu','Arya','Andhika'];
arr14.splice(1, 1, '(Shidqi)','(Aziz)'); // -----> akan menghapus 1 element setelah index
//												   ke-1 dan menambahkan element baru .

console.log(arr14.join(' - '));
console.log('\n\n\n\n');





// ----	(6) Slice
/// slice = menampilkan isi element di tengah pada array

var arr13 = ['Restu','Arya','Andhika','Shidqi','Aziz'];
arrXX = arr13.slice(1, 3); // -----> akan memotong 'arya - andhika' dan dimasukkan
//									 pada array yang baru (arrXX) .

console.log(arrXX.join(' - '));
console.log('\n\n\n\n');






// ----	(7) forEach
/// forEach = digunakan untuk melakukan looping pada array .

var angka = [1,2,3,4,5,6,7,8];
for ( var i = 0; i < angka.length; i++ ) {
	console.log(angka[i]);
}
console.log('\n\n\n\n');


// 'for' diatas bisa digantikan oleh 'forEach' .


angka.forEach(function(e) {
	console.log(e);
})
console.log('\n\n\n\n');


// contoh lain ++++++
var myArr4 = ['harimau',2,true,['satu','dua','tiga','empat']];
myArr4.forEach(function(b) {
	console.log(b);
})
console.log('\n\n\n\n');



// contoh lain ++++++
var datasiswa = ['Restu','Arya','Andhika','Shidqi','Aziz']
datasiswa.forEach(function(c, i) {
	console.log('siswa ke-' + (i + 1) + ' adalah ' + c);
})
console.log('\n\n\n\n');







// ----	(8) Map
/// Map = digunakan untuk melakukan looping pada array perbedaannya 
//        'map' bisa mengoprasikan integer.

var angka = [1,4,3,6,3,1];
var perkalian2 = angka.map(function(k) {
	return k * 2; // ------> semua alement integer di kali 2 .
})

console.log(perkalian2.join(' - '));
console.log('\n\n\n\n');







// ----	(8) Sort
/// sort = digunakan untuk mengurutkan isi array .

var angka = [1,4,3,6,3,9,7,4];
angka.sort();

console.log(angka.join(' - '));
console.log('\n\n\n\n');




// HATI-HATI pada bagian dibawah ini !!! //
var angka = [1,4,10,3,6,40,25,3,9,7,4];
angka.sort();

console.log(angka.join(' - '));
console.log('\n\n\n\n');



/// jika ingin membuat urutan yang benar .

var angka = [1,4,10,3,6,40,25,3,9,7,4,305,211];
angka.sort(function(a, b) {
	return a - b; // -----> dengan cara ini bisa membuat urutan yang benar .
});

console.log(angka.join(' - '));
console.log('\n\n\n\n');








// ----	(9) filter
/// filter = untuk mencari nilai pada array dan mengembalikannya dalam bentuk array .

var angka = [1,2,3,4,5,11,6,67,45];
var mencariAngka = angka.filter(function(x) {
	return x == 5; // -----> untuk mencari element pada array .
});
console.log(mencariAngka);
console.log('\n\n');



// jika element yang di cari tidak ada //
var mencariAngka1 = angka.filter(function(c) {
	return c == 9; // ------> hasilnya array kosong .
});
console.log(mencariAngka1);
console.log('\n\n');

/// CATATAN = pada 'c == ...' '== (samadengan)'nya bisa di ubah 
//			  menjadi '< (lebih kecil dari)', '> (lebih besar dari)', DLL .

// CONTOH +++
var dataAngka = [1,2,3,4,5,9,8,7,6];
var getnumber = dataAngka.filter(function(b) {
	return b > 4;
});

getnumber.sort(function(a, b) {
	return a - b;
});

console.log(getnumber.join(' - '));
console.log('\n\n\n\n');






// ----	(10) Find
/// find = sama seperti filter, intinya untuk mencari element pada array, tapi
//		   bedanya kalo filter bisa menampilkan lebih dari satu, sedangkan find
//		   hanya bisa menampilkan satu element .

var mencari = [1,3,4,5,7,8,10];
var cari1 = mencari.find(function(b) {
	return b > 5;
});
console.log(cari1);
console.log('\n\n\n\n');
























/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///
 /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///