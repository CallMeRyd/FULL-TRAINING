/// /// Latihan Tagged Templates
// //
//

function program(player, pilihanBot) {
  const pemenang = ['gajah', 'semut', 'orang']; // Array untuk menyimpan aturan pemenang
  const indexPlayer = pemenang.indexOf(player);
  const indexBot = pemenang.indexOf(pilihanBot);

  return (indexPlayer == indexBot) ? 'SERI !!' : (indexPlayer == (indexBot + 1) % 3) ? 'MENANG !!' : 'KALAH !!';
}									

let player = prompt(`Masukkan Pilihan Anda : `);
let bot = ['gajah', 'orang', 'semut'];

// program
let randomIndex = Math.floor(Math.random() * bot.length);
let pilihanBot = bot[randomIndex];
let result = program(player, pilihanBot);


console.log (`Pilihan player \t:  ${player}`);
console.log (`Pilihan Bot \t:  ${pilihanBot}`);
console.log (`Hasil  \t\t\t:  ${result}`);










































// const nama = 'Arya';
// const umur = 18;

// function highlight(strings, ...values) {
// 	return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = highlight `Hallo, nama saya ${nama}, saya berumur ${umur}, dan email saay.`;
// document.body.innerHTML = str;
