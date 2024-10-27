// Pengelolaan Bus



// Sopir
// Trayek
// Kas
// Penumpang
	// penumpang naik
	// penumpang turun


var Bus = function (sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.tambahPenumpang = function (nama) {
		this.penumpang.push(nama);

		return this.penumpang;
	}

	this.turun = function (nama, kas) {
		if (this.penumpang.length === 0) {
			alert('Bus masih kosong !!');
			
			return false;
		} 
		for (var i = 0; i < this.penumpang.length; i++) {
			if (nama == this.penumpang[i]) {
				this.penumpang[i] = undefined;
				this.kas += kas;

				return this.penumpang;
			}
		}
	}
}

var bus1 = new Bus('Rizky', ['Jogja', 'Solo'], [], 0);
var bus2 = new Bus('Adhi', ['Denpasar', 'Sanur'], [], 0);

// menambah penumpang di console
	// bus1.tambahPenumpang('Arya');







