 function tambah() {
 	var result = 0;
 	for (var i = 0; i < arguments.length; i++) {
 		result += arguments[i];
 	} 
 	return result;
 }

 var coba = tambah(1, 2, 7, 8, 10);
 console.log(coba);
 console.log('\n\n');



function kali() {
	var re = 1;
	for (var i = 0; i < arguments.length; i++) {
		re *= arguments[i]
	}
	return re;
}

var perkalian = kali(1, 3, 10, 2, 7);
console.log('perkalian ' + perkalian);
console.log('\n\n');


// ME TIME::
//

// var hasil = '';
// var ulang = true;

// while (ulang === true)  {	
//  	var com = Math.random();

//  	if (com <= 0.3) {
//  		com = 'gajah';
//  	} else if (com > 0.3 && com <= 0.6) {
//  		com = 'orang';
//  	} else {
//  		com = 'semut';
//  	}

//  	var player = prompt('Pilih\n(gajah, orang, semut)');
// 	if (player == com) {
// 		hasil = 'SERI!'
// 	} else if (player == 'gajah') {
// 		hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
// 	} else if (player == 'orang') {
// 		hasil = (com == 'semut') ? 'MENANG!' : 'KALAH!';		
// 	} else if (player == 'semut') {
// 		hasil = (com == 'gajah') ? 'MENANG!' : 'KALAH!';
// 	} else {
// 		hasil = 'salah Ketik !!'
// 	}
// 	alert('com = ' + com + '\nplayer = ' + player + '\nkamu ' + hasil);
// 	ulang = confirm('Mulai lagi ??');
// }


// console.log('com = ' + com);
// console.log('player = ' + player);
// console.log(hasil);





