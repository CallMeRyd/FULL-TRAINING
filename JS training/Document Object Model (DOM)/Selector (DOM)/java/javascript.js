// DOM Selection


// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc'
judul.innerHTML = 'Call Me Ryd'


// document.getElementsByTagName() -> HTMLcolection
const p = document.getElementsByTagName('p');

for (var i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}
p[0].innerHTML = 'ini diubah dari JavaScript';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '40px';


// document.getElementByClassName() -> HTMLcolection
// (yang ini ERROR) 


