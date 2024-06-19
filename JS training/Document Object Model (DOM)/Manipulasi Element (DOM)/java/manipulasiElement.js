// Manipulasi Element


// .innerHTML = '';
const title = document.getElementById('judul');
title.innerHTML = '<em>Call Me Ryd</em>'

// const secA = document.getElementById('a');
// secA.innerHTML = 'Hello World'; 


// .style.<propertiCSS>
const li2 = document.querySelector('li:nth-child(2)');
li2.style.backgroundColor = 'orange'



// .getAttribute();
// .setAttribute();
// .removeAttribute();
// contoh Attribute -> 'class','id','href',DLL.

const judul = document.getElementsByTagName('h1')[0];
const a = document.querySelector('section#a a');
const p2 = document.querySelector('.p2');

// menambahkan attribute dengan .setAttribute()
judul.setAttribute('name', 'bagianJudul');

// mengetahui attribute dengan .getAttribute()
// ( di console web browser )
//		> a.getAttribute('href');
//		> judul.getAttribute('id');

// menghapus attribute dengan removeAttribute()
// ( di console web browser )
//		> a.removeAttribute('href');


// .ClassList.add()
// .ClassList.remove()
// .ClassList.toggle() 
// .ClassList.item() -> unutuk mengetahui nama kelas pada sebuah element
// .ClassList.contains() 
// .ClassList.replace()

const btn = document.getElementById('btn');
// ( contoh di console web browser )
//		> btn.ClassList.item(2);
//		> btn.ClassList.toggle('light-blue');
//		> btn.ClassList.replace('dua', 'empat');
//		> btn.ClassList.contains('satu');
//		> btn.ClassList.add('lima');

