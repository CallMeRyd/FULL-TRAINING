

// if
//

//		if (kondisi) {
//			aksi //--> lakukan jika boolean true
//		}

//	  ex: 
		var angka = 1;
		if (angka === 1) {
			alert('anda memasukkan angka 1');
		}


//		if (kondisi) {
//			aksi 1 //---> jika true maka lakukan aksi 1
//		} else {
//			aksi 2 //---> jika false maka lakukan aksi 2
//		}

//	  ex:
		var angka1 = prompt('masukkan angka: ');
		if (angka % 2 == 0) {
			alert(angka1 + ' adalah bilangan GENAP');
		} else {
			alert(angka1 + ' adalah bilangan GANJIL.');
		}
		

//		if (kondisi 1) {
//			aksi 1
//		} else if (kondisi 2) {
//			aksi 2
//		} else {
//			aksi 3
//		}

//	  ex:
		if (angka2 % 2 == 0) {
			alert(angka1 + ' adalah bilangan GENAP');
		} else if (angka2 % 2 == 1) {
			alert(angka1 + ' adalah bilangan GANJIL.');
		} else {
			alert('yang anda masukkan bukanlah angka!!')
		}
 
