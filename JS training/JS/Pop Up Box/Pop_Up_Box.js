// // ------------- Consolo.log --------------

// var tes = true;
// var x;
// x = 100

// console.log('Hello World!');
// console.log('isi dari x adalah ' + x + '\n\n');


// // ------------ Pop Up Box ----------------
// while (tes === true) {
// //		1. alert
// //			ex :
// 				alert('Hello');
// 				// alert('My Name is');
// 				// alert('Restu Arya Andhika');
// 				// alert('You can Call Me Ryd');

// //		2. prompt
// 			ex: 
// 				var nama = prompt('masukkan nama anda:');
// 				console.log(nama);
// //		3. confirm
// 			ex : 
// 				var tes = confirm('kamu yakin??'); // ( true / false )
// 				if ( tes === true ) {
// 					console.log('user menekan OK');
// 				} else {
// 					console.log('user menekan Cencel');
// 				}				
// 				console.log('tes = ' + tes + '\n\n');
// }
// alert('lagi dong');


// ------>> ex program sederhana dengan menggunakan pop up

alert('Hello New User!');
alert('Welcome To My Website');
var cm = true;
var newAcc = true;


var newAcc = confirm('create a new account for membership here');
if (newAcc === true) {
	while (cm === true) {
		var nama = prompt('masukkan username: ');
		var pw = prompt('buatlah passward : ')
		alert('username : ' + nama + '\n' + 'password : ' + pw);


		console.log('username : ' + nama + '\n' + 'password : ' + pw + '\n\n');

		var cm = confirm('wanna change it??');
	}
	alert('thanks for being membership in here.');
} else {
	alert('thanks for being membership in here.');
}




