// DOM Selection

// document.getElementById('');
// document.getElementsByTagName('');
// document.getElementByClassName('');

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '25px' ;

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.innerHTML = 'Bagian yang ke-2';
li2.style.backgroundColor = 'orange';


// document.querySelectorAll()
const p = document.querySelectorAll('p');
for (var i = 0; i < 3; i++) {
	p[i].style.color = 'red';
}


// mengubah node-root
const sectionB = document.querySelector('section#b');
const par4 = sectionB.getElementsByTagName('p')[0];
par4.style.backgroundColor = 'yellow';