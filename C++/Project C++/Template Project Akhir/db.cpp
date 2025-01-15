
	        // Keranjang
	        cout << barang[indeks].nama << "telah ditambahkan." << endl;
	        cout << "Keranjang Anda : " << endl;
	        for (int i = 0; i < keranjang.size(); i++) {
	        	keranjang[i].nama = barang[indeks].nama;
				keranjang[i].harga = priceAmount; 
				
				cout << i + 1 << ". " << keranjang[i].nama << endl;
			}
