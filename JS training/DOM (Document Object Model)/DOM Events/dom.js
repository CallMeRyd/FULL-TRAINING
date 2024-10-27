// // // --- DOM Events ------------------------------------------------
// // 
//

// events != event

// Apa itu events ?
	// "events pada JS mempresentasikan sebuah kejadian yang terjadi di dalam DOM.."
	
	// ..kejadian tersebut bisa dilakukan oleh user,
	// (mouse event, keybord event, DLL)

	// ataupun dilakukan secara otomatis oleh API
	// (animasi selesai dijalankan, halaman selesai di load, DLL)

// Cara 'mendengarkan' event
	// - Event Handler
	// 	 - Inline HTML attribute
	// 	 - Element method
	// - addEventListener()

	
//	1) Event Handler
//		+> onclick
			const p2 = document.querySelector('.p2');
			const p3 = document.querySelector('.p3');

			function ubahWarna() {
				p3.style.backgroundColor = 'lightblue';
			}

			p3.onclick = ubahWarna;
//		  NOTE :
//		  	Event Handler akan menimpa.(pakai event listener agar tidak ketimpa)


//	2) addEventListener()
//		+> onclick
			const secB = document.getElementById('b');
			const p4 = document.querySelector('#b p');
			const ul = document.querySelector('#b ul');
			const item1 = ul.querySelector('li:nth-child(1)');

			const newItem = document.createElement('li');
			const teksNewItem = document.createTextNode('item baru');
			newItem.appendChild(teksNewItem);
			newItem.style.backgroundColor = 'orange';

			p4.addEventListener('mouseenter', function () {
				ul.insertBefore(newItem, item1);
				p4.style.backgroundColor = '#ccc';
			});

			p4.addEventListener('mouseleave', function () {
				ul.removeChild(newItem);
				p4.style.backgroundColor = 'white';
			});



// Daftar Event
	// ~ Mouse Event
			// - click
			// - dbclick 
			// - mouseover 
			// - mouseenter 
			// - mouseup 
			// - wheel
			// - ...
	// ~ Keybord Event
			// - keydown
			// - keypress 
			// - keyup
	// ~ Resources Event 
	// ~ Focus Event 
	// ~ View Event 
			// - resize 
			// - scroll
	// ~ Form Event 
			// - reset 
			// - submit
	// ~ CSS Animation & Transition Event 
	// ~ Drag & Drop Event 
	// ~ DLL
// // lihat daftar lengkap nya di:
// 		https://developer.mozilla.org/en-US/docs/Web/Events

			