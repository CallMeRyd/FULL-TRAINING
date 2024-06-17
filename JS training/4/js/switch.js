// var nomer = prompt('Masukan angka')

// if ( nomer % 2 == 0 ) {
// 	alert('angka ' + nomer + ' adalah GENAP.')
// } else if ( nomer % 2 == 1 ) {
// 	alert('angka ' + nomer + ' adalah GANJIL.')
// } else {
// 	alert( '"' + nomer + '"' + ' bukanlah angka.')
// }

// var pengulangan = true
// while ( pengulangan === true) {

// 	var makanan = prompt('Tulis makanan yang anda inginkan : /n (contoh : nasi, daging, susu, burger, cocacola)')
// 	switch ( makanan ) {
// 		case 'nasi' :
// 		case 'daging' :
// 		case 'susu' :
// 			alert('Makanan ' + makanan + ' adalah makanan yang SEHAT.');
// 			break;
// 		case 'burger' :
// 		case 'cocacola' :
// 			alert('Makanan ' + makanan + ' adalah makanan yang TIDAK SEHAT.');
// 			break;
// 		default :
// 			alert('Tulislah makanan yang kami sebutkan tadi.');
// 			break;
// 	}
// 	pengulangan = confirm ('Coba Lagi ?');

// }

var baris = 10;
var s = '';

for ( var i = 10; i > 0; i-- ) {
	for ( var j = 0; j < i; j++ ) {
		s += 'x';
	}
	s += '\n';	
}
console.log(s);




// coba sendiri

var n = 10;
var result = '';

for ( var kolom = 0; kolom < n; kolom++ ) {
	for ( var baris = 0; baris <= n; baris++ ) {
		result += 'x';
	}
	result += '\n';
}
console.log ( result )

// POLA segitiga

var n = 5;
var result = '';

for ( var row = 0; row <= n; row++ ) {
	for ( var space = 0; space < n - row; space++ ) {
		result +=' ';
	}
	for ( var star = 0; star < row; star++ ) {
		if ( star >= 1 ) {
			result += '+';
		}
		result += '*';
	}
	result += '\n';
}
console.log ( result );


// another one

var n = 10;
var result = '';

for ( var kolom = 0; kolom <= n; kolom++ ) {
	for ( var spasi = 0; spasi < n - kolom; spasi++ ) {
		result +=' ';
	}
	for ( var baris = 0; baris < kolom; baris++ ) {
		if ( baris >= 1 ) {
			result +='#';
		}
		result +='x';
	}	
	result += '\n';
}
console.log(result)




// another one

var n = 10;
var result = '';

for ( var kolom = n; kolom > 0; kolom-- ) {
	for ( var la = 10; la <= n + kolom; la++ ) {
		result +=' ';
	}
	for ( var baris = 0; baris < kolom; baris++ ) {
		if ( baris >= 1 ) {
			result += '+';
		}
		result +='*';
	}
	result += '\n';
}
console.log(result)



// POLA PAPAN CATUR

var r = '';

for ( var bawah = 0; bawah < 5; bawah++ ) {
	for ( b = 0; b <= 4; b++ ) {
		if ( bawah % 2 === 0 ) {
			r +=' ';
		}
		r += '#';
		if ( bawah % 2 === 1 ) {
			r +=' ';
		}
	}
	r +='\n';
}
console.log(r)

//  POLA BELAH KETUPAT

var result = '';
var n = 10;

for ( var i = 0; i <= n; i++ ) {
	for ( var space = 0; space < n - i; space++ ) {
		result += ' '; 
	}
	for ( var b = 0; b < i; b++ ) {
		if ( b >= 1 ) {
			result += '*'; 
		}
		result += 'x';
	}
	result += '\n';
}
for ( var i = 9; i > 0; i-- ) {
	for ( var space = 0; space < n - i; space++ ) {
		result += ' '; 
	}
	for ( var b = 0; b < i; b++ ) {
		if ( b >= 1 ) {
			result += '*'; 
		}
		result += 'x';
	}
	result += '\n';
}

console.log ( result );


// another one

var result = '';
var n = 5;

for ( var kolom = 0; kolom < n; kolom++ ) {
	for ( var space = 0; space < n - kolom; space++ ) {
		result += ' ';
	}
	for ( var baris = 0; baris <= kolom; baris++ ) {
		if ( baris >= 1 ) {
			result += '--';
		}
		result += 'x';		
	}
	result += '\n'; 
}
console.log ( result )





















