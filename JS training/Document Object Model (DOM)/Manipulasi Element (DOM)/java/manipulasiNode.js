// Manipulasi Node

//	~> document.createElement()
//	~> document.createTextNode()
//	~> node.appendChild() -> menambahkan di akhir ...
//	~> node.insertBefore() -> menambahkan sebelum ...
//	~> parentNode.removeChild()
//	~> parentNode.replaceChild()
//	...

// membuat Eleement dan membuat isi / text
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('New Paragraph');

// merangkai text ke dalam Element
pBaru.appendChild(textPBaru);

// menambahkan section id='a' dengan Element 'p'
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);






// Element
const li2 = document.querySelector('li:nth-Child(2)');
const ul = document.querySelector('#b ul');
const newLi = document.createElement('li');
const newTextLi = document.createTextNode('Hidden Item');

// merangkai
newLi.appendChild(newTextLi);

// node.insertBefore(<Element baru>, <sebelum apa>);
ul.insertBefore(newLi, li2);









// remove Child
const linkA = document.querySelector('section#a a');

sectionA.removeChild(linkA);









// merangkai
const newH2 = document.createElement('h2');
const newTextLi2 = document.createTextNode('Judul Item');
newH2.appendChild(newTextLi2);

// style
newH2.style.color = 'crimson';

// replace Child
const sectionB = document.getElementById('b');
const p4 = document.querySelector('.p4');
sectionB.replaceChild(newH2, p4);







// Manipulasi Node (Method Baru (Experimental))

// parrentNode.append()
// parrentNode.replaceWith()
// parrentNode.remove()
// parrentNode.after()
// parrentNode.before()
// parrentNode.prepend()
// ...






// penanda yang berubah 
newH2.style.backgroundColor = 'lightgreen';
newLi.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';







