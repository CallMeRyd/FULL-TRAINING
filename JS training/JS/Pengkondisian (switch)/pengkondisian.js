
// switch
//

//		switch (ekspresi) {
//			case "nilai 1":
//				aksi 1
//			[break;]
//			case "nilai 2":
//				aksi 2
//			[break;]
//			case "nilai n":
//				aksi n
//			[break;]
//			defult:
//				aksi defult
//			[break;]
//		}

//	  ex: 
		var angka = prompt('masukkan angka : ')

		switch (angka) {
		case '1' :
			alert('anda memasukkan angka 1');
			break;
		case '2' :
			alert('anda memasukkan angka 2');
			break;
		case '3' :
			alert('anda memasukkan angka 3');
			break;
		default :
			alert('anda memasukkan angka yang SALAH.');
			break;

		}

		var item = prompt('masukkan nama makanan / minuman : \n (contoh : nasi, daging, susu, burger, sosis, softdrink.)')

		switch (item) {
		case 'nasi' :
			alert('makanan / minuman SEHAT!');
			break;
		case 'daging' :
			alert('makanan / minuman SEHAT!');
			break;
		case 'susu' :
			alert('makanan / minuman SEHAT!');
			break;
		case 'burger' :
			alert('makanan / minuman TIDAK SEHAT!');
			break;
		case 'sosis' :
			alert('makanan / minuman TIDAK SEHAT!');
			break;
		case 'softdrink' :
			alert('makanan / minuman TIDAK SEHAT!');
			break;
		default :
			alert('anda memasukkan nama makanan / minuman yang salah!');
			break;
		}





