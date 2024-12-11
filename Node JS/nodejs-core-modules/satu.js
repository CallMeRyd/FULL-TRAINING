// JSON.parse() adalah sebuah fungsi bawaan dalam JavaScript 
// 		(termasuk Node.js) yang digunakan untuk mengubah string 
// 		JSON menjadi objek JavaScript.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
}) 

rl.question('Buat Username : ', username => {
	rl.question('Buat Password : ', password => {
		rl.question('Masukkan Email : ', email => {
			const player = { username, password, email };
			const file = fs.readFileSync('./data/players.JSON', 'utf-8');
			const players = JSON.parse(file);
			players.push(player);

			fs.writeFileSync('./data/players.JSON', JSON.stringify(players));
			console.log(`Terimakasih sudah membuat akun @${username} !!!`);


			rl.close();
		})
	})
})



