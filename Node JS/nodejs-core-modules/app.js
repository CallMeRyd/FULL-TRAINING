// NodeJS Modules
	// 1. Core Modules
	// 2. Local Modules
	// 3. Third Party Modules

// Core modules
		// const fs = require('fs');

		// try {
		// 	fs.writeFileSync('text.txt', 'Hello World Secara Synchronous (Berurutan) !!');
		// } catch (e) {
		// 	console.log(e);
		// }


// Menuliskan file ke style secara Asynchronous
		// const fs = require('fs');

		// fs.writeFile('data/text.txt', 'Hello World secara Aysnchronous (non blocking) !!', (e) => {
		// 	console.log(e);
		// });


// Membaca isi file Synchronous (Berurutan)
		// const fs = require('fs');

		// const text = fs.readFileSync('./data/text.txt');
		// console.log(text.toString());


// Membaca isi file secara Asynchronous (non blocking)
		// const fs = require('fs');

 		// fs.readFile('./data/text.txt', 'utf-8', (err, data) => {
		// 	if (err) throw err;
		// 	console.log(data);
		// });


// Readline
		// const readline = require('readline');
		// const rl = readline.createInterface({
		// 	input: process.stdin,
		// 	output: process.stdout,
		// });

		// rl.question('Masukkan nama Anda : ', nama => {
		// 	rl.question('Anda Berumur : ', umur => {
		// 		rl.question('Berapa nomer Anda : ', noTelp => {
		// 			console.log(`Terimakasih ${nama}, Berumur ${umur}, dengan nomer HP ${noTelp}`);
		// 			rl.close();	
		// 		})
		// 	})
		// })



// Challange :: Made BY.RYD
	// Buat User memasukkan Inputan pada prompt dan inputan tersebut masukkan ke file contacts.JSON
		// const fs = require('fs');
		// const readline = require('readline');

		// const rl = readline.createInterface({
		// 	input: process.stdin,
		// 	output: process.stdout,
		// })

		// rl.question('Masukkan nama Anda : ', nama => {
		// 	rl.question('Berapa umur Anda : ', umur => {
		// 		rl.question('Masukkan Nomer HP Anda : ', noTelp => {
		// 			console.log(`Terimakasih ${nama}, dengan No HP ${noTelp}`);
		// 			try {
		// 				fs.writeFileSync('./data/contacts.JSON', 
		// 			 `[
		// 					{
		// 						"nama" : "${nama}",
		// 						"umur" : "${umur}",
		// 						"noTelp" : "${noTelp}",
		// 					}
		// 				]`);
		// 			} catch (e) {
		// 				console.log(e);
		// 			}
					

		// 			rl.close();
		// 		})
		// 	})
		// })
		


// Challege :: By.YT
		const readline = require('readline');
		const fs = require('fs');

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})

		rl.question('Masukkan Nama Anda : ', nama => {
			rl.question('Berapa umur Anda : ', umur => {
				rl.question('Masukkan Nomer HP Anda : ', noHP => {
					const contact = { nama, umur, noHP };
					const file = fs.readFileSync('./data/contacts.JSON', 'utf-8');
					const contacts = JSON.parse(file);

					contacts.push(contact);

					fs.writeFileSync('./data/contacts.JSON', JSON.stringify(contacts));

					console.log('Terimakasih sudah memasukkan data');

					rl.close();
				})
			})
		})


		






