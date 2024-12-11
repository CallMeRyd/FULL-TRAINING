/// /// Destructuring Assignment
// //
//

// Destructuring Function Array ----------------------------------------------
	const heheha = function (a, b) {
		return [a + b, a - b, a * b];
	}

	const [plus = 'TIdak Ada', minus, times, per = 'TIdak Ada'] = heheha(2, 3);
	
	console.log(times); 
	console.log(per); 
//		NOTE : [per = 'TIdak Ada'] ini adalah defult jika tidak ada di functionnya.
// ===========================================================================

// Destrucyion Function Object -----------------------------------------------
	const woo = function (a, b) {
		return {
			tambah: a + b,
			kurang: a - b,
			kali: a * b,
			bagi: a / b
		}
	}

	const {kali, kurang, bagi, tambah} = woo(2, 3);

	console.log(kali);
	console.log(tambah);
// ===========================================================================


// Destructuring Function Arguments ------------------------------------------
	const mhs = {
		nama: 'Ryd',
		umur: 18,
		nilai: {
			tugas: 90,
			uts: 87,
			uas: 85
		}
	}

	function haiyaaa({nama, umur, nilai: {tugas, uts, uas}}) {
		return `Nama saya ${nama}, saya berumur ${umur}, nilai UAS saya ${uas}`;
	}

	console.log(haiyaaa(mhs));
// ===========================================================================
