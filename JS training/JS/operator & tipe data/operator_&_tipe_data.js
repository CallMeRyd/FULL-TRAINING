alert('Hello World');
const a = 100

function rata3(a, b, c) {
	const jumlah = a + b + c;
	return jumlah/3;
}

// JS ada 6 tipe data 
		// 1. Number
		// 2. String
		// 3. Boolean
		// 4. Object
		// 5. Function
		// 6. Undefined

// JS ada operator
		// 1. aritmatika ( +, -, *, /, %[sisa bagi] )

		// 2. penugasan ( =, -=, *=, +=, /=, %= )
		//		  ex :
		//			const x = 10
		//			x += 5
		//			x = 15	

		// 3. perbandingan
		//			==		|		sama dengan
		//			!=		|		tidak sama dengan
		//			===		|		strict sama dengan
		//			!==		|		strict tidak sama dengan
		//			>		|		lebih besar dari
		//			<		|		lebih kecil dari
		//			>=		|		lebih besar sama dengan
		//			<=		|		lebih kecil sama dengan
		//		note : nantinya jika dilakukan perbandingan maka 
		//			   akan menghasilkan boolean ( true / false )

		// 4. logika
		//			&&		|		and
		//			||		|		or
		//			!		|		not
		//		  ex : 
		//			1.  const x = 12
		//			  	(x % 2 == 0) && (x > 10)
		//			  	true

		//			2.  const y = 12
		//				(x % 2 == 0) || (x < 10) [jika salah satu benar maka true]
		//				true

		//			3.  const z = 12
		//				(x > 10)
		//				true

		//				!(x > 10) [pembalikan fakta]
		//				false

		// 5. string
		//			+		|		operator penggabung string
		//		  ex : 
		//		  	1. 	const a
		//		  		const b 

		//		  		a = 'apple'
		//		  		b = 'pen'

		//		  		a + ' ' + b
		//		  		'apple pen'

		// 6. kondisional
		//			(kondisi) ? benar : salah
		//		  ex : 
		//		  	1.  const x = 10
		//		  		(x % 2 == 0) ? 'genap' : 'ganjil' [kondisi benar salahnya 
		//		  		'genap'							   bisa di 
		//		  										   ganti dengan function, 
		//		  										   boolean, string, DLL]
				  		
		// 7. typeof
		//		  ex : 
		//		  	1.  typeof (10)
		//		  		"number"

		//		  	2.  typeof ('10')
		//		  		"string"

		//		  	3.  typeof (true)
		//		  		"boolean"