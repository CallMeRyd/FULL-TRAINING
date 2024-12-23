import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	outout: process.stdout,
});


// Membuat Direktory 'data' jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}


// Membuat File 'data/contacts.json' jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8');
}


// Pertanyaan
const tulisPertanyaan = (pertanyaan) => {
	return new Promise((resolve, reject) => {
		rl.question(pertanyaan, (nama) => {
			const waktu = 500;
			if ( waktu < 5000 ) {
				setTimeout(() => {
					resolve(nama);
				}, waktu)
			} else {
				reject(`Gagal !!`);
			}
		});
	});
};


const main = async () => {
	try {
		const nama = await tulisPertanyaan('Masukkan nama Anda : ');
		const email = await tulisPertanyaan('Masukkan Email Anda : ');
		const noHP = await tulisPertanyaan('Masukkan No HP Anda : ');

		const contact = { nama, email, noHP };
		const fileBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
		const contacts = JSON.parse(fileBuffer);

		contacts.push(contact);

		fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

		console.log(`Terimakasih sudah memasukkan data.`);
		rl.close();
	} catch(err) {
		console.log(`Gagal`);
	}
}


main();