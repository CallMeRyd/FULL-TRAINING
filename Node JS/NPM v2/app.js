// CORE NODE
import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// NPM
import validator from 'validator';
import chalk from 'chalk';

let pesan = `
Nama = ${chalk.bgBlue.bold.blue('Call Me Ryd')}
Kelas = ${chalk.red('1H')}
NIM = ${chalk.green('2413010718')}
`

console.log(chalk.bgGreen.black('Hello World !!'));
console.log(pesan);

rl.question(`Masukkan ${chalk.yellow('nama')} Anda : `, nama => {
	rl.question(`Masukkan ${chalk.yellow('Email')} Anda : `, email => {
		const a = validator.isEmail(email);
		if (a == false) {
			console.log(`Kamu salah memasukkan Email !!`);

			rl.close();
		} else {
			rl.question(`Masukkan ${chalk.yellow('password')} Anda : `, password => {
				rl.question(`Masukkan ${chalk.yellow('No HP')} Anda : `, noHP => {
					const b = validator.isMobilePhone(noHP, 'id-ID');
					if (b == false) {
						console.log(`Kamu salah memasukkan No HP !!`);
						
						rl.close();
					} else {
						const user = { nama, email, password, noHP };
						const file = fs.readFileSync('./data/db.JSON', 'utf-8');
						const dataBase = JSON.parse(file);

						dataBase.push(user);
						fs.writeFileSync('./data/db.JSON', JSON.stringify(dataBase));

						// selesai
						console.log(`Terimakasih ${chalk.green(nama)}, telah membuat Account ${chalk.red('!!!')}`);

						rl.close();
					}

					rl.close();
				})
			})
		}
	})	
})