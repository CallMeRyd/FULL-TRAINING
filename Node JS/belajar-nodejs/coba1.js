const nama = 'Ryd';
const umur = 18;

const sayHello = (nama, umur) => {
	console.log(`Hallo nama saya ${nama}, saya berumur ${umur} tahun.`);
}

module.exports = sayHello; // menarik function sayHello ke file yang ada require
