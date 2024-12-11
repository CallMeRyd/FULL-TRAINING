// console.log(`Hello World !!`);
const nama = 'Ryd';
console.log(nama);

const cetakNama = nama => console.log(`Hi nama saya ${nama}`);



// Penggunaan require
const sayHello = require('./coba1');
// NOTE : ./  ==  file,  ../  ==  Kembali; ex: require('../../belajar/script.js');

sayHello('Joko', 29);
cetakNama(nama);

