/// /// Arrow Function
// //
//

// --- Perbedaaan Function Expression dengan Arrow Function


// Function Expression
const tamapilNama = function (nama) {
	return `Hallo, ${nama}`;
}
console.log(tamapilNama('Ryd'));


// Arrow Function

// Contoh (1)
const showName = (name) => { return `Halo, ${name}`; } 
console.log(showName('Arya'));


// Contoh (2)
const userWaktu = (user, waktu) => { 
	return `Hello, ${user} selamat ${waktu}`; 
}
console.log(userWaktu('Ambashing', 'Pagi'));


// Contoh (3)
// Implisit return
const tempat = tempat => `Aku pergi ke ${tempat}`;
console.log(tempat('Prambanan'));
//	  NOTE : Jika Parameternya hanya satu tidak menggunakan kurung juga bisa,
//			 Pada Implisit return kalian tidak perlu mengetikkan return.


// Contoh (4)
// Tanpa menggunakan Parameter
const tanpaParameter = () => `Hello World !!`;
console.log(tanpaParameter());
//	  NOTE : Jika tanpa menggunakan parameter maka harus menggunakan tanda kurung ().


// Contoh (5)
let mahasiswa = ['Restu Arya Andhika', 'Arkhan Setia Budi', 'Ali Bin Wakof'];

// Menggunkan Function Expresion 
let jumlahHuruf = mahasiswa.map(function (nama) {
	return nama.length;
});

// Menggunakan Arrow Function 
let letterLength = mahasiswa.map(nama => nama.length);

console.log(jumlahHuruf);
console.log(letterLength);

// Mengembalikan dalam bentuk Object
let totalLetter = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(totalLetter);