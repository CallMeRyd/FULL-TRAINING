const pGajah = document.querySelector('.gajah');
const pOrang = document.querySelector('.orang');
const pSemut = document.querySelector('.semut');

// Komputer
function pilihanComputer() {
	const comp = Math.random();
	if (comp <= 0.34) return 'gajah';
	if (comp > 0.34 && comp <= 0.67) return 'orang';
	return 'semut';
}

function getResult(comp, player) {
	if (player == comp) return 'SERI';
	if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
	if (player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
	if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}


// Animation Random
function animation() {
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime()
	setInterval(function () {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInteval;
			return;
		}
		imgComputer.setAttribute('src', gambar[i++] + '.jpg');
		if (i == gambar.length) {
			i = 0;
		}
	}, 100);
}
	

// Interactive
	const pilihan = document.querySelectorAll('li img');
	pilihan.forEach(function (pil) {
		pil.addEventListener('click', function () {
			const computer = pilihanComputer();
			const player = pil.className;
			const result = getResult(computer, player);

			animation();

			setTimeout(function () {
				const imgComp = document.querySelector('.img-computer');
				imgComp.setAttribute('src', computer + '.jpg');

				const info = document.querySelector(".info");
				info.innerHTML = result;
			}, 1000);			
		});
	});


// Check








