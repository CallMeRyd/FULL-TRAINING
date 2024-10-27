
var r = '';
for (var q = 5; q > 0; q--) {
	for (var w = 0; w < q; w++) {
		r += '*';
	}
	r += '\n';
}
console.log(r);


var s = '';
for (var i = 0; i < 5; i++) {
	for (var a = 0; a <= i; a++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);


var s = '';
for (var i = 0; i < 5; i++) {
	for (var a = 0; a <= i; a++) {
		for (var t = 5; t > 0; t--) {
			s += ' ';
		}
		s += '*';
	}
	s += '\n';
}
console.log(s);



var string = '';
var total = 5;

for (var o = 0; o < total; o++) {
	for (var j = 0; j < o; j++) {
		string += ' ';
	}
	for (var l = 0; l < total - o; l++) {
		string += '*';
	}
	string += '\n';
}
console.log(string);


var cc = '';
var persegi = 5;

for (var pp = 0; pp <= persegi; pp++) {
	for (var tt = persegi; tt > pp; tt--) {
		cc += ' ';
	}
	for (var spa = 0; spa <= pp; spa++) {
		cc += '*';
	}
	for (var spa = 0; spa < pp; spa++) {
		cc += '*';
	}
	cc += '\n';
	for (var tt = persegi; tt > pp; tt--) {
		cc += ' ';
	}
	for (var spa = 0; spa <= pp; spa++) {
		cc += '*';
	}
	for (var spa = 0; spa < pp; spa++) {
		cc += '*';
	}
	cc += '\n';
}
console.log(cc);


// POLA SEGITIGA 
var n = 5
var result = '';

for (var row = 1; row <= n; row++) {
	for (space = 0; space < n - row; space++) {
		result += ' ';
	}
	for (var star = 0; star < row; star++) {
		if (star >= 1) {
			result += '+';
		}
	result += '*';
	}
result += '\n';
}
console.log(result);


var re = '';
var kotak = 5;

for (var kolom = 0; kolom <= kotak; kolom++) {
	for (var jarak = 0; jarak < kolom; jarak++) {
		re += ' ';
	}
	for (var bintang = kotak; bintang > kolom; bintang--) {
		if (bintang < 5) {
			re += '^';
		}
		re += '*';
	}
	re += '\n';
}
console.log(re);


var fe = '';
var jml = 8;
var kolom = jml * 2;

for (var awal = 0; awal <= jml; awal++) {
	for (var kedua = jml; kedua > awal; kedua--) {
		fe += ' ';
	}
	for (var ketiga = 0; ketiga <= awal; ketiga++) {
		if (ketiga >= 1) {
			fe += '+';
		}
		fe += '*';
	}
	fe += '\n';
}
for (var keempat = 0; keempat <= jml; keempat++) {
	for (var kelima = -1; kelima < keempat; kelima++) {
		fe += ' ';
	}
	for (var keenam = jml; keenam > keempat; keenam--) {
		if (keenam < jml) {
			fe += '+';
		}
		fe += '*';
	}
	fe += '\n';
}
console.log(fe);



