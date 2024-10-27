// Better Name Card

const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');

container.addEventListener('click', function (e) {
	console.log(e.target);
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	} else if (e.target.className == 'card' || e.target.className == "middle" || e.target.className == "telp" || e.target.className == "nama") {
		alert('Dont Touch Me!!!');
	} else if (e.target.className == 'kopi') {
		container1.style.display = 'flex';
	}
});

container1.addEventListener('click', function (e) {
	if (e.target.className == 'close1') {
		e.target.parentElement.parentElement.parentElement.style.display = 'none';
		e.preventDefault();
	}
});