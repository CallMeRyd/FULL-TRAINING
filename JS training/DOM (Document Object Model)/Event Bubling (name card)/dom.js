// // // --- DOM Traversal ---------------------------------
// //		(Penulusuran DOM)
//

// DOM Traversal
const close = document.querySelectorAll('.close');

// for (var i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function (e) {
// 		e.target.parentElement.style.display = 'none';
// 	});
// }


// DOM Traversal
close.forEach(function (el) {
	el.addEventListener('click', function (e) {
		e.target.parentElement.style.display = 'none'; // menarget parent-nya
		e.preventDefault();   
		e.stopPropagation(); 
	});						 
});							 

	  NOTE :
//	  1) .preventDefault
//	  		tidak menjalankan aksi default dalaam kasus ini 'a' yang 
//			defaultnya merefresh web setelah di klik menjadi hilang. 
//	  2) .stopPropagation (event bubbling)
			



const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
	card.addEventListener('click', function (e) {
		alert('ok');
	});
});


// const nama = document.querySelector('.nama');
// console.log(nama);
// console.log(nama.parentElement);
// console.log(nama.parentElement.parentElement);
// console.log(nama.parentElement.parentElement.parentElement);





