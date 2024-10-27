

//  Object

// jika array -> kumpulan nilai, yang memiliki Index.
// maka object -> kumpulan nilai, yang memiliki nama (tidak ada Index).
//				  object adalah array yang lebih sakti.


// Kenapa Object ??

//		+> Tanpa object
				
//			1) hanya menggunakan variabel
				var namaMhs =  'Restu Arya';
				var umurMhs = 25;
				var lulus = true;
				var IPSemester = [3.54, 3.75, 3.15, 3.12, 4.00];
				// cara menghitung IPKumulatif di console
					IPKumulatif(IPSemester);

//			2) menggunakan array
				var mahasiswa = ['Restu Arya', 25, true, [3.54, 3.75, 3.15, 3.12, 4.00]];				
				// cara menghitung IPKumulatif di console
					IPKumulatif(mahasiswa[3]);
				
			// Function
				function IPKumulatif(IPsemester) {
					var total = 0;
					for (var i = 0; i < IPSemester.length; i++) {
						total += IPSemester[i];

					}
					return total / IPSemester.length;
				};

//			3) menggunakan Object (ex:1)
				var mahasiswa1 = {									//
					nama : 'Restu Arya',							//
					umur : 25,										// Properti
					lulus : true,									//
					ipsemester : [3.54, 3.75, 3.15, 3.12, 4.00],	//
					ipkumulatif : function () { 				// 
						var total = 0;							//
						var ips = this.ipsemester;				//
						for (var i = 0; i < ips.length; i++) {	// Method
							total += ips[i];					//
						}										//
						return total / ips.length;				//
					}											//
				};		
				// cara menghitung IPKumulatif di console
					mahasiswa1.ipkumulatif()	

//					NOTE :
//						variabel didalam object di sebut properti
//						dan function di dalam object di sebut 
//						method.						

//			4) menggunakan object (ex:2)
				var pekerja = {
					nama : 'Ryd',
					umur : 25,
					pekerjaan : 'Full Stack Web Development',
					alamat : {
						jalan : 'Jl. abc No. 123',
						kota : 'Solo',
						provinsi : 'Jawa Tengah'
					},
					sapa : function () {
						return 'Hai nama saya ' + this.nama + ', umur saya ' + this.umur + ' dan saya bekerja sebagai ' + this.pekerjaan + '.';
					}
				};
				// cara menampilan di console
					pekerja.sapa()
					pekerja.alamat['provinsi']


// Membuat Object pada JavaScript
		// +> Object Literal
				var mhs1 = {
					nama : 'Restu Arya',
					nrp : '040302552',
					email : 'callmeryd111@gmail.com',
					jurusan : 'Informatika'
				};

				var mhs2 = {
					nama : 'Keyla',
					nrp : '0403088432',
					email : 'keyla@gmail.com',
					jurusan : 'Teknologi Informasi'
				};

		// +> Function Declaration
				function buatObjectMhs(nama, nrp, email, jurusan) {
					var mhs = {};
					mhs.nama = nama;
					mhs.nrp = nrp;
					mhs.email = email;
					mhs.jurusan = jurusan;
					return mhs3;
				}

				var mhs3 = buatObjectMhs('Putri', '040303550', 'putri@gmail.com', 'Teknologi Informasi');
				var mhs4 = buatObjectMhs('Rizky', '040307004', 'rizky@gmail.com', 'Informatika');
		
		// +> Constructor Function (Keyword new)
				function Mahasiswa(nama, nrp, email, jurusan) {
					// var this = {} -----> ini di buatkan otomatis oleh JS jadi tidak perlu pakai lagi.
					this.nama = nama;
					this.nrp = nrp;
					this.email = email;
					this.jurusan = jurusan;
					// return this; -----> ini di buatkan otomatis oleh JS jadi tidak perlu pakai lagi.
				}

				var mhs5 = new Mahasiswa('Adhi', '040308921', 'adhi@gmail.com', 'Informatika');				 
				var mhs6 = new Mahasiswa('Galang', '040309933', 'galang@gmail.com', 'Teknologi Informasi');	
				// harus menggunakan keyword new saat menggunakan constructor

//				  NOTE : untuk membedakan function consatructor 
//						 dengan function lain adalah dengan cara 
//						 menggunakan huruf kapital di bagian nama function.

//				  NOTE : perbedaaan function constructor dengan 
//				  		 function lain terletak pada penggunaan return
//						 dan cara pemanggilannya.

		// +> Object.create()






// this
		// cara 1 - function declaration
			// function halo() {
			// 	console.log(this);
			// 	console.log('halo');
			// }

			// this.halo();
				// NOTE :
				// "this" mengembalikan object Global.

		// cara 2 - object literal
			// var obj = {a : 10, nama : 'arya'};
			// obj.halo = function() {
			// 	console.log(this);
			// 	console.log('hallo');
			// }
			// obj.halo();
				// NOTE : 
				//  "this" mengembalikan object yang bersangkutan.

		// cara 3 - constructor
			// function Hallo() {
			// 	console.log(this);
			// 	console.log('hallo');
			// }
			// var obj1 = new Hallo();
			// var obj2 = new Hallo();
				// NOTE : 
				//  "this" mengembalikan object yang baru di buat.














