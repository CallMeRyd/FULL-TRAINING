/// /// Promise
// //
//


// jQeury Library
		// $.ajax({
		// 	url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
		// 	success: movies => console.log(movies)
		// });

// Modern JS
		// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
		// 	.then(response => response.json())
		// 	.then(response => console.log(response));


// Pormise
	// "object yang mempresentasikan keberhasilan / kegagalan dari 
	//  event yang asynchronous di masa yang akan datang."
	// janji (terpenuhi / ingkar)
	// satates (fulfilled)

// Contoh 1
	let api = true;
	const janji1 = new Promise((resolve, reject) => {
		if ( api ) {
			resolve(`Janji Terpenuhi !!`);
		} else {
			reject(`Ingkar Janji..`);
		}
	});


	// janji1
	// 	.then(response => console.log(`OK!! : ${response}`))
	// 	.catch(response => console.log(`NOT ON !! : ${response}`));
	// ::: Toggle ::: //

// Contoh 2 (Delay & Finally)
		let tanggapan = true;
		const janji2 = new Promise((resolve, reject) => {
			if ( tanggapan ) {
				setTimeout(() => {
					resolve(`Berhasil !!`);
				}, 2000);
			} else {
				setTimeout(() => {
					reject(`Gagal !!`);
				}, 2000);
			}
		});

		// console.log(`Mulai`);
		// console.log(janji2
		// 	.finally(() => console.log(`Selesai Menunggu !`)) 
		// 	.then(() => console.log(janji2))
		// 	.catch(() => console.log(janji2))
		// );
		// console.log(`Selesai`);
		// ::: Toggle ::: //

// Promise.all()
		let afacu = true;
		const film = new Promise ((resolve, reject) => {
			if ( afacu ) {
				setTimeout(() => {
 					resolve([{
 						judul: 'End Game',
 						sutradara: 'Call Me Ryd',
 						actors: 'Tonny, Banner',
 						idFilm: 1
 					},
 					{
 						judul: 'Infity War',
 						sutradara: 'Call Me Ryd',
 						actors: 'Joko**, ***bowo',
 						idFilm: 2
 					}]);
				}, 1000);
			} else {
				setTimeout(() => {
					reject(`Gagal Melakukan Fetch Film !!`);
				});
			}
		});

		let huhu = false;
		const cuaca = new Promise((resolve, reject) => {
			if ( huhu ) {
				setTimeout(() => {
					resolve([{
						hari: 'selasa',
						tanggal: '23 November 2024',
						temp: 28,
						kondisi: 'Cerah Berawan',
						idCuaca: 1
					},
					{
						hari: 'rabu',
						tanggal: '24 November 2024',
						temp: 23,
						kondisi: 'Berawan',
						idCuaca: 2
					}]);
				}, 500);
			} else {
				reject(`Gagal Melakukan Fetch Cuaca !!`);
			}
		});

		console.log('mulai');
		console.log(Promise.all([film, cuaca])
			.finally(() => console.log(`Akhirnya Selesai ~ ~ ~`))
			.then(response => {
				const [film, cuaca] = response;
				console.log(film);
				console.log(cuaca);
			})
			.catch(response => console.log(response))
		);
		console.log('selesai');




