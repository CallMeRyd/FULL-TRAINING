/// /// Prototype
//	//
//


// Function Declaration
	function Mahasiswa(nama, energi) {
		let mahasiswa = {};
		mahasiswa.nama = nama;
		mahasiswa.enegi = energi;

		return mahasiswa;
	}
	let adhi = Mahasiswa('Adhi', 100);
	console.log(adhi);

// Constructor Function new
	// NOTE : yang terjadi di belakang layar di slash 2
	
	function Mahasiswa1(nama, energi) {
		// let this = Object.create(Mahasiswa1.prototype);
		this.nama = nama;
		this.enegi = energi;

		// return this;
	}
	let rafa = new Mahasiswa1('Rafa', 120);
	console.log(rafa);

// CARA PENGGUNAAN PROTOTYPE
	// constructor function
	function Mahasiswa2(nama, energi) {
		this.nama = nama;
		this.enegi = energi;
	}

	Mahasiswa2.prototype.makan = function(porsi) {
		this.energi += porsi * 1.5;
		console.log(`${this.nama} energinya bertambah sampai ${this.energi}`);
	};

	Mahasiswa2.prototype.mengurang = function(mengurang) {
		this.energi -= mengurang * 2;
		console.log(`${this.nama} energinya tersisa sampai ${this.energi}`);
	};
	let danu = new Mahasiswa2('Danu', 400);
	console.log(danu);






































// // ME TIME ::

// // Cara buat object
// // 1. Object Literal
// 	let arya = {
// 		nama : 'arya',
// 		power : 100,

// 		makan : function (porsi) {
// 			this.power += porsi * 2;
// 			console.log(arya.power);
// 		}
// 	};
// 	console.log(arya);

// // 2. Function Declaration
// 	function Objek(nama, power) {
// 		let objek = {};
// 		objek.nama = nama;
// 		objek.power = power;

// 		objek.makan = function (porsi) {
// 			objek.power += porsi;
// 			console.log(objek.power);
// 		}

// 		return objek;
// 	}
// 	let pandu = Objek('Pandu', 210);
// 	console.log(pandu);

// // 3. Constructor Function
// 	function Create (nama, power) {
// 		this.nama = nama;
// 		this.power = power;

// 		this.makan = function (porsi) {
// 			this.power += porsi * 3;
// 			console.log(this.power);
// 		}
// 	}
// 	let hamzan = new Create('Hamzan', 400);
// 	console.log(hamzan);

// // 4. Object.create()
// 	let metthodBuat = {
// 		makan : function (porsi) {
// 			this.power += porsi;
// 			console.log(this.power);
// 		},
// 		mengurang : function (mengurang) {
// 			this.power -= mengurang;
// 			console.log(this.power);
// 		}
// 	};
// 	function Buat(nama, power) {
// 		let object = Object.create(metthodBuat);
// 		object.nama = nama;
// 		object.power = power;
// 		return object;
// 	}
// 	let kunto = Buat('Kunto', 150);
// 	console.log(kunto);

// 	console.log(`Hello ${kunto.nama} dengan power ${kunto.power}, Selamat datang kembali setelah bertahun-tahun.`)









