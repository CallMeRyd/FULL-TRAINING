

let gotcha = false;
const mhs = new Promise((resolve, reject) => {
	if ( gotcha ) {
		setTimeout(() => {
			resolve([{
				nama: 'Kurniawan',
				nim: '241301090',
				kelas: '1K',
				idMhs: 0
			},
			{
				nama: 'donni',
				nim: '241301084',
				kelas: '1K',
				idMhs: 1
			},
			{
				nama: 'Afifah',
				nim: '241301012',
				kelas: '1K',
				idMhs: 2
			}]);
		}, 2000);
	} else {
		reject('Gagal melakukan Fetch');
	}
});

const sekolah = new Promise((resolve, reject) => {
	if ( gotcha ) {
		setTimeout(() => {
			resolve([{
				namaSekolah: 'SMA N 1 Bayat',
				alamat: 'Bayat, Klaten',
				idSekolah: 0
			},
			{
				namaSekolah: 'SMA N 1 Cawas',
				alamat: 'Barepan, Klaten',
				idSekolah: 1
			},
			{
				namaSekolah: 'SMA N 1 Sukoharjo',
				alamat: 'Sukoharjo',
				idSekolah: 2
			},]);
		}, 1000);
	} else {
		reject('Gagal Melakukaa fetch');
	}
});



console.log(`mulai`);
console.log(Promise.all([mhs, sekolah])
	.finally('Selesai Menunggu ...')
	.then((response) => {
		const [mahasiswa, sekolah] = response;
		mahasiswa.forEach(m => console.log(m.nama));
		console.log(sekolah);
	})
	.catch((response) => console.log(response))
);
console.log(`selesai`);