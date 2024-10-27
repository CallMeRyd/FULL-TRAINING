// // // --- Manipulasi Element -----------------------------------------
// //
//


//	+> element.innerHtml();
		const title = document.getElementById('judul');
		title.innerHTML = '<em>Call Me Ryd</em>';

		// const secA = document.querySelector('section#a');
		// secA.innerHTML = '<div><p>Paragraf 1</p><p>Paragraf 2</p><p>Paragraf 3</p></div>';


//	+> element.style.<property>;
		const li1 = document.querySelector('section#b ul li:nth-child(1)');
		li1.style.backgroundColor = 'orange';


//	+> element.setAttribute();
		// NOTE :
			// dengan menggunakan setAttribute maka attribut apapun yang
			// ada akan di "timpa".
		const p1 = document.getElementsByTagName('p')[0];
		p1.setAttribute('name', 'Ryd'); // --> menambah attribute baru 
										//     (id, name, class, href)

		const aLink = document.querySelector('section#a a');
		aLink.setAttribute('id', 'link');
		// aLink.removeAttribute('href'); // menghapus attribute


//	+> element.classList
//

//		+> element.classList.add()
			p1.classList.add('label'); 
			// NOTE :
			// 	menambahkan class 'label'.

//		+> element.classList.remove()
			p1.classList.remove('label');
			// NOTE :
			// 	menghapus class 'label'.

//		+> element.classList.toggle()
			p1.classList.toggle('light-blue');
			// NOTE :
			// 	menambahkan class 'label' jika di cek tidak ada dan
			//  menghapus class 'label' jika di cek ada.

//		+> element.classList.item()
			console.log(p1.classList.item(1));
			// NOTE :
			// 	mencari nama class menggunakan urutan Index.

//		+> element.classList.contains()
			console.log(p1.classList.contains('light-blue'));
			// NOTE :
			// apabila true maka ada class tersebut dan sebaliknya.

//		+> element.classList.replace()
			p1.classList.replace('dua', 'empat');
			// NOTE :
			// seperti namanya me-replace dua jadi empat.

// // // --- Manipulasi Node ------------------------------------------
// //
//


// -> Buat element baru [1]
//	~~ document.createElement()
		const pBaru = document.createElement('p');

//	~~ document.createTextNode()
		const teksPBaru = document.createTextNode('paragraf baru');

// -> simpan tulisan ke dalam paragraf
//  ~~ node.appendChild()
		pBaru.appendChild(teksPBaru);

// -> simpan pBaru di akhir section A
		const secA = document.getElementById('a');
		secA.appendChild(pBaru);

// -> Buat element baru [2]
		const ul = document.querySelector('section#b ul');
		const item2 = ul.querySelector('li:nth-child(2)');
		const liBaru = document.createElement('li');
		const teksLiBaru = document.createTextNode('item baru');

		liBaru.appendChild(teksPBaru);

//  ~~ node.insertBefore()
		ul.insertBefore(liBaru, item2);

//  ~~ parentNode.removeChild(<isi>, <sebelum ini>)
		const link = document.getElementsByTagName('a')[0];
		secA.removeChild(link);

// -> Buat element baru [3]
		const secB = document.getElementById('b');
		const p4 = secB.querySelector('p');

		const h2Baru = document.createElement('h2');
		const teksH2 = document.createTextNode('Judul Baru');

		h2Baru.appendChild(teksH2);

//  ~~ parentNode.replaceChild(<node baru>, <node lama>)
		secB.replaceChild(h2Baru, p4);

// Style :: 
	pBaru.style.backgroundColor = 'lightgreen';
	liBaru.style.backgroundColor = 'lightgreen';
	h2Baru.style.backgroundColor = 'lightgreen';


// ME TIME ::
	// const ul = document.querySelector('section#b ul');
	// const item2 = ul.querySelector('li:nth-child(2)');
	// const liBaru = document.createElement('li');
	// const teksLiBaru = document.createTextNode('item baru');

	// liBaru.appendChild(teksPBaru);

	// ul.insertBefore(liBaru, item2);

		// const link = document.getElementsByTagName('a')[0];
		// secA.removeChild(link);

		// const secB = document.getElementById('b');
		// const p4 = secB.querySelector('p');

		// const h2Baru = document.createElement('h2');
		// const teksH2 = document.createTextNode('Judul Baru');

		// h2Baru.appendChild(teksH2);
		// secB.replaceChild(h2Baru, p4);







