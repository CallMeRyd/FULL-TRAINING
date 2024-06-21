const title = document.getElementById('judul');
const container = document.querySelector('.container');
const btnColorRandom = document.getElementById('btn');
const seectionA = document.getElementById('a');
const pAll = document.querySelectorAll('#a p');
const link = document.querySelector('section#a a');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const slider = document.querySelector('.slider');
const redBox = document.querySelector('.red-box');
const greenBox = document.querySelector('.green-box');
const blueBox = document.querySelector('.blue-box');
const sRed = document.querySelector('input[name=redS]');
const sGreen = document.querySelector('input[name=greenS]');
const sBlue = document.querySelector('input[name=blueS]');
const mouseSensor = document.querySelector('mouseSensor');
const colorPicker = document.querySelector('.color-picker');
const inputColor2 = document.querySelector('.input-color2');
const sBlue2 = document.querySelector('input[name=blueS2]');

const newBtnReset = document.createElement('button');
const txtnewBtnReset = document.createTextNode('Reset');

const inputColor = document.createElement('p');
const rgbColor = document.createTextNode('| Coppy Here |');

// button baru (reset)
newBtnReset.appendChild(txtnewBtnReset);
seectionA.appendChild(newBtnReset);
// button baru (show RGB)
inputColor.appendChild(rgbColor);
slider.appendChild(inputColor);

// function
function resetColor() {
	p1.style.color = '#000';
	p2.style.color = '#000';
	p3.style.color = '#000';
}
function sliderColor() {
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	slider.style.backgroundColor = 'rgb(' + r +','+ g +',' + b + ')';
	inputColor.innerHTML = 'rgb(' + r +', '+ g +', ' + b + ' )';
}
function sliderColor2() {
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	slider.style.backgroundColor = 'rgb(' + r +','+ g +',' + b + ')';
	inputColor.innerHTML = 'rgb(' + r +', '+ g +', ' + b + ' )';
}
function hilangkanLink() {
	seectionA.removeChild(link);
}
function menambahButton () {
	buttonBaru.appendChild()
}

// button baru (reset)
newBtnReset.addEventListener('click', function () {
	seectionA.style.backgroundColor = 'lightgrey';
	resetColor();
});

// warna random
btnColorRandom.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	resetColor();
	console.log(r +' '+ g +' '+ b);
	seectionA.style.backgroundColor = 'rgb(' + r +','+ g +','+ b + ')';
});

// menghilangkan Link
hilangkanLink();

// warna favorite
p1.addEventListener('click', function () {
	seectionA.style.backgroundColor = 'lightblue';
	p1.style.color = 'crimson';
	p2.style.color = '#000';
	p3.style.color = '#000';
});
p2.addEventListener('click', function () {
	seectionA.style.backgroundColor = 'lightgrey';
	p1.style.color = '#000';
	p2.style.color = 'crimson';
	p3.style.color = '#000';
});
p3.addEventListener('click', function () {
	seectionA.style.backgroundColor = 'lightgreen';
	p1.style.color = '#000';
	p2.style.color = '#000';
	p3.style.color = 'crimson';
});

// set warna (slider)
sRed.addEventListener('input', function (e) {
	sliderColor();
});
sGreen.addEventListener('input', function (e) {
	sliderColor();
});
sBlue.addEventListener('input', function (e) {
	sliderColor();
});

// color cursor
document.body.addEventListener('mousemove', function (e) {
	const r = Math.round((e.clientX / window.innerWidth) * 255);
	const g = Math.round((e.clientY / window.innerHeight) * 255);
	const b = sBlue2.value;
	inputColor2.innerHTML = 'rgb(' + r +', '+ g +', '+ b + ')'
	colorPicker.style.backgroundColor = 'rgb(' + r +','+ g +','+ b + ')';
});
sBlue2.addEventListener('input', function () {
	const b = sBlue2.value; 
	inputColor2.innerHTML = 'rgb(' + r +', '+ g +', '+ b + ')'
	colorPicker.style.backgroundColor = 'rgb(' + r +','+ g +','+ b + ')';
});












// button acak (style:hover)
btnColorRandom.addEventListener('mouseenter', function () {
	btnColorRandom.style.backgroundColor = 'orange';
	btnColorRandom.style.border = '1px solid red';
});
btnColorRandom.addEventListener('mouseleave', function () {
	btnColorRandom.style.border = '1px solid';
	btnColorRandom.style.backgroundColor = '#fff';
	btnColorRandom.style.borderColor = 'grey';
});

// button reset (style:hover)
newBtnReset.addEventListener('mouseenter', function () {
	newBtnReset.style.backgroundColor = 'orange';
	newBtnReset.style.border = '1px solid red';
});
newBtnReset.addEventListener('mouseleave', function () {
	newBtnReset.style.border = '1px solid';
	newBtnReset.style.backgroundColor = '#fff';
	newBtnReset.style.borderColor = 'grey';
});

// innerHTML
title.innerHTML = 'Color Picker Lite';
p1.innerHTML = 'Light Blue';
p2.innerHTML = 'Light Grey';
p3.innerHTML = 'Light Green';
btnColorRandom.innerHTML = 'Acak Warna';
// style
btnColorRandom.style.backgroundColor = '#fff';
btnColorRandom.style.borderColor = 'grey';
newBtnReset.style.backgroundColor = '#fff';
newBtnReset.style.borderColor = 'grey';
inputColor.style.backgroundColor = '#fff';
title.style.color = 'crimson';
title.style.backgroundColor = 'rgb()';
seectionA.style.backgroundColor = 'lightgrey';
container.style.backgroundColor = 'lightgrey';
container.style.borderColor = 'orange';

for (var i = pAll.length - 1; i >= 0; i--) {
	pAll[i].style.backgroundColor = '#fff';
}


