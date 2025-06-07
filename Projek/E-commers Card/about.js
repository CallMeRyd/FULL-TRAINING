const card = document.querySelector('.container');
const deskrip = document.querySelector('.deskrip');
const btnInfo = document.querySelector('.btn-info');

card.addEventListener('click', function (e) {
	console.log(e.target);
	if (e.target.className == 'btn-info') {
		deskrip.classList.toggle('open');
	}
})

