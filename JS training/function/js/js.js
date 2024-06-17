// intro / awal (BUAT SENDIRI)

var result = '';
 
function kubus (a, b) {
	var hasil;
	hasil = a + b;

	return hasil;
}


var a = 3;
var b = 8;

function volume (a) {
	var vol;
	vol = a * a * a;

	return vol;
}

var a = volume(a);
var b = volume(b);

console.log ( '// intro / awal (BUAT SENDIRI) \n\n' + a + '\n' + b + '\n hasil ' + kubus(a, b));

// // // // // // // // // // // // // // // // // // // // // // // //
						// ATAU //
// // // // // // // // // // // // // // // // // // // // // // // //


// tanpa menggunakan function

// sisi kubus 1
var x = 3;

// sisi kubus 2
var y = 8;

var vol1 = x * x * x;
var vol2 = y * y * y;

var total = vol1 + vol2;

console.log( '// tanpa menggunakan function \n\n' + total)



// TUTORIAL YT

function jumlahVolumeDuaKubus(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;
}

var x = 3;
var y = 8;

console.log('// TUTORIAL YT \n\n' + jumlahVolumeDuaKubus(x, y));



// coba sendiri (praktek)

// jumlahkan volume balok !!

function jumlahVolumeDuaBalok (p1, l1, t1, p2, l2, t2) {
	var volumeBalok1;
	var volumeBalok2;
	var total;

	volumeBalok1 = p1 * l1 * t1;
	volumeBalok2 = p2 * l2 * t2;

	total = volumeBalok1 + volumeBalok2;

	return total;
}

// BALOK 1
var p1 = 10; 
var l1 = 7;
var t1 = 5;

// BALOK 2
var p2 = 12;
var l2 = 8;
var t2 = 6;


// rumusnya (panjang balok 1, lebar balok 1, tinggi balok 1, panjang, lebar, tinggi)
alert('// coba sendiri (praktek) \n\n' + jumlahVolumeDuaBalok(p1, l1, t1, p2, l2 ,t2));



// another one

function penjumlahanTigaBalok (a, b, c) {
	var volBalok1;
	var volBalok2;
	var volBalok3;
	var total;

	volBalok1 = a * a * a;
	volBalok2 = b * b * b;
	volBalok3 = c * c * c;

	total = volBalok1 + volBalok2 + volBalok3;

	return total;
}
console.log ( '// another one \n\n' + penjumlahanTigaBalok(4, 5, 6) );


























