// DOM Events

// Events != Even 
// events = kejadian
// even = meskipun

// Event => 'event' pada JavaScript mempresentasikan sebuah kejadian yang terjadi di dalam DOM .
//			..kejadian tersebut bisa dilakukan oleh user,
//			(mouse event, keybord event, DLL)
//			ataupun dilakukan secara otomatis oleh API
//			(animasi selesai dijalankan, halaman selasai di load, DLL)

// Cara 'Mendengarkan' event
//		~> Event Handler
//			- Inline HTML attribute [!not recomended]
//			- Element method
//		~> AddEventListener()




// event Handler (onclick)
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

function warnaP2() {
	p2.style.backgroundColor = 'lightblue'
}
function warnaP3() {
	p3.style.backgroundColor = 'lightblue'
}

p2.onclick = warnaP2;
p3.onclick = warnaP3;




// addEventListener
const ul1 = document.querySelector('#b ul');
const li1 = document.querySelector('li:nth-Child(1)');
const li2 = document.querySelector('li:nth-Child(2)');
const p4 = document.querySelector('#b p');

const addUl1 = document.createElement('li');
const txtAddUl1 = document.createTextNode('item didapatkan');
addUl1.appendChild(txtAddUl1);

p4.addEventListener('dblclick', function () {
	ul1.insertBefore(addUl1, li2);
	addUl1.style.color = 'green';
	addUl1.style.backgroundColor = '#3333';
	alert('ok..');
});

li1.addEventListener('mouseenter', function () {
	li1.style.backgroundColor = 'red';
});
li1.addEventListener('mouseleave', function () {
	li1.style.backgroundColor = 'orange';
});





// perbedaan event Handler & addEventListener
// 		~> 'event handler' hanya bisa 'diperintah' 1 kali dan jika ada perintah lagi setelahnya maka akan 'menimpa'
//		~> 'addEventListener' bisa melakukan banyak 'perintah'

// List Event
// 		+> Mouse Event
// 			- click 
// 			- dblclick
// 			- mouseover
// 			- mouseenter
//			- mouseleave
// 			- mouseup
// 			- wheel
// 			... 
// 		+> Keybord Event
// 			- keydown
// 			- keypress
// 			- keyup
// 			...
// 		+> Resource Event
// 		+> Focus Event
// 		+> View Event 
// 			- resize
// 			- scroll
// 			...
// 		+> Form Event
// 			- reset
// 			- submit
// 			... 
// 		+> CSS Animation & Transition Event 
// 		+> Drag & Drop Event 
// 		...

// penanda
p2.style.backgroundColor = 'lightgreen';
p3.style.backgroundColor = 'lightgreen';
p4.style.backgroundColor = 'lightgreen';
li1.style.backgroundColor = 'lightgreen';
