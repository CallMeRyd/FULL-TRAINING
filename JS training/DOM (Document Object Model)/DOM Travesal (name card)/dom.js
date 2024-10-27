// // // --- DOM Traversal ---------------------------------
// //		(Penulusuran DOM)
//


// DOM Traversal Method
//			Method					|		Hasil
	// 1. parentNode					  node
	// 2. parentElement					  element
	// 3. nextElementSibling			  node
	// 4. nextElementSibling			  element
	// 5. previousElementSibling		  node
	// 6. previousElementSibling		  element


// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function () {
// 	card.style.display = 'none';
// });


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
	});
});



const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.parentElement.parentElement.parentElement);





