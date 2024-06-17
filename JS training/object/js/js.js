

// ---------------------------------> OBJECT <---------------------------------------------- //
/// +> secara umum 
//			object = kumpulan nilai, yang memiliki nama (tidak memiliki index) .
//					 +> object adalah array yang lebih sakti .



/// +> kenapa object?


// contoh jika menggunakan variable biasa :
var namaSiswa = 'dodi van hange';
var umurSiswa = 19;
var lulus = false;
var ipSemester = [2.90, 3.10, 3.25, 2.88, 3.04];

var meanIP = function (ipSemester) {
	for (var i = 0; i < ipSemester.length; i++) {
		total += ipSemester[i];

		return total/ipSemester.length; // -----> rata-rata IP siswa .
	}
};


// contoh jika menggunkan array :
var mahaSiswa = ['dodi van hange', 19, false, [2.90, 3.10, 3.25, 2.88, 3.04]];

var meanIP = function (ipSemester) {
	for (var i = 0; i < ipSemester.length; i++) {
		total += ipSemester[i];

		return total/ipSemester.length; // -----> rata-rata IP siswa .
	}
};

/// menampilkan di console
// meanIP(mahaSiswa[3]);


// JIKA MENGGUNAKAN OBJECT
var mahaSiswa = {
	nama : 'dodi van hange',
	lulus : false,
	ipSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
	IPKumulatif : function() {
		var total = 0;
		var ips = this.ipSemester;
		for (var i = 0; i < ips.length; i++) {
			total += ips[i];
		}
		return total/ips.length;
	}
}

/// menampilkan di console
// mahaSiswa.IPKumulatif();





// Anatomi Object

var orang = {
	nama : 'Restu Arya Andhika',  //
	umur : 18,					  // Dinamakan properti.
	pekerjaan : 'front-end Dev',  //
	sapa : function () {
		return 'Hi, nama saya ' + this.nama + ', usia saya ' + this.usia + ' tahun' + 'dan saya adalah seorang ' + this.pekerjaan; // Method
 	}
}

//	KETERANGAN	//
/// 'function' didalam 'Object' dinamakan 'Method' .





// +> MEMBUAT OBJECT 
/// ada 4 cara unutk membuat sebuah 'object' :
//				>> object literal
//				>> function declaration
//				>> constructor function (Keyword 'new')
//				>> 'object.create()'


// ---------+>> object literal

var mhs = {
	nama : "arya",
	umur : 18,
	ips : [4.00, 4.00, 3.99],
	alamat : {
		jalan : "Jl. ABC .12",
		kota : "Klaten",
		provinsi : "Jateng"
	}
};

// cara mengaksesnya di console :

	// mhs.nama 

	// mhs.umur

	// mhs.ips
	// mhs.ips[2]

	// mhs.alamat
	// mhs.alamat.kota
	// mhs.alamat["jalan"]
	// mhs["alamat"]["provinsi"]


// KETERANGAN //
/// di console web bisa membuat 'properti' untuk 'Object' 

// dengan cara :
// mhs.nama = 'arya'; // ----> maka akan dibuatkan properti dengan nama 'nama' yang isinya 'arya'.
//							   CATATAN : jika mengetik di 'console' maka properti tidak permanent .
//										 tetapi jika membuatnya langsung di javascript maka akan 
//										 permanent .








// ---------+>> function declaration

function buatObjectMhs(nama, alamat, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.alamat = alamat;
	mhs.jurusan = jurusan;
	return mhs;
}
var mhs3 = buatObjectMhs('suryadi', 'klaten', 'tekmik informatika');

/// CATATAN : function declaration harus ada 'var' dan 'return' di dalam function .





// ---------+>> constructor function (Keyword 'new')

function MahaSiswa(nama, alamat, jurusan) {
	this.nama = nama;
	this.alamat = alamat;
	this.jurusan = jurusan;
}
var mhs4 = new MahaSiswa('Rahmat', 'Bandung', 'Teknik Mesin');

/// CATATAN : sedangkan untuk 'constructor function' tidak memerlukan 'var' dan 'return' di
//			  dalam function, tetapi saat ingin memanggilnya harus menggunakan keyword 'new'. 















// ----------------------------->> THIS <<------------------------------------ //


/// 'this' sama dengan 'window' / (global) .
console.log(this === window); // -----> true

// sebagai contoh lain
var a = 10;

console.log(a); 	   //
console.log(this.a);   // Maka hasilnya sama 10 .
console.log(window.a); //





// membuat object


// cara 1 - function declaration 
function halo() {
	console.log(this);
	console.log('halo');
}
console.log('\n\n\n\n\n')
this.halo();
/// CATATAN = 'this' mengembalikan object global.




// cara 2 - object literal
var obj = {a : 'falih', no : 12, pekerjaan : 'buruh'};
obj.halo = function() {
	console.log(this);
	console.log('Hallo');
}
obj.halo();
// CATATAN = 'this' mengembalikan object yang bersangkutan.





// cara 3 - contructor function
function Hallo() {
	console.log(this);
	console.log('Hai');
}
var obj1 = new Hallo();
var obj2 = new Hallo();
// CATATAN = 'this' mengembalikan object yang baru di buat.



















