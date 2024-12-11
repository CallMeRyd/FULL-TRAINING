/// /// Call Back
// //
//


// Callback
//  "Function yang dikirimkan sebagai parameter pada function lain /
//	 Function yang dalamnya ada function."

// Synchronous Callback
	// Contoh 1
		function tampilNama(callback) {
			const nama = prompt(`Masukkan Nama : `);
			callback(nama);
		}

		tampilNama(nama => alert(`Hallo, ${nama}`));




	// Contoh 2
		// function getDataMahasiswa(url, success, error) {
		// 	let xhr = new XMLHttpRequest();

		// 	xhr.onreadystatechange = function () {
		// 		if (xhr.readyState === 4) {
		// 			if (xhr.status === 200) {
		// 				success(xhr.response);
		// 			} else if (xhr.status === 404) {
		// 				error();
		// 			}
		// 		}
		// 	}

		// 	xhr.open('get', url);
		// 	xhr.send();
		// }

		// console.log(`mulai`);
		// getDataMahasiswa('mahasiswa.json', results => {
		// 	const mhs = JSON.parse(results);
		// 	mhs.forEach(m => console.log(m.nama));
		// }, () => {

		// });
		// console.log(`selesai`);

	// Contoh 3
	// Penggunaan jQuery
		console.log(`Mulai`);
		$.ajax({
			url: 'mahasiswa.json',
			success: (mhs) => {
				mhs.forEach(m => console.log(m.nama));
			},
			error: (e) => {
				console.log(e.responseText);
			}
		});
		console.log(`Selesai`);

