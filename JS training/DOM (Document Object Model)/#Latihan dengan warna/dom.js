const btnVafColor = document.querySelector('.btnVafColor');
// const body = document.getElementsByTagName('body')[0];
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// --- Buat Baru --- //
	const randomBtn = document.createElement('button');
	const textRandomBtn = document.createTextNode('Gambling Color');

	randomBtn.appendChild(textRandomBtn);
	randomBtn.setAttribute('type', 'button');
	document.body.insertBefore(randomBtn, btnVafColor);
// ---------------- //



	btnVafColor.addEventListener('click', function () {
		// document.body.style.backgroundColor = 'lightblue';
		// document.body.setAttribute('class', 'light-blue')
		document.body.classList.toggle('light-blue');
	});

	randomBtn.addEventListener('click', function () {
		const r = Math.round(Math.random() * 255 + 1);
		const g = Math.round(Math.random() * 255 + 1);
		const b = Math.round(Math.random() * 255 + 1);
		document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
		// Check:
		console.log(r + ',' + g + ',' + b);
	});

	sMerah.addEventListener('input', function () {
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
	});

	sHijau.addEventListener('input', function () {
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
	});

	sBiru.addEventListener('input', function () {
		const r = sMerah.value;
		const g = sHijau.value;
		const b = sBiru.value;
		document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
	});



// --- Style --- //
	randomBtn.style.fontSize = '30px';
	randomBtn.style.padding = '10px 30px';
// ------------- //

//	ul.insertBefore(liBaru, item2);

// Check:











