/// /// Tagged Templates
// //
//


// Tagged Templates
	const nama = "Arya";
	const umur = 18;

	function coba() {
		return 'coba';
	}

	function coba1(strings) {
		return strings;
	}

	function coba2(strings, nama, umur) {
		return nama;
	}

	function coba3(strings, nama, umur) {
		return umur;
	}

	function coba4(strings, nama, umur, email) {
		return email;
	}

	function coba5(strings, ...values) {
		return values;
	}

	function coba6(strings, ...values) {
		return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
	}

	const str = coba `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str1 = coba1 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str2 = coba2 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str3 = coba3 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str4 = coba4 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str5 = coba5 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	const str6 = coba6 `Hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
	
	console.log(str);
	console.log(str1);
	console.log(str2);
	console.log(str3);
	console.log(str4);
	console.log(str5);
	console.log(str6);







// ME TIME :: 
		const name = 'ryd';
		const age = 18;
		const email = 'callmeryd111@gmail.com';

		function highlight(strings, ...values) {
			return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
		}	

		const words = highlight `My name is ${name}, and I'm ${age} years old, email saya adalah ${email}`;
		document.body.innerHTML = words;