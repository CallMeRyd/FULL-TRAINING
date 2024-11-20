/// /// Arrow Function (Advance)
// //
//

// Animation menggunakan JS
const box = document.querySelector('.box');
let satu = 'size';
let dua = 'caption';

if (this?.classList?.contains(satu)) {
	[satu, dua] = [dua, satu];
}

box.addEventListener('click', function () {
	console.log(this);
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});


