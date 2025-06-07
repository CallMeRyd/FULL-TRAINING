const container = document.querySelector('.container1');
const deskrip = document.querySelector('.deskrip');
const btnInfo = document.querySelector('.btn-info');

container.addEventListener('click', function (e) {
	console.log(e.target);
	if (e.target.className == 'btn-info') {
		deskrip.classList.toggle('open');
	}
})

