// pengulangan

var cobalagi = true
while ( cobalagi == true ) {

	// pilihan player

	var player = prompt ('Silahkan masukkan pilihan Anda:\n ketik: semut / gajah / orang ');

	// pilihan bot

	var com = Math.random();

	if ( com < 0.34 ) {
		com = 'GAJAH' && 'gajah';
	} else if ( com >= 0.34 && com < 0.67 ) {
		com ='ORANG' && 'orang';
	} else {
		com ='SEMUT' && 'semut';
	}

	// permainan

	var result ='';

	if ( player == com ) {
		result ='SERI!';
	// if ( player == 'gajah' || player == 'GAJAH' && com == 'gajah' || com == 'GAJAH' ) {
	// 	result ='SERI!';
	// } else if ( player == 'semut' || player == 'SEMUT' && com == 'semut' || com == 'SEMUT' ) {
	// 	result ='SERI!';
	// } else if ( player == 'orang' || player == 'ORANG' && com == 'orang' || com == 'ORANG' ) {
	// 	result ='SERI!';	
	} else if ( player == 'gajah' || player == 'GAJAH' ) {
		result = (com == 'ORANG' && 'orang' ) ? 'MENANG!' : 'KALAH!';
	} else if ( player == 'orang' || player == 'ORANG' ) {
		result = (com == 'GAJAH' && 'gajah' ) ? 'KALAH!' : 'MENANG!';
	} else if ( player == 'semut' || player == 'SEMUT' ) {
		result = (com == 'GAJAH' && 'gajah' ) ? 'MENANG!' : 'KALAH!';
	} else {
		result = 'Kamu salah memasukkan'
	}

	// result

	if ( player == 'gajah' || player =='semut' || player == 'orang' || player == 'SEMUT' || player == 'ORANG' || player == 'GAJAH' ) {
		alert ( 'Kamu memilih ' + player );
		alert ('BOT memilh ' + com );
		alert ( player + ' VS ' + com );
		alert ('Kamu ' + result );
	} else {
		alert ( result );
	}
	cobalagi = confirm ('Main lagi ??');
}
// alert ('TERIMAKASIH TELAH BERMAIN !!');