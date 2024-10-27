// DOM (Document Object Model)

// _________________________________________________________________________ //

// DOM -> Representasi element HTML pada  // Antarmuka perograman 
//		  Document menjadi sebuah object. // berbasis object.


// DOM
// +> DOM membuat seluruh komponen dari halaman Web dapat diakses
//    & di manipulasi.
// +> Komponen :
//  		+> element HTML
//  		+> Atribut
//  		+> Text
//   		+> DLL
// +> DOM dapat di manipulasi (dibuat, diubah, dihapus) 
//    menggunakan JavaScript.


// DOM Tree
//	NodeList vs. HTMLCollection
//		- Keduanya merupakan Kompulan 'node'
//		- struktur datanya mirip 'array'
//		- nodeList dapat berisi node apapun, sedangkan HTMLCollection
//		  harus berisi element HTML
//		- HTMLCollection bersifat live sedangkan NodeList tidak


// Structur Hierarki DOM
//	>> Root Node
//		~ node yang menjadi sumber dari semua node lain di dalam DOM
//		~ document
//	>> Parent Node
//		~ node yang berada 1 tingkat di ats node lain
//		~ body adalah parent dari h1, p, p, div dan a
//	>> Child Node
//	 	~ node yang berada 1 tingkat di bawah node lain
//	 	~ h1 adalah child dari Body


// DOM Selection
//	+> DOM Selection Method

//			Method					   |||			Hasil
//		- getElementById()				|		element 
//		- detElementsByTagName()		|		HTMLCollection
//		- getElementsByClassName()		|		HTMLCollection
//		- querySelector()				|		element
//		- querySelectorAll()			|		nodeList	


// DOM Selection
// 	1) document.getElementById() -> element
		const judul = document.getElementById('judul');	
		// manipulasi
		judul.style.color = 'red';
		judul.style.backgroundColor = '#ccc';
		judul.innerHTML = 'Qonku';

// 2) document.getElementsByTagName() -> HTMLCollection (kumpulan element HTML)
		const p = document.getElementsByTagName('p');
		// manipulasi
		for (var i = 0; i < p.length; i++) {
			p[i].style.backgroundColor = 'lightblue'
		}

		const h1 = document.getElementsByTagName('h1')[0];
		// manipulasi
		h1.style.fontSize = '50px';

// 3) document.getElementByClassName() -> HTMLCollection (kumpulan element HTML)
		const p1 = document.getElementsByClassName('p1');
		// MAnipulasi
		p1[0].innerHTML = 'ini diubah menggunakan JS'; 

// 4) document.querySelector() -> element
		const p4 = document.querySelector('#b p');
		const li2 = document.querySelector('#b ul li:nth-child(2)');
		// Manipulasi
		p4.style.color = 'green';
		p4.style.fontSize = '30px';
		li2.style.backgroundColor = 'orange';

// 5) document.querySelectorAll() -> Nodelist
		const pAll = document.querySelectorAll('p');
		// Manipulasi
				// for (var i = 0; i < pAll.length; i++) {
				// 	pAll[i].style.backgroundColor = 'pink';
				// }
		pAll[2].style.backgroundColor = 'pink';

// Node Root
	const sectionB = document.getElementById('b');
	const secBLi1 = sectionB.querySelector('section#b ul li:nth-child(1)');
	const secBLi3 = sectionB.querySelector('section#b ul li:nth-child(3)');
	// Manipulasi
	secBLi1.style.backgroundColor = 'black';
	secBLi3.style.backgroundColor = 'gold';
	secBLi1.style.color = '#fff';























//_________________________________________________________________________________