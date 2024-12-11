const nama = 'Farhan';
const umur = 19;

const sayHello = (nama, umur) => `Hello nama saya ${nama}, saya berumur ${umur} tahun.`;

const mahasiswa = {
	nama: 'AmbaLabu',
	umur: 9999,
	cetakMhs () {
		return `Hello my nama is ${this.nama}, i'm ${this.umur} years old.`;
	},
}

class Orang {
	constructor() {
		console.log(`Object orang telah di buat !!!`);
	}
}


const PI = 22 / 7;



module.exports = { sayHello, mahasiswa, Orang, PI, nama, umur }