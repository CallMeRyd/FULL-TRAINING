// // FUNCTION
// // funtion dari javascript / bawaan dari JS
// 	// ex : alert, prompt, confirm, DLL


// // membuat function sendiri
// // ada dua cara
// 	// + funtion declaration
// 	// + funtion ekspression


// // funtion declaration
// function penjumlahan (a, b) {
// 	var total;
// 	total = a + b;

// 	return total;
// }


// // function ekspression
// var penjumlahan = function (a, b) {
// 	var total;
// 	total = a + b;

// 	return total;
// }


// // cara memunculkannya
// alert ( penjumlahan(1, 2));
// alert ( penjumlahan(35, 10));
// alert ( penjumlahan(355, 100));
// alert ( penjumlahan(1200, 5500));

// coba sendiri

var pengurangan = function (a, b) {
	var total;
	total = b - a;

	return total;
}

function pengurangan (a, b) {
	var total;
	total = b - a;

	return total;
}


console.log ( pengurangan(1, 9) + '\n' + pengurangan(15, 95) + '\n' + pengurangan(156, 956) + '\n' + pengurangan(1569, 9569) + '\n' + pengurangan(15690, 95690) + '\n' + pengurangan(156900, 956900) );

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