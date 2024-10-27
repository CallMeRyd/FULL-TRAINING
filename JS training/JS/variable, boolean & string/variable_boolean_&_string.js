// ----------- String --------------

	//	1. escape character 
	//			   \0		|		karakter NULL
	//			   \'		|		'
	//			   \"		|		"
	//			   \\		|		\
	//			   \n 		|		new line/baris baru
	//			   \t 		|		tab
	//			   \b 		|		backspace
	//			   \uXXXX 	|		unicode [X disitu berupa kode untuk menampilkan symbol]
	//					contoh lengkap tentang unicode ada di laman berikuta
	//					https://en.wikipedia.org/wiki/List_of_Unicode_characters
	//			   '\u00A7'	|		'§'
	//			   '\u00A9'	|		'©'
	//			   '\u2122'	|		'™'
	//		  ex : 
			  	const x = '"Gerakan pungut sampah" dilaksanakan pada hari jum\'at'
			  	const y = "\"Gerakan pungut sampah\" dilaksanakan pada hari jum\'at"
			  	const z = 'ini adalah hari' + '\n' + 'jum\'at'
	//		  note : perbedaannya terletak pada penggunaan kutipnya,
	//		  		 dan jika ingin menambahkan kutip di dalam string
	//		  		 bisa menggunakan '\' di awal string yang ingin di tambahkan.

	//	2. Concatenation (konkatenasi) +

	//  3. membandingkan 2 buah string 
	//		  ex : 
	//		  	'Call Me Ryd' == 'call me ryd' [huruf besar dan kecil berbeda]
	//		  	false

	//	4. .lenght (menghitung panjang string)
	//		  ex :
	//		  	1.	'call me ryd' .lenght
	//		  	    11

	//		  	2.  const x = 'call me ryd'
	//		  		a .lenght
	//		  		11
	
	//		  note : spasi juga ke itung


// ------------- Boolean --------------
//	( true || false )
//				

// nilai dalam JS memiliki Boolean tertentu

	//		   -trurhy-		   |||		   -falsy-
	//			true			|			false
	//			non-zero number	|			0
	//			'string'		|			""
	//			object			|			undefined
	//			arrays			| 			null			
	//			function		|			NaN ( not a number ) 	



// ------------ variable ----------------
//		1. var
//			  	var (nama var);
//			ex :
			  var a; // deklarasi & inisialisasi
			  a = 20			  	
//		2. let
//		3. const


















