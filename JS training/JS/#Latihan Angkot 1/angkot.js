var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroprasi = 6;

while (noAngkot <= angkotBeroprasi) {
	console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
	noAngkot++
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
}
