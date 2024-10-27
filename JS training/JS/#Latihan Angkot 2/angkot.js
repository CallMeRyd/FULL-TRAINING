var noAngkot = 1;
var angkotBerjalan = 6;
var jmlAngkot = 10;
var lembur1 = 8;
var lembur2 = 10;
var lembur3 = 5;


for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot === lembur3) {
			console.log('Angkot No. ' + noAngkot + ' sedang lembur.')	
	} else {
		if (noAngkot <= angkotBerjalan) {
			console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.')
		} else if (noAngkot === lembur1 || noAngkot === lembur2 || noAngkot === lembur3){
			console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
		} else {
			console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
		}
	}
}


//________________________________________________________-__________________--________________




for (noAngkot; noAngkot <= jmlAngkot ; noAngkot++) {
	if (noAngkot <= angkotBerjalan && noAngkot != lembur3) {
		console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.')
		} else if (noAngkot === lembur1 || noAngkot === lembur2 || noAngkot === lembur3){
			console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
		} else {
			console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.')
		}

}