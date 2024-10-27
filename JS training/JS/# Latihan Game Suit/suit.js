// ---------------------- Buatan Sendiri ______--------------

// var mulai = confirm('Mulai Game !!');
// var lagi = true;



// if (mulai === true) {
// 	while (lagi === true) {	
		

// 		// COMPUTER SYSTEM
// 		var com = Math.random();
// 			if (com <= 0.33) {
// 				var com = 'gajah';
// 			} else if (com > 0.33 && com <= 0.66) {
// 				var com = 'semut';
// 			} else {
// 				var com = 'manusia';
// 			}

// 		// USER CHOOSE	
// 		var user = prompt('silahkan pilih salah satu : \n (gajah, semut, manusia)');
		

// 		// GAME RULES
// 		if (user === com) {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nPermainan SERI.');
// 		} else if (user === 'semut' && com === 'gajah') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu MENANG.');
// 		} else if (user === 'semut' && com === 'manusia') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu KALAH.');		
// 		} else if (user === 'manusia' && com === 'semut') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu MENANG.');
// 		} else if (user === 'manusia' && com === 'gajah') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu KALAH.');		
// 		} else if (user === 'gajah' && com === 'manusia') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu MENANG.');
// 		} else if (user === 'gajah' && com === 'semut') {
// 			alert('user = ' + user + '\ncomputer = ' + com + '\n\nKamu KALAH.');		
// 		} else {
// 			alert('Ketik hurufnya dengan benar seperti contoh !!');
// 		}
// 	lagi = confirm('Mulai Lagi ??');
// 	}
// }


// console.log('com = ' + com);
// console.log('user = ' + user);

var result = '';
var ulang = true;

while (ulang === true) {
	// computer 
	var comp = Math.random();
	if (comp <= 0.3) {
		comp = 'semut';
	} else if (comp > 0.3 && comp <= 0.6) {
		comp = 'orang';
	} else {
		comp = 'gajah';
	}

	// player
	var player = prompt('silahkan pilih salah satu : \n(gajah, semut, orang)');

	// rules
	if (player == comp) {
		result = 'SERI!'
	} else if (player == 'semut') {
		result = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
	} else if (player == 'orang') {
		result = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
	} else if (player == 'gajah') {
		result = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	} else {
		// alert('Ketik hurufnya dengan benar seperti contoh !!');
		result = 'SALAH KETIK!';
	}
	alert('Kamu = ' + player + '\nKomputer = ' + comp + '\n\nkamu ' + result);
	var ulang = confirm('Main Lagi ??');
}
alert('Terimakasiih sudah mampir di Web ini !!');


console.log('com = ' + comp);
console.log('user = ' + player);
console.log(result);