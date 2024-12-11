/// /// For..of & For..in
// //
//

// Spread Operator
	// "Memecah (Expand / unpack) iterables menjadi single element".
			// Menggabungkan 2 array
				const mhs = ['koko', 'huhu', 'galih'];
				const dosen = ['Rajna', 'Tommy', 'Hari'];

				const orang = [...mhs, 'Ajisaka', ...dosen];
				console.log(orang); 

			// Meng-copy array
				const huhu = ['gugu', 'gaga', 'sasa'];
				console.log(huhu);

				const copyHuhu = [...huhu];
				copyHuhu[0] = 'Juju';
				console.log(copyHuhu);

			// Manipulasi HTML
				const list = document.querySelectorAll('.nama');
				const inList = [...list].map( a => a.textContent);
				console.log(inList); 

			// Manipulasi HTML & Pembuatan Hover
				const hero = document.querySelector('h1');
				const huruf = [...hero.textContent].map( m => `<span>${m}</span>`).join('');
				
				console.log(huruf);
				hero.innerHTML = huruf;


// Rest Parameter
	// "Merepresentesikan argument pada function dengan 
	//  jumlah yang tidak terbatas menjadi sebuah array".
			// Menympan sisa dari array 
				const fufufafa = (a, ...arr) => `a = ${a} dan Arr = ${arr.reduce((re, arr) => re + arr)}`;
				const re = fufufafa(1, 2, 3, 4, 5, 6, 7, 8);

				console.log(re);

				// Contoh lain
				const jumlahkan = (...arr) => arr.reduce((a, b) => a + b);
				const ha = jumlahkan(1, 2, 3, 4, 5, 6, 7, 8);

				console.log(ha);


	// Kelompok Array
				const kelompok = ['Arya', 'Rizky', 'Ali', 'Azhar', 'Arkhan'];
				const [ketua, wakil, ...anggota] = kelompok;

				console.log(ketua);
				console.log(wakil);
				console.log(anggota.join(','));


	// Team Object
				const team = {
					pm: 'Ryd', 
					frontEnd1: 'Timmy',
					frontEnd2: 'Michel',
					backEnd: 'Jack',
					ux: 'Susup',
					devOps: 'Rizky'
				}

				const {pm, ...myTeam} = team;
				console.log(pm);
				console.log(myTeam);


	// Filtering
				const filteringBy = (type, ...values) => {
					return values.filter(v => typeof v === type);
				}

				console.log(filteringBy('number', 1, 2, true, 'Ryd', 'Pancasila', false, 10));
				

