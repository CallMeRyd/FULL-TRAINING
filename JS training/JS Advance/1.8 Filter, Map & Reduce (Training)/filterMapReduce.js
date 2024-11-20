// /// /// LATIHAN 
// // //
// //

// // ambil semua element video
// const videos = Array.from(document.querySelectorAll('[data-duration]')); // bentuknya menjadi Node-List

// // pilih hanya yang 'JAVASCRIPT LANJUTAN'
// let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// // ambil durasi masing2 video
// 	.map(item => item.dataset.duration)


// // ubah durasi menjadi float, ubah menit menjadi detik
// 	.map(waktu => {
// 		// 10:30 --> [10, 30] split
// 		const parts = waktu.split(':').map(part => parseFloat(part));
// 		return (parts[0] * 60) + parts[1];
// 	})

// // jumlahkan semua detik
// 	.reduce((total, detik) => total + detik, 0);

// // ubah formatnya jadi jam, menit, detik
// 	const jam = Math.floor(jsLanjut / 3600); // 1 jam = 3600 detik
// 	jsLanjut = jsLanjut - jam * 3600;
// 	const menit = Math.floor(jsLanjut / 60);
// 	const detik = jsLanjut - menit * 60;

// // simpan di DOM
// 	const pDurasi = document.querySelector('.total-durasi');
// 	pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
// 	const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// 	const pJmlVideo = document.querySelector('.jumlah-video');
// 	pJmlVideo.textContent = `${jmlVideo} Video.`;


// console.log(videos);
// console.log(jsLanjut);
// console.log(jmlVideo);
// console.log(menit);
// console.log(detik);


// ME TIME :: 

const videos = Array.from(document.querySelectorAll('[data-duration'));

// Jumlah Video
const jmlJsVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jumlahVideo = document.querySelector('.jumlah-video');
jumlahVideo.textContent = `${jmlJsVideo} Video.`;

// Durasi Video
let jsVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
	.map(item => item.dataset.duration)
	.map(waktu => {
		const parts = waktu.split(':').map(part => parseFloat(part));
		return ((parts[0] * 60) + parts[1]);
	})
	.reduce((total, detik) => total + detik, 0);

	// Ubah Format format
	const jam = Math.floor(jsVideo / 3600);
	jsVideo = jsVideo - jam * 3600; 
	const menit = Math.floor(jsVideo / 60);
	const detik = jsVideo - menit * 60;

	const totalDurasi = document.querySelector('.total-durasi');
	totalDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`


console.log(jsVideo);
console.log(videos);
console.log(jmlJsVideo);












































