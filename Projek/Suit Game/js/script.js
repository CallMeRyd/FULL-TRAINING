const gajah = document.querySelector('.gajah');
const orang = document.querySelector('.orang');
const semut = document.querySelector('.semut');
const boxResult = document.querySelector('.result');
const result = document.querySelector('.result p');



const com = '';
function getComputerChoose(a) {
	const com = Math.random();
	if (com <= 0.3333333333333333) return 'gajah';
	if (com > 0.3333333333333333 && com <= 0.6666666666666666) return 'orang';
	if (com > 0.6666666666666666) return 'semut';
}

function sistem(player) {
	if (player == com) return 'SERI';
	if (player == 'gajah') return (com == 'semut') ? 'LOSE' : 'WIN'; 
	if (pleyer == 'orang') return (com == 'semut') ? 'WIN' : 'LOSE';
	if (player == 'semut') return (com == 'orang') ? 'LOSE' : 'WIN';
}

gajah.addEventListener('click', function () {
	const player = 'gajah';
	const pilihanCom = getComputerChoose();

	const imgCom = document.querySelector('#com-img');
	imgCom.setAttribute('src', 'img/' + pilihanCom + '.jpg');

	sistem(player);

	// console.log(sistem);
	console.log(getComputerChoose());
});


