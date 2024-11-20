/// /// Arrow Function (Advance)
// //
//




// Konsep this pada arrow function

// contoh pada constructor function
const Contoh1 = function () {
	this.con1 = () => {
		console.log(this); // this mengacu pada object
	}
}
const danu = new Contoh1();



// Contoh pada Objek literal
const Contoh2 = {
	con2: () => {
		console.log(this); // Konsep this disini mengacu pada Window
	}
}
console.log(danu.con1());
console.log(Contoh2.con2());







// contoh pada constructor function
const  Mahasiswa = function () {
	this.nama = 'Call ME Ryd';
	this.umur = '18';
	this.halo = () => { // Method-nya bisa menggunakan arrow function
		console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
	}


	setInterval(() => {
		console.log(this.umur++);
	}, 1000); // Per detik umur++
}
const ryd = new Mahasiswa();
//	  PENJELASAN : Karena konsep this pada arrow function mengacu pada 
//				   Object bukan ke window.


// Objek literal
const Mhs1 = {
	name: 'Ryd',
	age: 18,
	sayHello: function () {
		console.log(`Hello, my name is ${this.name},and i'm ${this.age} years old.`);
	}
}













