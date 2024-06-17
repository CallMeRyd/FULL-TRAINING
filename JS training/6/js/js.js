// pilihan player

var user = prompt ('Masukkan angka.. ( 1 -10 )\n ketik angka ex:"1"');

// pilihan bot & muncul angka random

var bot = Math.random ();
var result = '';

if ( bot < 0.01 ) {
	bot = 1;
} else if ( bot >= 0.1 && bot < 0.2 ) {
	bot = 2;
} else if ( bot >= 0.2 && bot < 0.3 ) {
	bot = 3;
} else if ( bot >= 0.3 && bot < 0.4 ) {
	bot = 4;
} else if ( bot >= 0.4 && bot < 0.5 ) {
	bot = 5;
} else if ( bot >= 0.5 && bot < 0.6 ) {
	bot = 6;
} else if ( bot >= 0.6 && bot < 0.7 ) {
	bot = 7;
} else if ( bot >= 0.7 && bot < 0.8 ) {
	bot = 8;
} else if ( bot >= 0.8 && bot < 0.9 ) {
	bot = 9;
} else {
	bot = 10;
}

// sistem

for ( i = 3; i >= 1; i-- ) {
	if ( user == bot ) {
		result = ' MENANG!';
		alert ( user + ' dan ' + bot + '\n\n' + result );		
	} else if ( user < bot ) {
		result = ' kamu kekurangan';
	} else if ( user > bot ) {
		result =' kamu kelebihan';
	} else {
		result =' MASUKKAN ANGKA !!';
	}
// 	alert( user + ' dan ' + bot + '\n\n' + result);
user = prompt ( 'Kamu ' + user + result + '\n sisa kesempatanmu ' + i + '\n bot = ' + bot );
}


// result

alert ( 'THAnks' );
// alert( user + ' dan ' + bot + '\n\n' + result);
