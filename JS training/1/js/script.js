// PopUp

	alert('hello');
	alert('para kaum rebahan');
	alert('gimana nih kabar kalian?');
	alert('masih nganggur aja kan..');
	alert('wkwkwkkwkwkwk');
	alert('mau kerjaan?, ikut gw aja..');
	alert('tinggal masukin username dan password akun google kalian, nanti kalo udah bakalan diproses selama kurang lebih 5 menit')

	var tes = confirm('Kamu yakin??');

	if( tes === true ) {
	var nama = prompt('isi username:');
	var password = prompt('password:');
	alert('Welcome ' + nama);
	alert('dengan password ' + password);

// while/pengulangan

	alert('Punya Cita-Cita ?');
	var pilihlagi = true;

	while( pilihlagi === true ) {
		var pekerjaan = prompt('Pilih pekerjaan yang anda inginkan !');
		alert('data anda tersimpan sebagai ' + pekerjaan);
		pilihlagi = confirm('klik OK, jika mau pekerjaan lebih ?');
	}
	alert('Terimakasih telah menggunakan layanan kami..');

	} else {
		alert('silahkan cari pekerjaan lain!!');
		alert('jangan rebahan mulu....!!!!');
 }

// for/sitact pengulangan

	alert('Menggunakan syntact "for"');
	for( var i = 0; i < 5; i++) {
		alert('Hello World');
	}
	alert('selesai');

// penggunaan if/percabangan

	var angka = prompt('masukkan angka: ');
	if( angka % 2 === 0) {
		alert(angka + ' bilangan genap');
	} else {
		alert(angka + ' bilangan ganjil');
	}


// console.log

var x = 10;
console.log('hello World');
console.log('isi dari x adalah ' + x);