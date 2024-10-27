// // Caramembuat object pada JS :

// //	1. Object Literal
// // 		PROBLEM : tidak efektif untuk object yang banyak
// 	let player1 = {
// 		nama : 'Ryd',
// 		hp : 100,
// 		makan : function (porsi) {
// 			this.hp = this.hp + porsi;
// 			console.log(` ${this.nama} HP bertambah`);
// 		}
// 	}

// 	let player2 = {
// 		nama : 'Ule',
// 		hp : 150,
// 		makan : function (porsi) {
// 			this.hp = this.hp + porsi;
// 			console.log(` ${this.nama} HP bertambah`);
// 		}
// 	}


// //	2. Function Declaration

// 	const methodMahasiwa = {
// 		makan : function (porsi) {
// 			this.hp += porsi;
// 			console.log(` ${this.nama} HP bertambah`);
// 		},
// 		main : function (mengurang) {
// 			this.hp -= mengurang;
// 			console.log(` ${this.nama} HP berkurang`);
// 		},
// 		tidur : function (jam) {
// 			this.hp += jam * 2;
// 			console.log(` ${this.nama} mulai tidur`);
// 		}
// 	};

// 	function PlayerA(nama, hp) {
// 		let player3 = {};
// 		player3.nama = nama;
// 		player3.hp = hp;
// 		player3.makan = methodMahasiwa.makan;
// 		player3.main = methodMahasiwa.main;
// 		player3.tidur = methodMahasiwa.tidur;

// 		return player3;
// 	}


// 	let bobon = PlayerA('Bobon', 100);
// 	let nVjuisy = PlayerA('N-Vjuisy', 300);


// //	3. Constructor Function
// //	Keyword new
// 	function PlayerB(nama, hp) {
// 		this.nama = nama;
// 		this.hp = hp;

// 		this.main = function (mengurang) {
// 			this.hp -= mengurang;
// 		}

// 		this.makan = function (porsi) {
// 			this.hp += porsi;
// 		}
// 	}

// 	let beni = new PlayerB('Beni123', 50);
// 	let kontolodon = new PlayerB('Kontolodon', 220);


// //	4. Object.create()
// 	const methodMahasiwa1 = {
// 		makan : function (porsi) {
// 			this.hp += porsi;
// 			console.log(` ${this.nama} HP bertambah`);
// 		},
// 		main : function (mengurang) {
// 			this.hp -= mengurang;
// 			console.log(` ${this.nama} HP berkurang`);
// 		},
// 		tidur : function (jam) {
// 			this.hp += jam * 2;
// 			console.log(` ${this.nama} mulai tidur`);
// 		}
// 	};

// 	function PlayerC(nama, hp) {
// 		let player3 = Object.create(methodMahasiwa1);
// 		player3.nama = nama;
// 		player3.hp = hp;

// 		return player3;
// 	}


// 	let vanbonjeng = PlayerC('Van-Bonjeng', 400);
// 	let perpe = PlayerC('X-Perpe', 350);








































// ME TIME ::

// Cara buat object
// 1. Object Literal
	let arya = {
		nama : 'arya',
		power : 100,

		makan : function (porsi) {
			this.power += porsi * 2;
			console.log(arya.power);
		}
	};
	console.log(arya);

// 2. Function Declaration
	function Objek(nama, power) {
		let objek = {};
		objek.nama = nama;
		objek.power = power;

		objek.makan = function (porsi) {
			objek.power += porsi;
			console.log(objek.power);
		}

		return objek;
	}
	let pandu = Objek('Pandu', 210);
	console.log(pandu);

// 3. Constructor Function
	function Create (nama, power) {
		this.nama = nama;
		this.power = power;

		this.makan = function (porsi) {
			this.power += porsi * 3;
			console.log(this.power);
		}
	}
	let hamzan = new Create('Hamzan', 400);
	console.log(hamzan);

// 4. Object.create()
	let metthodBuat = {
		makan : function (porsi) {
			this.power += porsi;
			console.log(this.power);
		},
		mengurang : function (mengurang) {
			this.power -= mengurang;
			console.log(this.power);
		}
	};
	function Buat(nama, power) {
		let object = Object.create(metthodBuat);
		object.nama = nama;
		object.power = power;
		return object;
	}
	let kunto = Buat('Kunto', 150);
	console.log(kunto);

	console.log(`Hello ${kunto.nama} dengan power ${kunto.power}, Selamat datang kembali setelah bertahun-tahun.`)









