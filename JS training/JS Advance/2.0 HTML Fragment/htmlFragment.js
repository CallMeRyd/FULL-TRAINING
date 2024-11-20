/// /// HTML Fragment
// //
//



// Contoh_I
const mhs1 = {
	nama : 'Restu Arya Andhika',
	umur : 18,
	nim : '2413010718',
	email : 'callmeryd111@gmail.com'
};

const el1 = `<div class="mhs1">
	<h2>${mhs1.nama}</h2>
	<span class="nim">${mhs1.nim}</span>
</div>`;



// Contoh_II
// Looping
const mhs2 = [
	{
		nama: 'Call Me Ryd',
		email: 'Callmeryd111@gmail.com'
	},
	{
		nama: 'Dinda',
		email: 'dinda204gegege@gmail.com'
	},
	{
		nama: 'Timmy',
		email: 'timmyasbadboy@gmail.com'
	},
];

const el2 = `<div class="mhs2">
	${mhs2.map(m => `<ul>
		<li>${m.nama}</li>
		<li>${m.email}</li>
	</ul>`).join('')} 
</div>`;
// .join('') untuk menghilangkan koma pada array.



// Contoh_III
// Conditionals
// Ternary
const lagu = [
	{
		judul: 'December',
		penyanyi: 'Neck Deep'
	},
	{
		judul: 'Right Now',
		penyanyi: 'One Direction',
		feat: 'Ryd'
	},
	{
		judul: 'Beauty And A Beat',
		penyanyi: 'justin Bieber',
		feat: 'Nicki Minaj'
	},
	{
		judul: 'a thousand years',
		penyanyi: 'Cristiana Perri'
	},
]

const el3 = `${lagu.map(n => `<div class="lagu">
	<h2>${n.judul}</h2>
	<h3>${n.penyanyi} ${n.feat ? `(Feat. ${n.feat})` : ``}</h3>`).join('------------------------------------------------------------------')}
</div>`;




// Contoh_IV
// Nested
// HTML Fragment bersarang
const mhs4 = {
	nama: 'Restu Arya Andhika',
	semester: 1,
	mataKuliah: [
		'Pancasila',
		'Fotografi',
		'Algoritma Pemrograman',
		'PTI',
		'Sistem Oprasi',
		'Office Application',
		'Jaringan Komputer',
		'Elektronika'
	]
};

function cetakMataKuliah(mataKuliah) {
	return `
		<ol>
			${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
		</ol>
	`;
}

const el4 = `<div class="mhs4">
	<h2>${mhs4.nama}</h2>
	<span class="semester">Semester ${mhs4.semester}</span>
	<h4>Mata Kuliah :</h4>
	${cetakMataKuliah(mhs4.mataKuliah)}
</div>`;




document.body.innerHTML = el1;
document.body.innerHTML = el2;
document.body.innerHTML = el3;
document.body.innerHTML = el4;